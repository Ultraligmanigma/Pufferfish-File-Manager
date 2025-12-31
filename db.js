// Pufferfish Database Bridge
const supabaseUrl = 'https://knyzvdnpruuvvlmubjrh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtueXp2ZG5wcnV1dnZsbXVianJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxOTYzNjAsImV4cCI6MjA4Mjc3MjM2MH0.KC6W1ZrGRYbvJqL57c00G6j88jDHzEXlFdqLEoZtHdM';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Funktion, um den Login-Status überall zu prüfen
async function checkAuth(redirectTo) {
    const { data } = await supabase.auth.getUser();
    if (!data.user && redirectTo) window.location.href = 'login.html';
    if (data.user && !redirectTo) window.location.href = 'index.html';
    return data.user;
}
