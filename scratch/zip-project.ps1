$sourceDir = "c:\new website\New folder\buildAsign clone website new"
$destZip = "C:\Users\nano sign\Downloads\print nano sign 2026-06-08.zip"
$tempDir = "c:\new website\New folder\buildAsign clone website new\scratch\temp_zip_dir"

if (Test-Path $destZip) {
  Remove-Item -Path $destZip -Force
}

if (Test-Path $tempDir) {
  Remove-Item -Path $tempDir -Recurse -Force
}
New-Item -ItemType Directory -Path $tempDir -Force

Write-Host "Copying files to temporary folder..."
Get-ChildItem -Path $sourceDir | Where-Object { $_.Name -notin "node_modules", ".next", ".git", "scratch" } | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $tempDir -Recurse -Force
}

Write-Host "Creating zip archive at $destZip..."
Compress-Archive -Path "$tempDir\*" -DestinationPath $destZip -Force

Write-Host "Cleaning up temporary folder..."
Remove-Item -Path $tempDir -Recurse -Force
Write-Host "Zip created successfully!"
