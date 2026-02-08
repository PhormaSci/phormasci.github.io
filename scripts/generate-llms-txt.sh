#!/usr/bin/env bash
# Generate llms.txt and llms-full.txt from site markdown content.
# These files make the site's dynamically-loaded content accessible to LLMs.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SITE="https://phorma.sh"

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

# Extract a single frontmatter value (first match). Strips surrounding quotes.
fm() {
    local file="$1" key="$2"
    awk -v k="$key" '
        /^---[[:space:]]*$/ { fm++; next }
        fm == 1 {
            if ($0 ~ "^" k ":") {
                sub("^" k ":[[:space:]]*", "")
                gsub(/^["'"'"']|["'"'"']$/, "")
                print
                exit
            }
        }
    ' "$file"
}

# Return everything after the closing --- of the frontmatter.
body() {
    awk '/^---[[:space:]]*$/ { fm++; next } fm >= 2 { print }' "$1"
}

# ---------------------------------------------------------------------------
# Section renderers
# ---------------------------------------------------------------------------

render_home() {
    local dir="$1"
    for f in "$dir"/*.md; do
        [ -f "$f" ] || continue
        local heading; heading=$(fm "$f" heading)
        local subheading; subheading=$(fm "$f" subheading)
        local title; title=$(fm "$f" title)
        local subtitle; subtitle=$(fm "$f" subtitle)

        if [ -n "$heading" ]; then
            echo "**$heading**"
            [ -n "$subheading" ] && echo "$subheading"
        elif [ -n "$title" ]; then
            echo "#### $title"
            [ -n "$subtitle" ] && echo "$subtitle"
        fi

        local b; b=$(body "$f")
        [ -n "$b" ] && printf '\n%s\n' "$b"
        echo ""
    done
}

render_mission() {
    local dir="$1"
    for f in "$dir"/*.md; do
        [ -f "$f" ] || continue
        local title; title=$(fm "$f" title)
        local subtitle; subtitle=$(fm "$f" subtitle)

        [ -n "$title" ] && echo "#### $title"
        if [ -n "$subtitle" ]; then
            echo "$subtitle" | sed 's/<[^>]*>//g'
        fi

        local b; b=$(body "$f")
        [ -n "$b" ] && printf '\n%s\n' "$b"
        echo ""
    done
}

render_services() {
    local dir="$1"
    for f in "$dir"/*.md; do
        [ -f "$f" ] || continue
        local title; title=$(fm "$f" title)
        local meta; meta=$(fm "$f" meta)
        local category; category=$(fm "$f" category)

        echo "#### $title"
        [ -n "$meta" ] && echo "*$meta*"
        [ -n "$category" ] && echo "Category: $category"
        echo ""
        body "$f"
        echo ""
    done
}

render_trainees() {
    local dir="$1"
    for f in "$dir"/*.md; do
        [ -f "$f" ] || continue
        local title; title=$(fm "$f" title)
        local meta; meta=$(fm "$f" meta)
        local category; category=$(fm "$f" category)
        local duration; duration=$(fm "$f" duration)
        local format; format=$(fm "$f" format)
        local prereqs; prereqs=$(fm "$f" prerequisites)
        local outcome; outcome=$(fm "$f" outcome)

        echo "#### $title"
        [ -n "$meta" ] && echo "*$meta*"
        [ -n "$category" ] && echo "Category: $category"
        [ -n "$duration" ] && echo "Duration: $duration"
        [ -n "$format" ] && echo "Format: $format"
        [ -n "$prereqs" ] && echo "Prerequisites: $prereqs"
        [ -n "$outcome" ] && echo "Outcome: $outcome"
        echo ""
        body "$f"
        echo ""
    done
}

render_team() {
    local dir="$1"
    for f in "$dir"/*.md; do
        [ -f "$f" ] || continue
        local name; name=$(fm "$f" name)
        local title; title=$(fm "$f" title)
        local cv; cv=$(fm "$f" cv_link)

        echo "#### $name"
        [ -n "$title" ] && echo "*$title*"
        [ -n "$cv" ] && echo "CV: $cv"
        echo ""
        body "$f"
        echo ""
    done
}

# ---------------------------------------------------------------------------
# Generate llms-full.txt
# ---------------------------------------------------------------------------

generate_full() {
    cat <<EOF
# Phorma Scientific — Complete Site Content

> We transform scientific complexity into production-grade systems.

Website: $SITE
Contact: info@phorma.sh

This file contains all content from the Phorma Scientific website
in both English and Spanish. Generated from source markdown files
for LLM and AI assistant consumption.

---

## English

### Home

EOF
    render_home "$ROOT/content/home/en"

    cat <<EOF

### Mission

EOF
    render_mission "$ROOT/content/mission/en"

    cat <<EOF

### Services

EOF
    render_services "$ROOT/content/services/en"

    cat <<EOF

### Corporate Workshops & Training

EOF
    render_trainees "$ROOT/content/trainees/en"

    cat <<EOF

### Team

EOF
    render_team "$ROOT/content/team/en"

    cat <<EOF

---

## Español

### Inicio

EOF
    render_home "$ROOT/content/home/es"

    cat <<EOF

### Misión

EOF
    render_mission "$ROOT/content/mission/es"

    cat <<EOF

### Servicios

EOF
    render_services "$ROOT/content/services/es"

    cat <<EOF

### Talleres Corporativos y Capacitación

EOF
    render_trainees "$ROOT/content/trainees/es"

    cat <<EOF

### Equipo

EOF
    render_team "$ROOT/content/team/es"
}

# ---------------------------------------------------------------------------
# Generate llms.txt
# ---------------------------------------------------------------------------

generate_index() {
    cat <<EOF
# Phorma Scientific

> We transform scientific complexity into production-grade systems.

Phorma Scientific is a Research Software Engineering consultancy specializing
in scientific computing, machine learning, image analysis, and high-performance
systems for research and industry.

## Pages

- [Home]($SITE/)
- [Mission]($SITE/mission.html)
- [Services]($SITE/services.html)
- [Corporate Workshops]($SITE/trainees.html)
- [About / Team]($SITE/about.html)
- [Contact]($SITE/contact.html)

## Español

- [Inicio]($SITE/es/)
- [Misión]($SITE/es/mission.html)
- [Servicios]($SITE/es/services.html)
- [Talleres Corporativos]($SITE/es/trainees.html)
- [Equipo]($SITE/es/about.html)
- [Contacto]($SITE/es/contact.html)

## Full Content

- [Complete site content (EN + ES)]($SITE/llms-full.txt)

## Services

EOF

    for f in "$ROOT/content/services/en"/*.md; do
        [ -f "$f" ] || continue
        local title; title=$(fm "$f" title)
        [ -n "$title" ] && echo "- $title"
    done

    cat <<EOF

## Corporate Workshops

EOF

    for f in "$ROOT/content/trainees/en"/*.md; do
        [ -f "$f" ] || continue
        local title; title=$(fm "$f" title)
        [ -n "$title" ] && echo "- $title"
    done

    cat <<EOF

## Team

EOF

    for f in "$ROOT/content/team/en"/*.md; do
        [ -f "$f" ] || continue
        local name; name=$(fm "$f" name)
        local title; title=$(fm "$f" title)
        [ -n "$name" ] && echo "- $name — $title"
    done

    cat <<EOF

## Contact

- Email: info@phorma.sh
- Hours: Mon–Fri, 9 AM – 6 PM UTC-3
EOF
}

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

echo "Generating llms.txt..."
generate_index > "$ROOT/llms.txt"

echo "Generating llms-full.txt..."
generate_full > "$ROOT/llms-full.txt"

echo "Done."
wc -l "$ROOT/llms.txt" "$ROOT/llms-full.txt"
