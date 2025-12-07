# Contributing to TypeLink

Thank you for your interest in contributing to TypeLink! 🎉

## Getting Started

### Prerequisites

- Node.js >= 16
- npm >= 7
- Git
- A code editor (VS Code recommended)

### Setup Development Environment

1. Fork the repository on GitHub
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/TypeLink.git
   cd TypeLink
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build the project:
   ```bash
   npm run build
   ```

5. Run the demo to verify everything works:
   ```bash
   npm run demo
   ```

## Development Workflow

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
├── examples/             # Example scripts
├── dist/                 # Compiled output (generated)
└── tests/               # Test files (to be added)
```

### Making Changes

1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes in the `src/` directory

3. Build and test your changes:
   ```bash
   npm run build
   npm start
   npm run demo
   ```

4. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a Pull Request on GitHub

### Commit Message Convention

We follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add URL expiration feature
fix: resolve navigation bug in menu screen
docs: update README with new examples
```

## Code Style

- Use TypeScript strict mode
- Follow existing code formatting
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused

### TypeScript Guidelines

```typescript
// ✅ Good
interface UrlData {
  id: string;
  url: string;
  shortCode: string;
}

function shortenUrl(url: string): UrlData {
  // Implementation
}

// ❌ Avoid
function doStuff(x: any): any {
  // Implementation
}
```

## Adding New Features

### Adding a New Language to Code Generator

1. Open `src/utils/codeGenerator.ts`
2. Add your language to the `generateSnippets` method:

```typescript
{
  language: 'Your Language',
  code: `// Your code template here
using ${fullUrl}`,
}
```

### Adding a New Screen

1. Create a new component in `src/components/YourScreen.tsx`
2. Import and use it in `src/components/App.tsx`
3. Add navigation logic

Example:
```typescript
import React from 'react';
import { Box, Text, useInput } from 'ink';

export const YourScreen: React.FC<Props> = ({ onBack }) => {
  useInput((input, key) => {
    if (key.escape) {
      onBack();
    }
  });

  return (
    <Box flexDirection="column">
      <Text>Your content here</Text>
    </Box>
  );
};
```

## Testing

### Running Tests (when available)

```bash
npm test
```

### Manual Testing Checklist

Before submitting a PR, test these scenarios:

- [ ] Start the application
- [ ] Shorten a URL with auto-generated code
- [ ] Shorten a URL with custom code
- [ ] View all URLs list
- [ ] Navigate through code snippets
- [ ] Delete a URL
- [ ] Exit the application
- [ ] Run with custom base URL flag

## Pull Request Guidelines

### Before Submitting

- [ ] Code builds without errors (`npm run build`)
- [ ] All features work as expected (`npm start`)
- [ ] Demo script runs successfully (`npm run demo`)
- [ ] Code follows project style
- [ ] Commit messages follow convention
- [ ] README/docs updated if needed

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Screenshots
If applicable, add screenshots

## Checklist
- [ ] Code builds successfully
- [ ] Manually tested changes
- [ ] Updated documentation
- [ ] Follows code style
```

## Areas for Contribution

### Good First Issues

- Add more programming languages to code generator
- Improve error messages and validation
- Add color themes
- Improve keyboard shortcuts
- Add help screens

### Advanced Features

- Persistent storage (database integration)
- Web API server
- QR code generation
- URL expiration
- Analytics dashboard
- Import/Export functionality
- URL categories/tags

## Documentation

- Keep README.md up to date
- Add JSDoc comments for new functions
- Update DEMO.md with new features
- Create examples for new features

## Getting Help

- Open an issue for questions
- Join discussions on GitHub
- Review existing code for patterns
- Check DEMO.md for examples

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow GitHub community guidelines

## Recognition

Contributors will be:
- Listed in the project
- Credited in release notes
- Part of the TypeLink community

## Questions?

Feel free to:
- Open an issue
- Start a discussion
- Reach out to maintainers

Thank you for contributing to TypeLink! 🚀
