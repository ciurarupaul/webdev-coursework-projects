import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qrxnovsxgcnhcfoarzqh.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyeG5vdnN4Z2NuaGNmb2FyenFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MjI4NzQsImV4cCI6MjAzNzM5ODg3NH0.awWsCEQJXcBjo4GrI4oK-oZSQDQ_WGPC9xxcmIRWSmY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
