[Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null

function Optimize-Image {
    param (
        [string]$Path,
        [int]$MaxWidth = 1200,
        [int]$Quality = 75
    )

    try {
        $ext = [System.IO.Path]::GetExtension($Path).ToLower()
        if ($ext -notin ".jpg", ".jpeg", ".png") { return }

        $img = [System.Drawing.Image]::FromFile($Path)
        $width = $img.Width
        $height = $img.Height
        
        $newWidth = $width
        $newHeight = $height
        
        # Calculate new dimensions if it exceeds MaxWidth
        $targetMax = $MaxWidth
        if ($Path -like "*hero-signs*" -or $Path -like "*hero-image*") {
            $targetMax = 1920
        }

        if ($width -gt $targetMax) {
            $ratio = $targetMax / $width
            $newWidth = $targetMax
            $newHeight = [int]($height * $ratio)
        } else {
            # If it's already small and it's a PNG, don't re-save to avoid losing metadata unless it's huge
            if ($ext -eq ".png" -and $width -le $targetMax) {
                $img.Dispose()
                return
            }
        }
        
        # Create new bitmap for resizing
        $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        
        # High quality interpolation and scaling
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        $g.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        # Save to temp path
        $tempPath = $Path + ".temp"
        
        if ($ext -eq ".png") {
            # Save as PNG
            $bmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
        } else {
            # Save as JPEG with custom quality
            $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
            $encoder = [System.Drawing.Imaging.Encoder]::Quality
            $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, $Quality)
            $bmp.Save($tempPath, $codec, $encoderParams)
        }
        
        # Clean up
        $g.Dispose()
        $bmp.Dispose()
        $img.Dispose()
        
        # Swap files if smaller
        if (Test-Path $tempPath) {
            $oldSize = (Get-Item $Path).Length
            $newSize = (Get-Item $tempPath).Length
            
            if ($newSize -lt $oldSize) {
                Remove-Item $Path -Force
                Rename-Item -Path $tempPath -NewName (Split-Path $Path -Leaf)
                Write-Host "Optimized $Path : Width $width -> $newWidth, Size $([math]::Round($oldSize/1KB, 1))KB -> $([math]::Round($newSize/1KB, 1))KB ($([math]::Round((($oldSize - $newSize)/$oldSize)*100, 1))% saved)"
            } else {
                Remove-Item $tempPath -Force
                Write-Host "Skipped $Path (no size improvement)"
            }
        }
    } catch {
        Write-Error "Failed to optimize $Path : $_"
        if (Test-Path ($Path + ".temp")) { Remove-Item ($Path + ".temp") -Force }
    }
}

$imageDir = "c:\new website\New folder\buildAsign clone website new\public\images"
Write-Host "Starting image optimization recursively in $imageDir..."

$images = Get-ChildItem -Path $imageDir -Recurse | Where-Object { $_.Extension -match "^\.(jpg|jpeg|png)$" }

foreach ($img in $images) {
    Optimize-Image -Path $img.FullName -MaxWidth 1200 -Quality 75
}

Write-Host "Image optimization complete!"
