-- ─────────────────────────────────────────────────────────────
-- Applicant assessment: server-side code check + locked-down results
-- Run in the Supabase SQL editor BEFORE deploying the updated
-- assessment.html / index.html. Safe to re-run.
-- ─────────────────────────────────────────────────────────────

-- Results table (also in supabase-migration.sql; repeated here so this file runs on its own).
CREATE TABLE IF NOT EXISTS bp_assessment_results (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_code  TEXT UNIQUE NOT NULL,
  candidate_name   TEXT NOT NULL,
  started_at       TIMESTAMPTZ,
  submitted_at     TIMESTAMPTZ,
  part1_response   TEXT,
  part2_issues     TEXT,
  part2_method     TEXT,
  part2_assumptions TEXT,
  part3_message    TEXT,
  part3_actions    TEXT,
  tools_used       TEXT,
  time_taken_secs  INTEGER
);
ALTER TABLE bp_assessment_results ENABLE ROW LEVEL SECURITY;  -- no policies = no direct access

-- Paste / tab-switch / typing-timeline signals recorded by assessment.html.
ALTER TABLE bp_assessment_results ADD COLUMN IF NOT EXISTS integrity_log JSONB;

-- Candidates + their codes live only in the database (never in page source).
CREATE TABLE IF NOT EXISTS bp_assessment_candidates (
  code  TEXT PRIMARY KEY,
  name  TEXT NOT NULL
);
ALTER TABLE bp_assessment_candidates ENABLE ROW LEVEL SECURITY;  -- no policies = no direct access

-- Remove the open policy so candidates cannot read or edit each other's results.
DROP POLICY IF EXISTS bp_assessment_open ON bp_assessment_results;

-- Start or resume an attempt. Returns status: ok | invalid | submitted | expired
CREATE OR REPLACE FUNCTION bp_assessment_start(p_code TEXT)
RETURNS JSON LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  c  bp_assessment_candidates%ROWTYPE;
  r  bp_assessment_results%ROWTYPE;
  v_code TEXT := upper(regexp_replace(coalesce(p_code,''), '\s', '', 'g'));
BEGIN
  SELECT * INTO c FROM bp_assessment_candidates WHERE bp_assessment_candidates.code = v_code;
  IF NOT FOUND THEN RETURN json_build_object('status','invalid'); END IF;

  INSERT INTO bp_assessment_results (assessment_code, candidate_name, started_at)
  VALUES (c.code, c.name, now())
  ON CONFLICT (assessment_code) DO NOTHING;

  SELECT * INTO r FROM bp_assessment_results WHERE assessment_code = c.code;
  IF r.submitted_at IS NOT NULL THEN
    RETURN json_build_object('status','submitted','name',c.name);
  END IF;
  IF r.started_at + interval '60 minutes' < now() THEN
    -- Window ran out without a submit: lock it in as submitted so it cannot be reopened.
    UPDATE bp_assessment_results
       SET submitted_at = r.started_at + interval '60 minutes', time_taken_secs = 3600
     WHERE assessment_code = c.code;
    RETURN json_build_object('status','expired','name',c.name);
  END IF;
  RETURN json_build_object(
    'status','ok','name',c.name,'started_at',r.started_at,
    'part1_response',r.part1_response,'part2_issues',r.part2_issues,
    'part2_method',r.part2_method,'part2_assumptions',r.part2_assumptions,
    'part3_message',r.part3_message,'part3_actions',r.part3_actions,
    'tools_used',r.tools_used,'integrity_log',r.integrity_log);
END $$;

-- Autosave or submit. Accepts a JSON object of the seven answer fields.
CREATE OR REPLACE FUNCTION bp_assessment_save(p_code TEXT, p_fields JSONB, p_submit BOOLEAN DEFAULT FALSE)
RETURNS JSON LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  r bp_assessment_results%ROWTYPE;
  v_code TEXT := upper(regexp_replace(coalesce(p_code,''), '\s', '', 'g'));
BEGIN
  SELECT * INTO r FROM bp_assessment_results WHERE assessment_code = v_code;
  IF NOT FOUND OR r.submitted_at IS NOT NULL THEN
    RETURN json_build_object('status','closed');
  END IF;
  -- 2-minute grace so the automatic submit at 60:00 still lands.
  IF r.started_at + interval '62 minutes' < now() THEN
    RETURN json_build_object('status','closed');
  END IF;
  UPDATE bp_assessment_results SET
    part1_response    = left(coalesce(p_fields->>'part1_response',    part1_response),    20000),
    part2_issues      = left(coalesce(p_fields->>'part2_issues',      part2_issues),      20000),
    part2_method      = left(coalesce(p_fields->>'part2_method',      part2_method),      20000),
    part2_assumptions = left(coalesce(p_fields->>'part2_assumptions', part2_assumptions), 20000),
    part3_message     = left(coalesce(p_fields->>'part3_message',     part3_message),     20000),
    part3_actions     = left(coalesce(p_fields->>'part3_actions',     part3_actions),     20000),
    tools_used        = left(coalesce(p_fields->>'tools_used',        tools_used),        20000),
    integrity_log     = CASE WHEN jsonb_typeof(p_fields->'integrity') = 'object'
                              AND length((p_fields->'integrity')::text) < 200000
                             THEN p_fields->'integrity' ELSE integrity_log END,
    submitted_at      = CASE WHEN p_submit THEN now() END,
    time_taken_secs   = CASE WHEN p_submit
                          THEN least(3600, extract(epoch FROM now() - started_at)::int) END
  WHERE assessment_code = v_code;
  RETURN json_build_object('status', CASE WHEN p_submit THEN 'submitted' ELSE 'saved' END);
END $$;

REVOKE ALL ON FUNCTION bp_assessment_start(TEXT), bp_assessment_save(TEXT, JSONB, BOOLEAN) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION bp_assessment_start(TEXT), bp_assessment_save(TEXT, JSONB, BOOLEAN) TO anon;
