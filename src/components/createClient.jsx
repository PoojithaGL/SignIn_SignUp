import { createClient } from "@supabase/supabase-js"; 

const supabase = createClient('https://ghfzchizmigbnvubvkvz.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoZnpjaGl6bWlnYm52dWJ2a3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MDE3NzksImV4cCI6MjA2MDM3Nzc3OX0.wuJhDKWjHnmCaFEYy844nVup-_KIQIRG0guov49PlGE')

export default supabase;