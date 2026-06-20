-- ============================================
-- Supabase migration: Create `thoughts` table
-- ============================================

-- Create the thoughts table
CREATE TABLE IF NOT EXISTS public.thoughts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT,
  excerpt TEXT,
  accent_color TEXT DEFAULT '#ede8ff',
  reading_time TEXT,
  content JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.thoughts ENABLE ROW LEVEL SECURITY;

-- Public read policy (anyone can view published thoughts)
CREATE POLICY "thoughts_public_read" ON public.thoughts
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Authenticated write policy (only authenticated users can insert/update/delete)
CREATE POLICY "thoughts_auth_insert" ON public.thoughts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "thoughts_auth_update" ON public.thoughts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "thoughts_auth_delete" ON public.thoughts
  FOR DELETE
  TO authenticated
  USING (true);

-- Index for slug lookups
CREATE INDEX IF NOT EXISTS thoughts_slug_idx ON public.thoughts (slug);

-- Index for date ordering
CREATE INDEX IF NOT EXISTS thoughts_created_at_idx ON public.thoughts (created_at DESC);
