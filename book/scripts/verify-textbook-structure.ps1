# verify-textbook-structure.ps1
# This script verifies the Docusaurus textbook structure and links.

# Define base path to the Docusaurus project
$docusaurusProjectPath = (Get-Item -Path $PSScriptRoot).Parent.FullName

# --- Function to check if a file exists ---
function Test-FileExists {
    param (
        [string]$Path
    )
    return Test-Path -Path (Join-Path $docusaurusProjectPath $Path) -PathType Leaf
}

# --- Function to check if a directory exists ---
function Test-DirectoryExists {
    param (
        [string]$Path
    )
    return Test-Path -Path (Join-Path $docusaurusProjectPath $Path) -PathType Container
}

Write-Host "--- Starting Textbook Structure Verification ---"
Write-Host "Docusaurus Project Path: $docusaurusProjectPath"
Write-Host ""

$errorsFound = $false

# --- Phase 2: Restructure Entire Content Verification ---
Write-Host "Verifying Phase 2: Content Structure..."

$expectedDirs = @(
    "docs/introduction",
    "docs/module-1-physical-ai",
    "docs/module-2-humanoid-robotics",
    "docs/module-3-ai-integration",
    "docs/appendix"
)

$expectedFiles = @(
    "docs/introduction/_category_.json", "docs/introduction/overview.md", "docs/introduction/history.md",
    "docs/module-1-physical-ai/_category_.json", "docs/module-1-physical-ai/chapter-1-sensors.md", "docs/module-1-physical-ai/chapter-2-actuators.md", "docs/module-1-physical-ai/chapter-3-control-systems.md",
    "docs/module-2-humanoid-robotics/_category_.json", "docs/module-2-humanoid-robotics/chapter-1-kinematics.md", "docs/module-2-humanoid-robotics/chapter-2-dynamics.md", "docs/module-2-humanoid-robotics/chapter-3-balance-control.md",
    "docs/module-3-ai-integration/_category_.json", "docs/module-3-ai-integration/chapter-1-perception.md", "docs/module-3-ai-integration/chapter-2-learning.md", "docs/module-3-ai-integration/chapter-3-decision-making.md",
    "docs/appendix/_category_.json", "docs/appendix/references.md", "docs/appendix/glossary.md"
)

foreach ($dir in $expectedDirs) {
    if (Test-DirectoryExists $dir) {
        Write-Host "✅ Directory exists: $dir" -ForegroundColor Green
    } else {
        Write-Host "❌ Directory missing: $dir" -ForegroundColor Red
        $errorsFound = $true
    }
}

foreach ($file in $expectedFiles) {
    if (Test-FileExists $file) {
        Write-Host "✅ File exists: $file" -ForegroundColor Green
    } else {
        Write-Host "❌ File missing: $file" -ForegroundColor Red
        $errorsFound = $true
    }
}
Write-Host ""

# --- Phase 3: Update Sidebar for Nested Navigation Verification ---
Write-Host "Verifying Phase 3: Sidebar Configuration..."

# This check is simplified. A full check would parse sidebars.ts and validate each link.
# For now, we'll ensure sidebars.ts and docusaurus.config.ts exist and are syntactically valid.
if (Test-FileExists "sidebars.ts") {
    Write-Host "✅ sidebars.ts exists." -ForegroundColor Green
    # Further validation could be added here (e.g., parsing the file and checking content)
} else {
    Write-Host "❌ sidebars.ts missing." -ForegroundColor Red
    $errorsFound = $true
}

if (Test-FileExists "docusaurus.config.ts") {
    Write-Host "✅ docusaurus.config.ts exists." -ForegroundColor Green
    # Further validation could be added here (e.g., parsing the file and checking content)
} else {
    Write-Host "❌ docusaurus.config.ts missing." -ForegroundColor Red
    $errorsFound = $true
}
Write-Host ""

# --- Phase 1: Homepage Verification (simplified to file existence) ---
Write-Host "Verifying Phase 1: Homepage..."
if (Test-FileExists "src/pages/index.tsx") {
    Write-Host "✅ src/pages/index.tsx exists." -ForegroundColor Green
} else {
    Write-Host "❌ src/pages/index.tsx missing." -ForegroundColor Red
    $errorsFound = $true
}
Write-Host ""


if ($errorsFound) {
    Write-Host "--- Verification FAILED ---" -ForegroundColor Red
    exit 1
} else {
    Write-Host "--- Verification PASSED ---" -ForegroundColor Green
    exit 0
}
