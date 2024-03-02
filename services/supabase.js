import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nqeilfergnrcgzqvgmmh.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xZWlsZmVyZ25yY2d6cXZnbW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1Njg5MTIsImV4cCI6MjAyMzE0NDkxMn0.eA7rje_B0PmapC-ll-gBzP79kgtuaUN4lEnTJKRTrqg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
