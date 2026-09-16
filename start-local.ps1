param(
    [ValidateRange(1024, 65535)]
    [int]$Port = 5173
)

$ErrorActionPreference = 'Stop'
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$nodeExecutable = if ($nodeCommand) { $nodeCommand.Source } else { $null }
$viteExecutable = Join-Path $PSScriptRoot 'node_modules\vite\bin\vite.js'

if (-not $nodeExecutable) {
    throw 'Node.js est introuvable dans le PATH. Installez Node.js 22.12+ puis relancez ce script.'
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
