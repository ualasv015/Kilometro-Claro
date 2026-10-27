param(
  [string]$ProjectRoot = (Split-Path -Parent $PSScriptRoot)
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$publicRoot = Join-Path $ProjectRoot 'public'
$distRoot = Join-Path $ProjectRoot 'dist'
$ogPublic = Join-Path $publicRoot 'images/og'
$ogDist = Join-Path $distRoot 'images/og'
$guideImageRoot = Join-Path $publicRoot 'images/guides'
$guideImageDist = Join-Path $distRoot 'images/guides'
$logoPath = Join-Path $publicRoot 'logo-marca-kilometro-claro.png'

New-Item -ItemType Directory -Force -Path $ogPublic, $ogDist, $guideImageDist | Out-Null

function New-Brush([string]$Hex) {
  return [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml($Hex))
}

function Draw-Brand([System.Drawing.Graphics]$Graphics, [System.Drawing.Image]$Logo) {
  $Graphics.DrawImage($Logo, 58, 45, 54, 54)
  $brandFont = [System.Drawing.Font]::new('Segoe UI', 22, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $brandBrush = New-Brush '#F4F7F2'
  $Graphics.DrawString('Kilómetro Claro', $brandFont, $brandBrush, 128, 57)
  $brandBrush.Dispose()
  $brandFont.Dispose()
}

function New-ConceptIllustration([string]$OutputPath, [System.Drawing.Image]$Logo) {
  $bitmap = [System.Drawing.Bitmap]::new(1600, 900, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
  $graphics.Clear([System.Drawing.ColorTranslator]::FromHtml('#173D34'))
  $finePen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(30, 215, 243, 106), 2)
  for ($x = 70; $x -lt 1600; $x += 90) { $graphics.DrawLine($finePen, $x, 150, $x, 835) }
  for ($y = 170; $y -lt 900; $y += 90) { $graphics.DrawLine($finePen, 45, $y, 1550, $y) }
  $finePen.Dispose()

  Draw-Brand $graphics $Logo
  $lime = New-Brush '#D7F36A'
  $white = New-Brush '#F4F7F2'
  $muted = New-Brush '#C4D4CB'
  $titleFont = [System.Drawing.Font]::new('Segoe UI', 49, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $labelFont = [System.Drawing.Font]::new('Segoe UI', 22, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $smallFont = [System.Drawing.Font]::new('Segoe UI', 18, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
  $graphics.DrawString('ESQUEMA CONCEPTUAL', $labelFont, $lime, 80, 155)
  $graphics.DrawString('Plataforma deportiva de motor central', $titleFont, $white, 80, 202)

  # Diagrama editorial genérico: no reproduce la carrocería ni la ficha del Mission S.
  $linePen = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml('#D7F36A'), 7)
  $thinPen = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml('#B8D0C4'), 4)
  $engineBrush = New-Brush '#D7F36A'
  $glassBrush = New-Brush '#B8D0C4'
  $graphics.DrawLine($linePen, 190, 650, 1410, 650)
  $graphics.DrawLine($thinPen, 280, 610, 1320, 610)
  $graphics.DrawLine($thinPen, 280, 610, 370, 540)
  $graphics.DrawLine($thinPen, 370, 540, 650, 540)
  $graphics.DrawLine($thinPen, 650, 540, 775, 610)
  $graphics.DrawLine($thinPen, 775, 610, 1100, 610)
  $graphics.DrawLine($thinPen, 1100, 610, 1195, 550)
  $graphics.DrawLine($thinPen, 1195, 550, 1320, 610)
  $graphics.DrawEllipse($linePen, 320, 604, 125, 125)
  $graphics.DrawEllipse($linePen, 1170, 604, 125, 125)
  $graphics.FillRectangle($engineBrush, 820, 545, 220, 95)
  $graphics.DrawRectangle($thinPen, 520, 565, 190, 45)
  $graphics.DrawString('EJE DELANTERO', $smallFont, $muted, 270, 760)
  $graphics.DrawString('MOTOR CENTRAL', $labelFont, $lime, 790, 735)
  $graphics.DrawString('EJE TRASERO', $smallFont, $muted, 1150, 760)
  $graphics.DrawString('Ilustración propia · No representa el diseño ni las especificaciones del Mission S', $smallFont, $muted, 80, 845)

  $linePen.Dispose(); $thinPen.Dispose(); $engineBrush.Dispose(); $glassBrush.Dispose()
  $titleFont.Dispose(); $labelFont.Dispose(); $smallFont.Dispose(); $lime.Dispose(); $white.Dispose(); $muted.Dispose()
  $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $graphics.Dispose(); $bitmap.Dispose()
}

function Draw-Title([System.Drawing.Graphics]$Graphics, [string]$Title, [string]$Label, [bool]$HasPhoto, [System.Drawing.Image]$Logo) {
  $white = New-Brush '#F5F7F2'
  $lime = New-Brush '#D7F36A'
  $muted = New-Brush '#D5E0D9'
  $labelFont = [System.Drawing.Font]::new('Segoe UI', 17, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $titleFont = [System.Drawing.Font]::new('Segoe UI', 48, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $smallFont = [System.Drawing.Font]::new('Segoe UI', 18, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
  Draw-Brand $Graphics $Logo
  $Graphics.DrawString($Label.ToUpperInvariant(), $labelFont, $lime, 66, 192)
  $titleBox = [System.Drawing.RectangleF]::new(66, 232, 1065, 275)
  $format = [System.Drawing.StringFormat]::new()
  $format.Trimming = [System.Drawing.StringTrimming]::EllipsisWord
  $Graphics.DrawString($Title, $titleFont, $white, $titleBox, $format)
  $Graphics.DrawString('Consumo · viajes · gastos del coche · España', $smallFont, $muted, 68, 566)
  $format.Dispose(); $smallFont.Dispose(); $titleFont.Dispose(); $labelFont.Dispose()
  $white.Dispose(); $lime.Dispose(); $muted.Dispose()
}

function New-SocialCard([string]$OutputPath, [string]$Title, [string]$Label, [string]$PhotoPath, [System.Drawing.Image]$Logo) {
  $bitmap = [System.Drawing.Bitmap]::new(1200, 630, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
  $hasPhoto = $false

  if ($PhotoPath -and (Test-Path -LiteralPath $PhotoPath)) {
    try {
      $photo = [System.Drawing.Image]::FromFile($PhotoPath)
      $scale = [Math]::Max(1200 / [double]$photo.Width, 630 / [double]$photo.Height)
      $cropWidth = 1200 / $scale
      $cropHeight = 630 / $scale
      $cropX = ($photo.Width - $cropWidth) / 2
      $cropY = ($photo.Height - $cropHeight) / 2
      $source = [System.Drawing.RectangleF]::new([single]$cropX, [single]$cropY, [single]$cropWidth, [single]$cropHeight)
      $destination = [System.Drawing.Rectangle]::new(0, 0, 1200, 630)
      $graphics.DrawImage($photo, $destination, $source, [System.Drawing.GraphicsUnit]::Pixel)
      $photo.Dispose()
      $hasPhoto = $true
    } catch {
      $graphics.Clear([System.Drawing.ColorTranslator]::FromHtml('#173D34'))
    }
  } else {
    $graphics.Clear([System.Drawing.ColorTranslator]::FromHtml('#173D34'))
  }

  if ($hasPhoto) {
    $overlay = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(75, 10, 28, 23))
    $graphics.FillRectangle($overlay, 0, 0, 1200, 630)
    $overlay.Dispose()
    $gradient = [System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(0, 145, 1200, 485), [System.Drawing.Color]::FromArgb(12, 7, 24, 20), [System.Drawing.Color]::FromArgb(235, 7, 24, 20), [System.Drawing.Drawing2D.LinearGradientMode]::Vertical)
    $graphics.FillRectangle($gradient, 0, 145, 1200, 485)
    $gradient.Dispose()
  } else {
    $ringPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(48, 215, 243, 106), 3)
    $graphics.DrawEllipse($ringPen, 805, -130, 520, 520)
    $graphics.DrawEllipse($ringPen, 890, -40, 350, 350)
    $graphics.DrawEllipse($ringPen, 953, 24, 225, 225)
    $ringPen.Dispose()
    $limeBrush = New-Brush '#D7F36A'
    $graphics.FillRectangle($limeBrush, 66, 160, 54, 6)
    $limeBrush.Dispose()
  }

  Draw-Title $graphics $Title $Label $hasPhoto $Logo
  $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $graphics.Dispose(); $bitmap.Dispose()
}

$logo = [System.Drawing.Image]::FromFile($logoPath)
$conceptPath = Join-Path $guideImageRoot 'porsche-mission-s-architecture.png'
New-ConceptIllustration $conceptPath $logo
Copy-Item -LiteralPath $conceptPath -Destination (Join-Path $guideImageDist 'porsche-mission-s-architecture.png') -Force

$routes = @(
  @{ Html = Join-Path $distRoot 'index.html'; Image = 'inicio.png'; Label = 'Kilómetro Claro'; Photo = $null },
  @{ Html = Join-Path $distRoot 'calculadoras/index.html'; Image = 'calculadoras.png'; Label = 'Calculadoras'; Photo = $null }
)

Get-ChildItem (Join-Path $distRoot 'calculadoras') -Directory | ForEach-Object {
  $page = Join-Path $_.FullName 'index.html'
  if (Test-Path -LiteralPath $page) { $routes += @{ Html = $page; Image = "calculadora-$($_.Name).png"; Label = 'Calculadora'; Photo = $null } }
}

Get-ChildItem (Join-Path $distRoot 'guias') -Directory | ForEach-Object {
  $page = Join-Path $_.FullName 'index.html'
  if (-not (Test-Path -LiteralPath $page)) { return }
  $html = [System.IO.File]::ReadAllText($page)
  $imageMatch = [regex]::Match($html, '<figure class="guide-image".*?<img[^>]+src="([^"]+)"', [System.Text.RegularExpressions.RegexOptions]::Singleline)
  $photo = $null
  if ($imageMatch.Success) { $photo = Join-Path $publicRoot $imageMatch.Groups[1].Value.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar) }
  $routes += @{ Html = $page; Image = "guia-$($_.Name).png"; Label = 'Guía para conductores'; Photo = $photo }
}

foreach ($route in $routes) {
  if (-not (Test-Path -LiteralPath $route.Html)) { continue }
  $html = [System.IO.File]::ReadAllText($route.Html)
  $h1 = [regex]::Match($html, '<h1[^>]*>(.*?)</h1>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
  $title = if ($h1.Success) { [System.Net.WebUtility]::HtmlDecode([regex]::Replace($h1.Groups[1].Value, '<[^>]+>', ' ')).Trim() } else { 'Herramientas para conductores en España' }
  $title = [regex]::Replace($title, '\s+', ' ')
  $publicOutput = Join-Path $ogPublic $route.Image
  $distOutput = Join-Path $ogDist $route.Image
  New-SocialCard $publicOutput $title $route.Label $route.Photo $logo
  Copy-Item -LiteralPath $publicOutput -Destination $distOutput -Force
}

$genericPath = Join-Path $ogPublic 'kilometro-claro.png'
New-SocialCard $genericPath 'Herramientas y guías para conductores' 'Kilómetro Claro' $null $logo
Copy-Item -LiteralPath $genericPath -Destination (Join-Path $ogDist 'kilometro-claro.png') -Force
$logo.Dispose()
Write-Output "Ilustración y tarjetas Open Graph generadas en $ogPublic"
