#!/bin/bash

# Flipto Game Engine - Git Log Commands
# This script provides various ways to view commit history

echo "=== Flipto Game Engine - Git Log Commands ==="
echo ""

# 1. Basic commit log
echo "1. Basic commit log (last 10 commits):"
git log --oneline -10
echo ""

# 2. Detailed commit log with author and date
echo "2. Detailed commit log with author and date:"
git log --pretty=format:"%h - %an, %ar : %s" -10
echo ""

# 3. Commit log with graph visualization
echo "3. Commit log with graph visualization:"
git log --oneline --graph --all -10
echo ""

# 4. Commit log by specific author
echo "4. Commits by gwillipratama:"
git log --oneline --author="gwillipratama" -10
echo ""

# 5. Commit log with file changes
echo "5. Commit log with file changes (last 5):"
git log --oneline --stat -5
echo ""

# 6. Commit log for specific file
echo "6. Commits affecting README.md:"
git log --oneline --follow README.md
echo ""

# 7. Commit log with date range (last 7 days)
echo "7. Commits in the last 7 days:"
git log --oneline --since="7 days ago"
echo ""

# 8. Commit log with specific commit message pattern
echo "8. Commits with 'fix' in message:"
git log --oneline --grep="fix" -10
echo ""

# 9. Commit log with branch comparison
echo "9. Commits ahead of origin/main:"
git log --oneline origin/main..HEAD
echo ""

# 10. Commit log with short stats
echo "10. Commit statistics:"
git shortlog -sn
echo ""

echo "=== Additional Commands ==="
echo ""
echo "To view all commits: git log --oneline"
echo "To view commits with full details: git log --pretty=format:'%h - %an, %ar : %s'"
echo "To view commits with graph: git log --oneline --graph --all"
echo "To view commits by date: git log --oneline --since='2024-01-01'"
echo "To view commits by author: git log --oneline --author='username'"
echo "To view commits affecting a file: git log --oneline --follow filename"
echo "To view commit details: git show <commit-hash>"
echo "To view commit differences: git diff <commit-hash>"
echo "To view commit statistics: git shortlog -sn"
echo ""
echo "=== Export Options ==="
echo ""
echo "Export to file: git log --pretty=format:'%h - %an, %ar : %s' > commit_log.txt"
echo "Export with graph: git log --oneline --graph --all > commit_graph.txt"
echo "Export by author: git log --oneline --author='username' > author_commits.txt" 