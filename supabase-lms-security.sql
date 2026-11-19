-- ─────────────────────────────────────────────────────────────
-- BrightPath LMS — lock down staff data
--
-- Before running: turn on Google sign-in in Supabase
--   (Authentication → Sign In / Providers → Google → enable, and add the
--    LMS Google Client ID under "Client IDs"). See SECURITY-SETUP steps.
-- Run in the Supabase SQL editor. Safe to re-run.
--
-- After this runs:
--   • Nothing is readable or writable with the public key alone.
--   • A signed-in @brightpath-mn.com / @s360team.com user sees and edits
--     only their own learner row, progress, quiz results and certificates.
--   • Admins (bp_admins table, or admin@ addresses) see everyone.
--   • Admin status is decided here, never by the browser.
-- ─────────────────────────────────────────────────────────────

-- 1. Admin list (moved out of the web page)
CREATE TABLE IF NOT EXISTS bp_admins (
  email TEXT PRIMARY KEY CHECK (email = lower(email))
);
ALTER TABLE bp_admins ENABLE ROW LEVEL SECURITY;  -- no policies = no direct access

INSERT INTO bp_admins (email) VALUES
  ('rey@s360team.com'),
  ('admin@brightpath-mn.com'),
  ('admin@s360team.com'),
  ('johnpaul.miller@brightpath-mn.com'),
  ('brandon.spears@brightpath-mn.com'),
  ('stephanie.noll@brightpath-mn.com'),
  ('rey.dumasig@brightpath-mn.com'),
  ('nicole.buechler@brightpath-mn.com')
ON CONFLICT (email) DO NOTHING;

-- 2. Who is calling? (email comes from the Supabase-signed login token)
CREATE OR REPLACE FUNCTION bp_my_email() RETURNS TEXT
LANGUAGE sql STABLE AS $$
  SELECT lower(coalesce(auth.jwt() ->> 'email', ''))
$$;

CREATE OR REPLACE FUNCTION bp_is_staff() RETURNS BOOLEAN
LANGUAGE sql STABLE AS $$
  SELECT split_part(bp_my_email(), '@', 2) IN ('brightpath-mn.com', 's360team.com')
$$;

CREATE OR REPLACE FUNCTION bp_is_admin() RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT bp_is_staff()
     AND (EXISTS (SELECT 1 FROM bp_admins WHERE email = bp_my_email())
          OR bp_my_email() LIKE 'admin@%')
$$;

REVOKE ALL ON FUNCTION bp_is_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION bp_is_admin() TO authenticated;

-- 3. Remove the old "anyone can do anything" policies
DROP POLICY IF EXISTS bp_learners_open ON bp_learners;
DROP POLICY IF EXISTS bp_progress_open ON bp_progress;
DROP POLICY IF EXISTS bp_quiz_open     ON bp_quiz_submissions;
DROP POLICY IF EXISTS bp_certs_open    ON bp_certificates;

-- The public key gets nothing on these tables.
REVOKE ALL ON bp_learners, bp_progress, bp_quiz_submissions, bp_certificates FROM anon;

-- 4. Learner profiles: own row, or admin. Only admins may write role = 'admin'.
DROP POLICY IF EXISTS bp_learners_select ON bp_learners;
DROP POLICY IF EXISTS bp_learners_insert ON bp_learners;
DROP POLICY IF EXISTS bp_learners_update ON bp_learners;
DROP POLICY IF EXISTS bp_learners_delete ON bp_learners;

CREATE POLICY bp_learners_select ON bp_learners FOR SELECT TO authenticated
  USING ((SELECT bp_is_staff()) AND (email = (SELECT bp_my_email()) OR (SELECT bp_is_admin())));
CREATE POLICY bp_learners_insert ON bp_learners FOR INSERT TO authenticated
  WITH CHECK ((SELECT bp_is_staff()) AND (
    (email = (SELECT bp_my_email()) AND role = 'learner') OR (SELECT bp_is_admin())));
CREATE POLICY bp_learners_update ON bp_learners FOR UPDATE TO authenticated
  USING ((SELECT bp_is_staff()) AND (email = (SELECT bp_my_email()) OR (SELECT bp_is_admin())))
  WITH CHECK ((SELECT bp_is_staff()) AND (
    (email = (SELECT bp_my_email()) AND role = 'learner') OR (SELECT bp_is_admin())));
CREATE POLICY bp_learners_delete ON bp_learners FOR DELETE TO authenticated
  USING ((SELECT bp_is_admin()));

-- 5. Progress, quiz submissions, certificates: own rows, or admin.
DO $$
DECLARE t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY['bp_progress', 'bp_quiz_submissions', 'bp_certificates'] LOOP
    EXECUTE format('DROP POLICY IF EXISTS %1$s_select ON %1$s', t);
    EXECUTE format('DROP POLICY IF EXISTS %1$s_insert ON %1$s', t);
    EXECUTE format('DROP POLICY IF EXISTS %1$s_update ON %1$s', t);
    EXECUTE format('DROP POLICY IF EXISTS %1$s_delete ON %1$s', t);
    EXECUTE format($p$CREATE POLICY %1$s_select ON %1$s FOR SELECT TO authenticated
      USING ((SELECT bp_is_staff()) AND (learner_email = (SELECT bp_my_email()) OR (SELECT bp_is_admin())))$p$, t);
    EXECUTE format($p$CREATE POLICY %1$s_insert ON %1$s FOR INSERT TO authenticated
      WITH CHECK ((SELECT bp_is_staff()) AND (learner_email = (SELECT bp_my_email()) OR (SELECT bp_is_admin())))$p$, t);
    EXECUTE format($p$CREATE POLICY %1$s_update ON %1$s FOR UPDATE TO authenticated
      USING ((SELECT bp_is_staff()) AND (learner_email = (SELECT bp_my_email()) OR (SELECT bp_is_admin())))
      WITH CHECK ((SELECT bp_is_staff()) AND (learner_email = (SELECT bp_my_email()) OR (SELECT bp_is_admin())))$p$, t);
    EXECUTE format($p$CREATE POLICY %1$s_delete ON %1$s FOR DELETE TO authenticated
      USING ((SELECT bp_is_admin()))$p$, t);
  END LOOP;
END $$;

-- 6. Applicant assessment: admins can read results and candidates from the app later.
--    Candidates still go only through bp_assessment_start / bp_assessment_save.
DROP POLICY IF EXISTS bp_assessment_results_admin_read ON bp_assessment_results;
CREATE POLICY bp_assessment_results_admin_read ON bp_assessment_results FOR SELECT TO authenticated
  USING ((SELECT bp_is_admin()));
DROP POLICY IF EXISTS bp_assessment_candidates_admin_read ON bp_assessment_candidates;
CREATE POLICY bp_assessment_candidates_admin_read ON bp_assessment_candidates FOR SELECT TO authenticated
  USING ((SELECT bp_is_admin()));
REVOKE ALL ON bp_assessment_results, bp_assessment_candidates FROM anon;

-- A staff member signed in on the same browser must still be able to take/see the assessment page.
GRANT EXECUTE ON FUNCTION bp_assessment_start(TEXT), bp_assessment_save(TEXT, JSONB, BOOLEAN) TO authenticated;

SELECT 'BrightPath LMS security policies applied.' AS status;
