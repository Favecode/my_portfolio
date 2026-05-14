import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zgmdnspltphcqyfwjnla.supabase.co";
const supabaseAnonKey = "sb_publishable_jpv6HVDYudTLdgW7SPOzOQ_MhvVcv71";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);