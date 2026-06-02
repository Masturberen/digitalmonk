// load-posts.js — fetches markdown posts and injects into the OS desktop
// Uses marked.js for markdown parsing (loaded via CDN in index.html)

window.POSTS = [];

async function loadPosts() {
  // In production these are fetched from your /posts/ folder via a generated index
  // For local dev / Netlify we use a posts-index.json that gets built
  try {
    const res = await fetch('/posts-index.json');
    if (!res.ok) throw new Error('no index');
    const index = await res.json();
    const loaded = await Promise.all(
      index.map(async fname => {
        const r = await fetch('/posts/' + fname);
        const raw = await r.text();
        return parseFrontmatter(raw, fname);
      })
    );
    window.POSTS = loaded
      .filter(p => p.published !== false)
      .sort((a,b) => new Date(b.date) - new Date(a.date));
  } catch(e) {
    // fallback: use hardcoded posts from index.html
    console.log('Using built-in posts');
  }
}

function parseFrontmatter(raw, fname) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { title: fname, body: raw, date: new Date().toISOString() };
  const meta = {};
  match[1].split('\n').forEach(line => {
    const [k, ...v] = line.split(':');
    if (k) meta[k.trim()] = v.join(':').trim().replace(/^"|"$/g,'');
  });
  // parse tags array from yaml
  if (raw.includes('tags:')) {
    const tagMatch = raw.match(/tags:\s*\[(.*?)\]/);
    if (tagMatch) meta.tags = tagMatch[1].split(',').map(t=>t.trim().replace(/"/g,''));
  }
  meta.body = match[2];
  meta.slug = fname.replace('.md','');
  return meta;
}
