-- ============================================
-- Supabase migration: Add Engagement Features
-- ============================================

-- Add view and like counts to thoughts
ALTER TABLE public.thoughts 
  ADD COLUMN IF NOT EXISTS view_count INT DEFAULT 0,
  ADD COLUMN IF NOT EXISTS like_count INT DEFAULT 0;

-- Create thought_comments table
CREATE TABLE IF NOT EXISTS public.thought_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  thought_id UUID REFERENCES public.thoughts(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  is_approved BOOLEAN DEFAULT true -- Change to false if strict moderation is needed
);

-- Enable RLS on comments
ALTER TABLE public.thought_comments ENABLE ROW LEVEL SECURITY;

-- Public read policy (anyone can view approved comments)
CREATE POLICY "comments_public_read" ON public.thought_comments
  FOR SELECT
  TO anon, authenticated
  USING (is_approved = true);

-- Public insert policy (anyone can add a comment)
CREATE POLICY "comments_public_insert" ON public.thought_comments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Authenticated delete policy (only admin can delete comments)
CREATE POLICY "comments_auth_delete" ON public.thought_comments
  FOR DELETE
  TO authenticated
  USING (true);

-- Authenticated update policy (only admin can approve/unapprove)
CREATE POLICY "comments_auth_update" ON public.thought_comments
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Index for fast comment retrieval by thought
CREATE INDEX IF NOT EXISTS thought_comments_thought_id_idx ON public.thought_comments (thought_id);
CREATE INDEX IF NOT EXISTS thought_comments_created_at_idx ON public.thought_comments (created_at ASC);
