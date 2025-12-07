# TypeLink Demo & Usage Guide

## Quick Start Demo

### 1. Start the Application

```bash
npm start
```

You'll be greeted with the main menu:

```
┌────────────────────────────────┐
│ 🚀 TypeLink - URL Shortener    │
└────────────────────────────────┘

Total shortened URLs: 0

Main Menu
────────────────
❯ 📝 Shorten a new URL
  📋 View all shortened URLs
  🚪 Exit

Use ↑/↓ arrow keys to navigate, Enter to select
```

### 2. Shorten Your First URL

Select "Shorten a new URL" and enter a URL:

```
Shorten URL
───────────

Enter the URL to shorten:
┌──────────────────────────────────────────┐
│ https://github.com/pareshjoshij/TypeLink█│
└──────────────────────────────────────────┘

Press Enter to continue, ESC to go back
```

After pressing Enter, optionally provide a custom short code:

```
URL: https://github.com/pareshjoshij/TypeLink

Enter custom code (optional, press Enter to auto-generate):
┌──────────────────┐
│ typelink█        │
└──────────────────┘

Press Enter to create, ESC to go back
```

### 3. View Code Snippets

After creating a shortened URL, you'll immediately see the code snippets:

```
┌─────────────────────────────────────────┐
│ ✅ URL Shortened Successfully!          │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ Short Code: typelink                            │
│ Short URL: http://localhost:3000/typelink       │
│ Original URL: https://github.com/...TypeLink    │
└─────────────────────────────────────────────────┘

Code Snippets
─────────────

Select a language:
❯ cURL  JavaScript (fetch)  Node.js (axios)  Python (requests)  
  Go  PHP  Ruby  Java

┌──────────────────────────────────────────────────┐
│ cURL                                             │
│                                                  │
│ curl -L "http://localhost:3000/typelink"        │
└──────────────────────────────────────────────────┘

Use ↑/↓ to switch languages, ESC to go back
```

### 4. Browse All URLs

From the main menu, select "View all shortened URLs":

```
All Shortened URLs
──────────────────

┌────────────────────────────────────────────────┐
│ ❯ Code: typelink                               │
│   URL: https://github.com/pareshjoshij/TypeLink│
│   Created: 12/7/2025, 4:52:00 PM | Clicks: 0   │
└────────────────────────────────────────────────┘

┌────────────────────────────────────────────────┐
│   Code: 4I9bKl                                 │
│   URL: https://example.com                     │
│   Created: 12/7/2025, 4:45:30 PM | Clicks: 5   │
└────────────────────────────────────────────────┘

Use ↑/↓ to navigate, Enter to view snippets, D to delete, ESC to go back
```

## Example Workflows

### Workflow 1: Quick URL Shortening

1. Start TypeLink: `npm start`
2. Press Enter (selects "Shorten a new URL")
3. Type your URL: `https://example.com/very/long/url/path`
4. Press Enter twice (auto-generates short code)
5. Copy the short URL and code snippets!

### Workflow 2: Custom Short Codes

1. Navigate to "Shorten a new URL"
2. Enter URL: `https://docs.myapp.com/getting-started`
3. Press Enter
4. Enter custom code: `docs`
5. Press Enter
6. Your URL is now accessible at: `http://localhost:3000/docs`

### Workflow 3: Managing URLs

1. Navigate to "View all shortened URLs"
2. Use ↑/↓ to select a URL
3. Press Enter to view code snippets for that URL
4. Or press D to delete the URL

## Code Snippet Examples

### cURL
```bash
curl -L "http://localhost:3000/abc123"
```

### JavaScript (fetch)
```javascript
fetch('http://localhost:3000/abc123')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Node.js (axios)
```javascript
const axios = require('axios');

axios.get('http://localhost:3000/abc123')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

### Python (requests)
```python
import requests

response = requests.get('http://localhost:3000/abc123')
print(response.text)
```

### Go
```go
package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    resp, err := http.Get("http://localhost:3000/abc123")
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}
```

## Tips & Tricks

### Custom Base URL

When deploying TypeLink, use the `--base-url` flag to set your domain:

```bash
typelink --base-url https://short.mydomain.com
```

All generated snippets will use your custom domain!

### Keyboard Shortcuts Quick Reference

| Key | Action |
|-----|--------|
| ↑/↓ | Navigate menu items or lists |
| Enter | Select/Confirm |
| ESC | Go back |
| D | Delete (in URL list) |
| Ctrl+C | Exit application |

### URL Validation

TypeLink validates URLs to ensure they:
- Start with `http://` or `https://`
- Are properly formatted
- Don't contain invalid characters

### Short Code Generation

- Auto-generated codes are 6 characters by default
- Use nanoid for cryptographically strong random IDs
- Custom codes can be any length (alphanumeric recommended)

## Integration Examples

### Use in Scripts

```bash
#!/bin/bash
# Start TypeLink in the background for automation
typelink --base-url https://my-domain.com &
TYPELINK_PID=$!

# Your automation here...

# Clean up
kill $TYPELINK_PID
```

### Programmatic Usage

```typescript
import { UrlShortener } from 'typelink';

const shortener = new UrlShortener();
const url = shortener.shortenUrl('https://example.com', 'custom');
console.log(url.shortCode); // 'custom'
```

## Troubleshooting

### Application won't start
- Ensure Node.js >= 16 is installed
- Run `npm install` to install dependencies
- Run `npm run build` to compile TypeScript

### URLs not shortening
- Check URL format (must include http:// or https://)
- Ensure custom code doesn't already exist

### Terminal UI looks broken
- Ensure your terminal supports Unicode
- Try resizing your terminal window
- Use a modern terminal emulator (iTerm2, Windows Terminal, etc.)

## Next Steps

- Deploy TypeLink to your server
- Set up a web frontend to serve shortened URLs
- Add persistent storage (database)
- Implement analytics and click tracking
- Add QR code generation for URLs

---

Happy URL Shortening! 🚀
