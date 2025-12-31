// Pufferfish Database Bridge
const supabaseUrl = 'https://knyzvdnpruuvvlmubjrh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtueXp2ZG5wcnV1dnZsbXVianJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxOTYzNjAsImV4cCI6MjA4Mjc3MjM2MH0.KC6W1ZrGRYbvJqL57c00G6j88jDHzEXlFdqLEoZtHdM';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Hilfsfunktion zum Kontostand laden
async function getBalance(userId) {
    const { data } = await supabase.from('profiles').select('balance').eq('id', userId).single();
    return data ? data.balance : 0;
}

// Hilfsfunktion zum Kontostand aktualisieren
async function updateBalance(userId, newBalance) {
    await supabase.from('profiles').update({ balance: newBalance }).eq('id', userId);
}
