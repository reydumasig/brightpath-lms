-- ─────────────────────────────────────────────────────────────
-- BrightPath LMS — Supabase Schema Migration
-- Run once against: memcdxfldbytydwnuwps.supabase.co
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
-- We use Google domain-restricted OAuth in the app layer, so
-- anon key access is scoped by the LMS logic (not Supabase auth).
ALTER TABLE bp_learners          ENABLE ROW LEVEL SECURITY;
ALTER TABLE bp_progress          ENABLE ROW LEVEL SECURITY;
ALTER TABLE bp_quiz_submissions  ENABLE ROW LEVEL SECURITY;
ALTER TABLE bp_certificates      ENABLE ROW LEVEL SECURITY;

-- Allow full access via anon key (domain gate is enforced in-app by Google OAuth)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'bp_learners_open') THEN
    CREATE POLICY bp_learners_open         ON bp_learners         FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'bp_progress_open') THEN
    CREATE POLICY bp_progress_open         ON bp_progress         FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'bp_quiz_open') THEN
    CREATE POLICY bp_quiz_open             ON bp_quiz_submissions FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'bp_certs_open') THEN
    CREATE POLICY bp_certs_open            ON bp_certificates     FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- Done.
SELECT 'BrightPath LMS schema ready.' AS status;
