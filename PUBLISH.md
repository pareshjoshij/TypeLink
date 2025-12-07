# Publishing TypeLink

This guide explains how to publish TypeLink to npm.

## Prerequisites

- npm account with publish permissions
- Logged in to npm (`npm login`)
- All changes committed and pushed
- Version number updated

## Pre-Publish Checklist

- [ ] All tests pass (`npm test`)
- [ ] Build succeeds (`npm run build`)
- [ ] Demo runs successfully (`npm run demo`)
- [ ] Documentation is up to date
- [ ] CHANGELOG updated with version changes
- [ ] Version bumped in package.json
- [ ] No uncommitted changes

## Version Bumping

Update version in `package.json`:

```bash
# Patch release (bug fixes): 1.0.0 -> 1.0.1
npm version patch

# Minor release (new features): 1.0.0 -> 1.1.0
npm version minor

# Major release (breaking changes): 1.0.0 -> 2.0.0
npm version major
```

This will:
1. Update version in package.json
2. Create a git tag
3. Commit the change

## Publishing Steps

### 1. Build the Package

```bash
npm run build
```

### 2. Test the Package Locally

```bash
# Pack the package (creates a tarball)
npm pack

# Test installation from tarball
npm install -g typelink-1.0.0.tgz

# Test the CLI
typelink

# Uninstall test version
npm uninstall -g typelink
```

### 3. Publish to npm

```bash
# Dry run (see what would be published)
npm publish --dry-run

# Publish to npm
npm publish

# Or publish with public access (if scoped package)
npm publish --access public
```

### 4. Verify Publication

```bash
# Check package on npm
npm view typelink

# Install from npm
npm install -g typelink

# Test
typelink
```

### 5. Create GitHub Release

1. Go to GitHub Releases
2. Click "Draft a new release"
3. Choose the version tag created by `npm version`
4. Title: `v1.0.0 - Release Name`
5. Describe changes
6. Attach any binaries if needed
7. Publish release

## Files Included in Package

The `.gitignore` and `.npmignore` control what gets published. By default:

**Included:**
- `dist/` - Compiled JavaScript
- `README.md`
- `LICENSE`
- `package.json`
- Documentation files

**Excluded:**
- `src/` - TypeScript source (users get compiled JS)
- `node_modules/`
- `.git/`
- `examples/` - Demo scripts (optional)
- Test files

## Post-Publish

1. Verify package works:
   ```bash
   npx typelink
   ```

2. Update documentation if needed

3. Announce the release:
   - GitHub Discussions
   - Twitter/Social media
   - Product Hunt (for major versions)

## Troubleshooting

### Package Size Too Large

Check what's being included:
```bash
npm pack --dry-run
```

Add exclusions to `.npmignore` if needed.

### Version Conflicts

If the version already exists:
```bash
npm version patch  # Bump to next version
```

### Login Issues

```bash
npm login
npm whoami  # Verify login
```

### Unpublishing (Use with Caution)

You can only unpublish within 72 hours, and it's discouraged:
```bash
npm unpublish typelink@1.0.0
```

Better to publish a fix as a new version.

## Best Practices

1. **Never publish with uncommitted changes**
2. **Always test locally first** (`npm pack`)
3. **Use semantic versioning** (semver.org)
4. **Keep CHANGELOG.md updated**
5. **Tag releases in git**
6. **Write clear release notes**
7. **Test in a clean environment** before publishing
8. **Consider using `np`** - Better publishing workflow: `npx np`

## Alternative: Using `np`

`np` is a better `npm publish`:

```bash
# Install
npm install -g np

# Publish (interactive)
np

# Publish specific version
np patch
np minor
np major
```

Benefits:
- Interactive prompts
- Runs tests automatically
- Checks git status
- Publishes and pushes in one command
- Creates GitHub release

## Rolling Back

If something goes wrong:

1. Publish a new fixed version (recommended)
2. Or unpublish within 72 hours (not recommended)
3. Update documentation to warn about broken version

## Questions?

- npm documentation: https://docs.npmjs.com/
- Semantic versioning: https://semver.org/
- `np` tool: https://github.com/sindresorhus/np
