import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL || "",
  process.env.SUPABASE_API_KEY || ""
);

console.log(
  process.env.SUPABASE_PROJECT_URL || "supabase stuff",
  process.env.SUPABASE_API_KEY || "supabase stuff"
);

export default supabase;
