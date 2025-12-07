#!/usr/bin/env node
/**
 * TypeLink Quick Start Guide
 * Run this script to see a quick overview of TypeLink capabilities
 */

import { UrlShortener } from '../dist/utils/urlShortener.js';
import { CodeGenerator } from '../dist/utils/codeGenerator.js';

console.log(`
╔═══════════════════════════════════════════════════════════╗
║            🚀 Welcome to TypeLink!                        ║
║     TypeScript URL Shortener with Terminal UI            ║
╚═══════════════════════════════════════════════════════════╝
`);

// Initialize
const shortener = new UrlShortener();
const codeGen = new CodeGenerator();

console.log('📌 Quick Start: 3 Simple Steps\n');

// Step 1
console.log('STEP 1: Shorten a URL');
console.log('─'.repeat(60));
const url = shortener.shortenUrl('https://github.com/pareshjoshij/TypeLink');
console.log(`✅ Shortened: ${url.originalUrl}`);
console.log(`📍 Short URL: http://localhost:3000/${url.shortCode}\n`);

// Step 2
console.log('STEP 2: Get Code Snippets');
console.log('─'.repeat(60));
const snippets = codeGen.generateSnippets(url.shortCode);
console.log(`✅ Generated ${snippets.length} code snippets:`);

// Show first 3 languages
snippets.slice(0, 3).forEach(snippet => {
  console.log(`\n   ${snippet.language}:`);
  console.log(`   ${snippet.code.split('\n')[0]}`);
});
console.log('\n   ... and 5 more languages!\n');

// Step 3
console.log('STEP 3: Start Interactive UI');
console.log('─'.repeat(60));
console.log('✅ Run the interactive terminal UI:\n');
console.log('   npm start\n');
console.log('   or\n');
console.log('   node dist/cli.js\n');

console.log('─'.repeat(60));
console.log('\n📖 Learn More:\n');
console.log('   • README.md     - Complete documentation');
console.log('   • DEMO.md       - Usage examples and workflows');
console.log('   • FEATURES.md   - Full feature list');
console.log('   • examples/demo.mjs - Run full demo\n');

console.log('💡 Key Features:\n');
console.log('   ✓ Auto-generated short codes');
console.log('   ✓ Custom short codes');
console.log('   ✓ 8+ programming languages');
console.log('   ✓ Interactive terminal UI');
console.log('   ✓ Click tracking');
console.log('   ✓ URL management\n');

console.log('🎯 Try It Now:\n');
console.log('   npm start              # Start interactive UI');
console.log('   npm run demo           # Run full demo');
console.log('   npm run build          # Build from source\n');

console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║  Happy URL Shortening! 🎉                                ║');
console.log('╚═══════════════════════════════════════════════════════════╝\n');
