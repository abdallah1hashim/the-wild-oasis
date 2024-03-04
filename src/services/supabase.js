import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rigndumzwbgawfyamzgp.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZ25kdW16d2JnYXdmeWFtemdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNzcwMDQsImV4cCI6MjAyNDk1MzAwNH0.xPCsEtqCceZpyH7schQG1wnhmqn-Z6ZCwkqsiPltTNU`;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
