#!/usr/bin/env python3
"""
build.py — generates posts-index.json from the /posts/ folder.
Run this locally or Netlify runs it automatically via netlify.toml.
"""
import os, json

posts_dir = os.path.join(os.path.dirname(__file__), 'posts')
output = os.path.join(os.path.dirname(__file__), 'posts-index.json')

files = sorted(
    [f for f in os.listdir(posts_dir) if f.endswith('.md')],
    reverse=True
)

with open(output, 'w') as f:
    json.dump(files, f, indent=2)

print(f"Built posts-index.json with {len(files)} posts:")
for fname in files:
    print(f"  - {fname}")
