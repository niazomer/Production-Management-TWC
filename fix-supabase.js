const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Replace or inject Supabase credentials
const supabaseConfig = `
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
  const SUPABASE_URL = 'https://whzezkgwgfizuufwgypf.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_bTaLgObpyT78IBLR9zbAhA_5kFget8I';
  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
</script>
`;

if (!content.includes('whzezkgwgfizuufwgypf.supabase.co')) {
    content = content.replace('<head>', '<head>' + supabaseConfig);
    fs.writeFileSync('index.html', content, 'utf8');
    console.log('Supabase keys injected successfully!');
} else {
    console.log('Supabase keys already present.');
}
