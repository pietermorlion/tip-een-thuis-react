# publish.ps1 - commit & push alle wijzigingen via GitHub
$ErrorActionPreference = "Stop"

git add -A
$pending = git status --porcelain
if ($pending) {
  $msg = Read-Host "Commit message (default: 'Update site')"
  if (-not $msg) { $msg = "Update site" }
  git commit -m $msg
  git push origin main
  Write-Host "✅ Gecommit & gepusht."
} else {
  Write-Host "ℹ️ Geen wijzigingen om te committen."
}
