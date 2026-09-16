param(
    [ValidateRange(1024, 65535)]
    [int]$Port = 5173
)

$ErrorActionPreference = 'Stop'
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$nodeExecutable = if ($nodeCommand) { $nodeCommand.Source } else {
    Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
}
$viteExecutable = Join-Path $PSScriptRoot 'node_modules\vite\bin\vite.js'

if (-not (Test-Path -LiteralPath $nodeExecutable)) {
    throw 'Node.js est introuvable. Installez Node.js 22.12+ puis relancez ce script.'
}
if (-not (Test-Path -LiteralPath $viteExecutable)) {
    throw 'Les dépendances locales sont absentes. Exécutez npm ci dans le dossier du projet.'
}

Push-Location $PSScriptRoot
try {
    & $nodeExecutable $viteExecutable --host 127.0.0.1 --port $Port --strictPort
}
finally {
    Pop-Location
}
