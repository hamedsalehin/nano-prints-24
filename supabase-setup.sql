-- ============================================================
-- Nano Signs — Supabase Setup SQL
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. Create the orders table
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  product_title text not null,
  product_size text not null default '',
  quantity int not null default 1,
  unit_price numeric(10,2) not null,
  total_price numeric(10,2) not null,
  design_url text,
  design_filename text,
  custom_options jsonb not null default '{}',
  shipping_name text,
  shipping_address text,
  shipping_city text,
  shipping_postal text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

-- 2. Enable Row Level Security
alter table public.orders enable row level security;

-- 3. Users can view only their own orders
create policy "Users can view own orders"
  on public.orders for select
  using (auth.uid() = user_id);

-- 4. Users can insert their own orders
create policy "Users can insert own orders"
  on public.orders for insert
  with check (auth.uid() = user_id);

-- 5. Create storage bucket for design file uploads
insert into storage.buckets (id, name, public)
  values ('designs', 'designs', true)
  on conflict (id) do nothing;

-- 6. Allow authenticated users to upload to the designs bucket
create policy "Auth users can upload designs"
  on storage.objects for insert
  with check (bucket_id = 'designs' and auth.role() = 'authenticated');

-- 7. Allow anyone to read/download designs (public bucket)
create policy "Anyone can read designs"
  on storage.objects for select
  using (bucket_id = 'designs');

-- Done! Your orders table and storage bucket are ready.
