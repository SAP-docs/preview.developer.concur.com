$files = Get-ChildItem -Path src -Recurse -File -Include '*.md','*.markdown'
$changed = 0

$link = '<a href="/tools-support/deprecation-policy.html">API Lifecycle &amp; Deprecation Policy.</a>'
$footer = "  <p>Partners and customers using a deprecated API should contact SAP Concur and discuss moving to the latest versions.</p>`n  <p>Learn more in the $link</p>`n</div>"

function MakeBanner($dep, $unsup, $content) {
    $lines = @('<div class="alert alert-danger">', '  <p><strong>This API has been deprecated.</strong></p>')
    if ($dep)   { $lines += "  <p>Deprecation Date: $dep</p>" }
    if ($unsup) { $lines += "  <p>Unsupported Date: $unsup</p>" }
    if ($content) { $lines += "  <p>$($content.Trim())</p>" }
    $lines += "  <p>Partners and customers using a deprecated API should contact SAP Concur and discuss moving to the latest versions.</p>"
    $lines += "  <p>Learn more in the $link</p>"
    $lines += '</div>'
    return $lines -join "`n"
}

foreach ($f in $files) {
    $raw = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    if (-not ($raw -match 'include deprecation-alert')) { continue }

    $new = $raw

    # Case 1: capture block + date + unsupported + content
    $new = [regex]::Replace($new,
        '(?s)\{%\s*capture\s+deprecation_content\s*%\}(.*?)\{%\s*endcapture\s*%\}\s*\n\s*\{%\s*include deprecation-alert\.html\s+deprecation_date="([^"]+)"\s+unsupported_date="([^"]+)"\s+content=deprecation_content\s*%\}',
        { param($m)
          return MakeBanner $m.Groups[2].Value $m.Groups[3].Value $m.Groups[1].Value
        })

    # Case 2: capture block + date + content (no unsupported)
    $new = [regex]::Replace($new,
        '(?s)\{%\s*capture\s+deprecation_content\s*%\}(.*?)\{%\s*endcapture\s*%\}\s*\n\s*\{%\s*include deprecation-alert\.html\s+deprecation_date="([^"]+)"\s+content=deprecation_content\s*%\}',
        { param($m)
          return MakeBanner $m.Groups[2].Value $null $m.Groups[1].Value
        })

    # Case 3: only deprecation_date
    $new = [regex]::Replace($new,
        '\{%\s*include deprecation-alert\.html\s+deprecation_date="([^"]+)"\s*%\}',
        { param($m) return MakeBanner $m.Groups[1].Value $null $null })

    # Case 4: simple include (no params)
    $new = $new -replace '(?m)^\s*\{%\s*include deprecation-alert\.html\s*%\}\s*$', (MakeBanner $null $null $null)

    if ($new -ne $raw) {
        [System.IO.File]::WriteAllText($f.FullName, $new, [System.Text.Encoding]::UTF8)
        $changed++
        Write-Output "Fixed: $($f.FullName.Replace((Get-Location).Path + '\','').Replace('\','/'))"
    }
}
Write-Output ""
Write-Output "Total files changed: $changed"
