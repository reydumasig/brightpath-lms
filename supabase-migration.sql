-- ─────────────────────────────────────────────────────────────
-- BrightPath LMS — Supabase Schema Migration
-- Run once against: iwkwtduribxfazkyvbry.supabase.co
-- ─────────────────────────────────────────────────────────────

-- 1. Learner profiles (one row per Google account)
CREATE TABLE IF NOT EXISTS bp_learners (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email        TEXT UNIQUE NOT NULL,
  name         TEXT,
  picture      TEXT,
  role         TEXT DEFAULT 'learner' CHECK (role IN ('learner', 'admin')),
  job_title    TEXT DEFAULT 'Direct Support Professional',
  status       TEXT DEFAULT 'Onboarding',
  joined_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at   TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Per-learner, per-module progress
CREATE TABLE IF NOT EXISTS bp_progress (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  learner_email  TEXT NOT NULL REFERENCES bp_learners(email) ON DELETE CASCADE,
  module_id      TEXT NOT NULL,   -- e.g. 'm01', 'm02' … 'm11'
  status         TEXT DEFAULT 'not-started'
                   CHECK (status IN ('not-started', 'in-progress', 'completed')),
  percent        INTEGER DEFAULT 0 CHECK (percent BETWEEN 0 AND 100),
  score          INTEGER          CHECK (score BETWEEN 0 AND 100),
  completed_at   TIMESTAMPTZ,
  updated_at     TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (learner_email, module_id)
);

-- 3. Quiz submissions (audit trail + analytics)
CREATE TABLE IF NOT EXISTS bp_quiz_submissions (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  learner_email  TEXT NOT NULL,
  module_id      TEXT NOT NULL,
  score          INTEGER NOT NULL CHECK (score BETWEEN 0 AND 100),
  passed         BOOLEAN NOT NULL,
  submitted_at   TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Issued certificates
CREATE TABLE IF NOT EXISTS bp_certificates (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  learner_email  TEXT NOT NULL,
  module_id      TEXT NOT NULL,
  module_title   TEXT,
  score          INTEGER CHECK (score BETWEEN 0 AND 100),
  issued_at      TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (learner_email, module_id)
);

-- ─── Auto-update updated_at ──────────────────────────────────
CREATE OR REPLACE FUNCTION bp_set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END; $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'bp_learners_updated_at') THEN
    CREATE TRIGGER bp_learners_updated_at
      BEFORE UPDATE ON bp_learners
      FOR EACH ROW EXECUTE FUNCTION bp_set_updated_at();
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'bp_progress_updated_at') THEN
    CREATE TRIGGER bp_progress_updated_at
      BEFORE UPDATE ON bp_progress
      FOR EACH ROW EXECUTE FUNCTION bp_set_updated_at();
  END IF;
END $$;

-- ─── Row Level Security ──────────────────────────────────────
-- Sign-in is verified by Supabase Auth (Google); rows are scoped by policies
-- in supabase-lms-security.sql.
ALTER TABLE bp_learners          ENABLE ROW LEVEL SECURITY;
ALTER TABLE bp_progress          ENABLE ROW LEVEL SECURITY;
ALTER TABLE bp_quiz_submissions  ENABLE ROW LEVEL SECURITY;
ALTER TABLE bp_certificates      ENABLE ROW LEVEL SECURITY;

-- Access policies live in supabase-lms-security.sql (run it after this file).
-- Do NOT add open "USING (true)" policies here: they expose all staff data to the public key.

-- 5. Applicant assessment results (standalone portal, code-based auth)
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
ALTER TABLE bp_assessment_results ENABLE ROW LEVEL SECURITY;
-- No open policy: candidates use the functions in supabase-assessment-hardening.sql.

-- Done.
SELECT 'BrightPath LMS schema ready.' AS status;
