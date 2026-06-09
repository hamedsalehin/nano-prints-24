-- ============================================================
-- Nano Signs — Supabase Setup SQL  (v2)
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- ── 1. Orders Table ──────────────────────────────────────────
create table if not exists public.orders (
  id               uuid        primary key default gen_random_uuid(),
  user_id          uuid        references auth.users(id) on delete cascade not null,
  product_title    text        not null,
  product_size     text        not null default '',
  quantity         int         not null default 1,
  unit_price       numeric(10,2) not null,
  total_price      numeric(10,2) not null,
  design_url       text,
  design_filename  text,
  custom_options   jsonb       not null default '{}',
  shipping_name    text,
  shipping_address text,
  shipping_city    text,
  shipping_postal  text,
  status           text        not null default 'pending',
  created_at       timestamptz not null default now()
);

-- ── 2. Row Level Security ────────────────────────────────────
alter table public.orders enable row level security;

-- Drop existing policies to avoid conflicts on re-run
drop policy if exists "Users can view own orders"   on public.orders;
drop policy if exists "Users can insert own orders" on public.orders;
drop policy if exists "Admins can view all orders"  on public.orders;

create policy "Users can view own orders"
  on public.orders for select
  using (auth.uid() = user_id);

create policy "Users can insert own orders"
  on public.orders for insert
  with check (auth.uid() = user_id);

-- ── 3. Storage Bucket ────────────────────────────────────────
-- NOTE: If this errors with "row violates check constraint",
-- go to Storage in the dashboard and manually create a bucket
-- named "designs" and set it to Public.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
  values (
    'designs',
    'designs',
    true,
    52428800,  -- 50 MB limit
    array['application/pdf','image/png','image/jpeg','image/jpg','image/webp']
  )
  on conflict (id) do update set
    public             = true,
    file_size_limit    = 52428800,
    allowed_mime_types = array['application/pdf','image/png','image/jpeg','image/jpg','image/webp'];

-- ── 4. Storage Policies ──────────────────────────────────────
drop policy if exists "Auth users can upload designs"  on storage.objects;
drop policy if exists "Anyone can read designs"        on storage.objects;
drop policy if exists "Users can delete own designs"   on storage.objects;

-- Allow any authenticated user to upload
create policy "Auth users can upload designs"
  on storage.objects for insert
  with check (
    bucket_id = 'designs'
    and auth.role() = 'authenticated'
  );

-- Allow public read (bucket is public)
create policy "Anyone can read designs"
  on storage.objects for select
  using (bucket_id = 'designs');

-- Allow users to delete their own uploads
create policy "Users can delete own designs"
  on storage.objects for delete
  using (
    bucket_id = 'designs'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

-- ── Done! ────────────────────────────────────────────────────
-- Your orders table and designs storage bucket are ready.
-- Next step: configure Auth → Email settings (see README).
