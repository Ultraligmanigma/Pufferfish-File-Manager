// Pufferfish Database Bridge
const supabaseUrl = 'https://knyzvdnpruuvvlmubjrh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtueXp2ZG5wcnV1dnZsbXVianJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxOTYzNjAsImV4cCI6MjA4Mjc3MjM2MH0.KC6W1ZrGRYbvJqL57c00G6j88jDHzEXlFdqLEoZtHdM';

// Initialisierung über das CDN (wird in index.html geladen)
const supabase = supabase.createClient(supabaseUrl, supabaseKey);
