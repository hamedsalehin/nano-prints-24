-- 1. Create table for quote requests
create table if not exists public.quote_requests (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    full_name text not null,
    email text not null,
    phone text not null,
    description text not null,
    width text,
    height text,
    quantity integer default 1,
    file_url text
);

-- Enable Row Level Security (RLS) on the table
alter table public.quote_requests enable row level security;

-- Create policy to allow anonymous/public insertions (so any site visitor can request a quote)
create policy "Allow anonymous quote submissions"
on public.quote_requests
for insert
with check (true);

-- Create policy to allow read access for authenticated admins only
create policy "Allow admin read access to quotes"
on public.quote_requests
for select
using (auth.role() = 'authenticated');


-- 2. Register the 'quote-attachments' storage bucket in Supabase storage schema
insert into storage.buckets (id, name, public)
values ('quote-attachments', 'quote-attachments', true)
on conflict (id) do nothing;

-- Set up storage security policies (RLS) for the 'quote-attachments' bucket
-- Policy to allow anonymous uploads (for quote attachment submissions)
create policy "Allow public uploads to quote-attachments"
on storage.objects
for insert
with check (bucket_id = 'quote-attachments');

-- Policy to allow public read access to uploaded files
create policy "Allow public read of quote-attachments"
on storage.objects
for select
using (bucket_id = 'quote-attachments');
