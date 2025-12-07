#!/usr/bin/env node
/**
 * TypeLink Demo Script
 * This script demonstrates the core functionality of TypeLink programmatically
 */

import { UrlShortener } from '../dist/utils/urlShortener.js';
import { CodeGenerator } from '../dist/utils/codeGenerator.js';

console.log('🚀 TypeLink Demo - URL Shortener\n');
console.log('='.repeat(60));

// Initialize
const shortener = new UrlShortener();
const codeGen = new CodeGenerator();

// Demo 1: Basic URL Shortening
console.log('\n📝 Demo 1: Basic URL Shortening');
console.log('-'.repeat(60));

const url1 = shortener.shortenUrl('https://github.com/pareshjoshij/TypeLink');
console.log('✅ URL Shortened:');
console.log(`   Original: ${url1.originalUrl}`);
console.log(`   Short Code: ${url1.shortCode}`);
console.log(`   Created: ${url1.createdAt.toLocaleString()}`);
console.log(`   Short URL: http://localhost:3000/${url1.shortCode}`);

// Demo 2: Custom Short Code
console.log('\n📝 Demo 2: Custom Short Code');
console.log('-'.repeat(60));

const url2 = shortener.shortenUrl('https://www.example.com/docs', 'docs');
console.log('✅ Custom URL Created:');
console.log(`   Original: ${url2.originalUrl}`);
console.log(`   Custom Code: ${url2.shortCode}`);
console.log(`   Short URL: http://localhost:3000/${url2.shortCode}`);

// Demo 3: Multiple URLs
console.log('\n📝 Demo 3: Shortening Multiple URLs');
console.log('-'.repeat(60));

const testUrls = [
  'https://www.npmjs.com/package/typescript',
  'https://reactjs.org/docs/getting-started.html',
  'https://nodejs.org/en/docs/',
];

testUrls.forEach((url, index) => {
  const shortened = shortener.shortenUrl(url);
  console.log(`${index + 1}. ${url}`);
  console.log(`   → http://localhost:3000/${shortened.shortCode}`);
});

// Demo 4: Code Snippet Generation
console.log('\n📝 Demo 4: Auto-Generated Code Snippets');
console.log('-'.repeat(60));

const snippets = codeGen.generateSnippets(url1.shortCode, 'http://localhost:3000');
console.log(`✅ Generated ${snippets.length} code snippets for: ${url1.shortCode}\n`);

// Show a few example snippets
const exampleLanguages = ['cURL', 'JavaScript (fetch)', 'Python (requests)'];
exampleLanguages.forEach(lang => {
  const snippet = snippets.find(s => s.language === lang);
  if (snippet) {
    console.log(`\n${snippet.language}:`);
    console.log('─'.repeat(40));
    console.log(snippet.code);
  }
});

// Demo 5: URL Management
console.log('\n\n📝 Demo 5: URL Management & Statistics');
console.log('-'.repeat(60));

const allUrls = shortener.getAllUrls();
console.log(`Total URLs: ${shortener.count}`);
console.log('\nAll Shortened URLs:');
allUrls.forEach((url, index) => {
  console.log(`\n${index + 1}. Code: ${url.shortCode}`);
  console.log(`   URL: ${url.originalUrl}`);
  console.log(`   Created: ${url.createdAt.toLocaleString()}`);
  console.log(`   Clicks: ${url.clicks}`);
});

// Demo 6: Click Tracking
console.log('\n📝 Demo 6: Click Tracking');
console.log('-'.repeat(60));

console.log(`\nSimulating clicks on ${url1.shortCode}...`);
for (let i = 0; i < 5; i++) {
  shortener.incrementClicks(url1.shortCode);
}

const updatedUrl = shortener.getOriginalUrl(url1.shortCode);
console.log(`✅ Clicks updated: ${updatedUrl.clicks} clicks`);

// Demo 7: URL Lookup
console.log('\n📝 Demo 7: URL Lookup');
console.log('-'.repeat(60));

const lookupCode = url2.shortCode;
const found = shortener.getOriginalUrl(lookupCode);
if (found) {
  console.log(`✅ Found URL for code "${lookupCode}":`);
  console.log(`   Original URL: ${found.originalUrl}`);
  console.log(`   Created: ${found.createdAt.toLocaleString()}`);
}

// Demo 8: URL Deletion
console.log('\n📝 Demo 8: URL Deletion');
console.log('-'.repeat(60));

const beforeCount = shortener.count;
console.log(`URLs before deletion: ${beforeCount}`);

const deleted = shortener.deleteUrl(lookupCode);
console.log(`✅ Deleted "${lookupCode}": ${deleted}`);
console.log(`URLs after deletion: ${shortener.count}`);

// Summary
console.log('\n' + '='.repeat(60));
console.log('🎉 Demo Complete!');
console.log('='.repeat(60));
console.log('\n📊 Final Statistics:');
console.log(`   Total URLs: ${shortener.count}`);
console.log(`   Languages Supported: ${snippets.length}`);
console.log(`   Available Languages: ${snippets.map(s => s.language).join(', ')}`);

console.log('\n✨ Try the interactive CLI with: npm start');
console.log('📖 Read more in README.md and DEMO.md\n');
