# Phorma Scientific Website - Justfile
# Simple command runner for local development and deployment

# Default recipe (runs when you type `just`)
default:
  @just --list

# Run local development server
serve port="8000":
  @echo "Starting local server at http://localhost:{{port}}"
  @echo "Press Ctrl+C to stop"
  python3 -m http.server {{port}}

# Alias for serve
dev: serve

# Check total bundle size
size:
  @echo "=== Bundle Size Report ==="
  @echo ""
  @echo "HTML files:"
  @find . -name "*.html" -not -path "./.git/*" -exec du -ch {} + | tail -1
  @echo ""
  @echo "CSS files:"
  @du -ch css/*.css | tail -1
  @echo ""
  @echo "JS files:"
  @du -ch js/*.js | tail -1
  @echo ""
  @echo "Assets:"
  @du -ch assets/* | tail -1
  @echo ""
  @echo "Total site size (excluding .git):"
  @du -csh --exclude=.git --exclude=content . | tail -1
  @echo ""
  @echo "Performance budget: 50KB (uncompressed)"

# Validate HTML files (requires tidy; skipped gracefully if absent)
validate:
    #!/usr/bin/env bash
    set -euo pipefail
    if ! command -v tidy >/dev/null 2>&1; then
      echo "tidy not found — install it to validate HTML"
      exit 0
    fi
    echo "Validating HTML files..."
    for file in *.html es/*.html; do
      echo "Checking $file..."
      tidy -q -e "$file" 2>&1 | grep -v "Warning:" || true
    done

# Clean up common artifacts
clean:
  @echo "Cleaning up..."
  @find . -name ".DS_Store" -delete
  @find . -name "Thumbs.db" -delete
  @echo "Done!"

# Show git status
status:
  @git status -sb

# Build: render markdown content into static HTML (no runtime loading)
build:
  @node scripts/build.js

# Full local check: mirrors the CI Build Check workflow
check:
    #!/usr/bin/env bash
    set -euo pipefail
    echo "==> Building static content..."
    node scripts/build.js
    echo "==> Checking generated pages are committed..."
    if git diff --exit-code --quiet -- '*.html' 'es/*.html'; then
      echo "✓ Generated HTML in sync with content/**.md"
    else
      echo "✗ Generated HTML differs from committed files."
      echo "  Run 'just build' and commit the regenerated pages."
      git diff --stat -- '*.html' 'es/*.html'
      exit 1
    fi
    echo "==> Validating JSON-LD structured data..."
    python3 - <<'PY'
    import json, glob, re
    pages = glob.glob('*.html') + glob.glob('es/*.html')
    found = 0
    for f in pages:
        html = open(f).read()
        for m in re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
            data = json.loads(m)
            assert data['@type'] == 'ItemList', f
            print(f"  ✓ {f}: {data['numberOfItems']} items")
            found += 1
    print(f"✓ {found} JSON-LD blocks parse cleanly")
    PY
    echo "==> All local checks passed."

# Generate llms.txt and llms-full.txt from markdown content
llms:
  @./scripts/generate-llms-txt.sh

# Deploy to Cloudflare Pages (phorma.sh)
deploy:
  @just build
  @just llms
  npx wrangler pages deploy . --project-name=phorma-sh --branch=main --commit-dirty=true

# Quick commit with message
commit message:
  git add -A
  git status -sb
  git commit -m "{{message}}"
