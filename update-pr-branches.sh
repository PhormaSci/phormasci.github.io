#!/usr/bin/env bash
#
# Update all PR branches with latest origin/main
#
# This script fetches the latest changes from origin/main and rebases
# all open PR branches on top of it, then force-pushes the updated branches.
#

set -e  # Exit on error

echo "=== Updating PR branches with latest origin/main ==="
echo ""

# Store the current branch to return to it later
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"
echo ""

# Fetch latest changes
echo "Fetching latest changes from origin..."
git fetch origin
echo ""

# Get list of open PR branches using gh CLI
echo "Getting list of open PR branches..."
PR_BRANCHES=$(gh pr list --state open --json headRefName --jq '.[].headRefName')

if [ -z "$PR_BRANCHES" ]; then
  echo "No open pull requests found."
  exit 0
fi

echo "Found the following PR branches:"
echo "$PR_BRANCHES"
echo ""

# Update each PR branch
for BRANCH in $PR_BRANCHES; do
  echo "=========================================="
  echo "Updating branch: $BRANCH"
  echo "=========================================="

  # Checkout the branch
  echo "Checking out $BRANCH..."
  git checkout "$BRANCH"

  # Rebase on origin/main
  echo "Rebasing on origin/main..."
  if git rebase origin/main; then
    echo "✓ Rebase successful"

    # Force push the updated branch
    echo "Force pushing to origin/$BRANCH..."
    git push --force origin "$BRANCH"
    echo "✓ Branch $BRANCH updated successfully"
  else
    echo "✗ Rebase failed for $BRANCH"
    echo "You may need to resolve conflicts manually."
    echo "Aborting rebase..."
    git rebase --abort
    echo ""
    echo "Skipping $BRANCH due to conflicts."
  fi

  echo ""
done

# Return to original branch
echo "=========================================="
echo "Returning to original branch: $CURRENT_BRANCH"
git checkout "$CURRENT_BRANCH"
echo ""
echo "=== Update complete ==="
echo ""
echo "Summary:"
gh pr list --state open --json number,headRefName,title --jq '.[] | "#\(.number) - \(.headRefName): \(.title)"'
