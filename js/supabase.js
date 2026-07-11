// Konfigurasi Supabase
const supabaseUrl = "https://ewmmnvisiqughmyjvxeo.supabase.co";

const supabaseKey = "sb_publishable_DN3BBaBLt4LtPaHjZe7ILg_4vF3N6Sy";

// Membuat client Supabase
const supabaseClient = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);