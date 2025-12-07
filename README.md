# TypeLink 🚀

> TypeScript URL Shortener with Terminal UI and Auto-generated Code Snippets

TypeLink is a powerful, interactive command-line URL shortener built with TypeScript. It features a beautiful terminal UI powered by Ink and automatically generates code snippets in multiple programming languages for your shortened URLs.

## ✨ Features

- **🔗 URL Shortening**: Quickly shorten long URLs with auto-generated or custom short codes
- **💻 Interactive Terminal UI**: Beautiful, user-friendly interface built with Ink (React for CLI)
- **📝 Auto-Generated Code Snippets**: Get instant code examples in 8+ languages:
  - cURL
  - JavaScript (fetch)
  - Node.js (axios)
  - Python (requests)
  - Go
  - PHP
  - Ruby
  - Java
- **📊 URL Management**: View all shortened URLs with click tracking
- **⚡ Fast & Lightweight**: Built with TypeScript for performance and type safety
- **🎨 Modern UX**: Intuitive navigation with arrow keys and keyboard shortcuts

## 🚀 Installation

### From Source

```bash
# Clone the repository
git clone https://github.com/pareshjoshij/TypeLink.git
cd TypeLink

# Install dependencies
npm install

# Build the project
npm run build

# Run the application
npm start
```

### Using npm (when published)

```bash
npm install -g typelink
typelink
```

## 📖 Usage

### Start the Application

```bash
npm start
```

Or if installed globally:

```bash
typelink
```

### Command Line Options

```bash
typelink [options]

Options:
  --base-url, -b  Base URL for shortened links (default: http://localhost:3000)
  --help          Show help message
  --version       Show version number

Examples:
  typelink
  typelink --base-url https://my-domain.com
```

### Navigation

- **↑/↓ Arrow Keys**: Navigate through menu options and lists
- **Enter**: Select an option or confirm input
- **ESC**: Go back to previous screen
- **D**: Delete a URL (in URL list view)

## 🎯 Features Walkthrough

### 1. Shorten a URL

1. Select "📝 Shorten a new URL" from the main menu
2. Enter the URL you want to shorten
3. Optionally provide a custom short code or press Enter for auto-generation
4. View your shortened URL and auto-generated code snippets!

### 2. View All URLs

1. Select "📋 View all shortened URLs" from the main menu
2. Browse through all your shortened URLs
3. See statistics including creation date and click count
4. Press Enter on any URL to view its code snippets
5. Press D to delete a URL

### 3. Code Snippets

After shortening a URL, you'll automatically see code snippets in multiple languages:

```bash
# Example cURL snippet
curl -L "http://localhost:3000/abc123"

# Example JavaScript fetch snippet
fetch('http://localhost:3000/abc123')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

Use ↑/↓ to switch between different language examples!

## 🛠️ Development

### Prerequisites

- Node.js >= 16
- npm >= 7

### Setup

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Run in development mode
npm run dev
```

### Project Structure

```
TypeLink/
├── src/
│   ├── components/        # React components for Terminal UI
│   │   ├── App.tsx       # Main application component
│   │   ├── MenuScreen.tsx
│   │   ├── ShortenUrlScreen.tsx
│   │   ├── ListUrlsScreen.tsx
│   │   └── CodeSnippetsScreen.tsx
│   ├── utils/            # Core utilities
│   │   ├── urlShortener.ts  # URL shortening logic
│   │   └── codeGenerator.ts # Code snippet generation
│   └── cli.tsx           # CLI entry point
├── dist/                 # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## 🧪 Technologies Used

- **TypeScript**: Type-safe development
- **Ink**: React for interactive CLIs
- **React**: Component-based UI architecture
- **nanoid**: Unique ID generation for short codes
- **meow**: CLI argument parsing
- **chalk**: Terminal string styling

## 📝 API

### UrlShortener Class

```typescript
import { UrlShortener } from './utils/urlShortener';

const shortener = new UrlShortener();

// Shorten a URL
const shortened = shortener.shortenUrl('https://example.com');
// With custom code
const custom = shortener.shortenUrl('https://example.com', 'mycode');

// Get original URL
const url = shortener.getOriginalUrl('mycode');

// Get all URLs
const allUrls = shortener.getAllUrls();

// Delete a URL
shortener.deleteUrl('mycode');
```

### CodeGenerator Class

```typescript
import { CodeGenerator } from './utils/codeGenerator';

const generator = new CodeGenerator();

// Generate code snippets
const snippets = generator.generateSnippets('abc123', 'https://short.url');
// Returns array of {language: string, code: string}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

ISC

## 🙏 Acknowledgments

- Built with [Ink](https://github.com/vadimdemedes/ink) - React for interactive CLIs
- Inspired by modern URL shortening services
- Thanks to all contributors!

## 📞 Contact

For questions, issues, or suggestions, please open an issue on GitHub.

---

Made with ❤️ using TypeScript