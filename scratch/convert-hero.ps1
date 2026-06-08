[Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null
$pngPath = "c:\new website\New folder\buildAsign clone website new\public\images\hero-image.png"
$jpegPath = "c:\new website\New folder\buildAsign clone website new\public\images\hero-image.jpeg"

if (Test-Path $jpegPath) {
    Remove-Item $jpegPath -Force
}

$img = [System.Drawing.Image]::FromFile($pngPath)
$width = $img.Width
$height = $img.Height

$targetMax = 1920
$newWidth = $width
$newHeight = $height

if ($width -gt $targetMax) {
    $ratio = $targetMax / $width
    $newWidth = $targetMax
    $newHeight = [int]($height * $ratio)
}

$bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$g.DrawImage($img, 0, 0, $newWidth, $newHeight)

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encoder = [System.Drawing.Imaging.Encoder]::Quality
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, 80)

$bmp.Save($jpegPath, $codec, $encoderParams)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()

$oldSize = (Get-Item $pngPath).Length
$newSize = (Get-Item $jpegPath).Length
Write-Host "Converted PNG ($([math]::Round($oldSize/1MB, 2))MB) to JPEG ($([math]::Round($newSize/1KB, 1))KB) successfully!"
