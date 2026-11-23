-- ─────────────────────────────────────────────────────────────
-- Applicant assessment scoring (admin-only)
-- Run AFTER supabase-lms-security.sql (uses bp_is_admin / bp_my_email).
-- Safe to re-run.
--
-- The rubric itself (answer key content) is NOT in this file or the repo:
-- load it from the private rubric SQL kept outside the repo.
-- ─────────────────────────────────────────────────────────────

-- Rubric: one JSON document, readable by admins only.
CREATE TABLE IF NOT EXISTS bp_assessment_rubric (
  id          TEXT PRIMARY KEY,
  rubric      JSONB NOT NULL,
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE bp_assessment_rubric ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS bp_assessment_rubric_admin_read ON bp_assessment_rubric;
CREATE POLICY bp_assessment_rubric_admin_read ON bp_assessment_rubric FOR SELECT TO authenticated
  USING ((SELECT bp_is_admin()));

-- Scores: one row per candidate code.
CREATE TABLE IF NOT EXISTS bp_assessment_scores (
  assessment_code TEXT PRIMARY KEY,
  marks           JSONB NOT NULL DEFAULT '{}'::jsonb,  -- rubric item id -> points / true
  notes           TEXT,
  part1           INTEGER,
  part2           INTEGER,
  part3           INTEGER,
  total           INTEGER,
  knocked_out     BOOLEAN DEFAULT FALSE,
  passed          BOOLEAN,
  scored_by       TEXT,
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE bp_assessment_scores ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS bp_assessment_scores_admin_all ON bp_assessment_scores;
CREATE POLICY bp_assessment_scores_admin_all ON bp_assessment_scores FOR ALL TO authenticated
  USING ((SELECT bp_is_admin())) WITH CHECK ((SELECT bp_is_admin()));

-- Who scored it and when is recorded by the database, not the browser.
CREATE OR REPLACE FUNCTION bp_assessment_scores_stamp()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.scored_by  := bp_my_email();
  NEW.updated_at := now();
  RETURN NEW;
END $$;
DROP TRIGGER IF EXISTS bp_assessment_scores_stamp ON bp_assessment_scores;
CREATE TRIGGER bp_assessment_scores_stamp
  BEFORE INSERT OR UPDATE ON bp_assessment_scores
  FOR EACH ROW EXECUTE FUNCTION bp_assessment_scores_stamp();

REVOKE ALL ON bp_assessment_rubric, bp_assessment_scores FROM anon;

SELECT 'Assessment scoring tables ready.' AS status;
