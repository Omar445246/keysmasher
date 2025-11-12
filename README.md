# keysmasher

A terminal-based typing speed test inspired by MonkeyType. Test your typing speed and accuracy right from your command line!

## Features

- 🎯 Real-time WPM (Words Per Minute) calculation
- 📊 Live accuracy tracking
- 🎨 Beautiful terminal UI with color-coded feedback
- 💻 Syntax highlighting for code practice (GitHub Dark theme)
- ⚡ Instant error highlighting (errors shown in red)
- 🔄 Quick restart with Enter key
- 📈 Detailed results screen with stats

## Installation

```bash
bunx keysmasher
```

Or install globally:

```bash
bun install -g keysmasher
```

## Usage

### Default Mode (Random Words)

Simply run:

```bash
keysmasher
```

### Code Practice Mode

Practice typing code with syntax highlighting:

```bash
# Practice with random JavaScript code
keysmasher --lang js

# Practice with random Python code
keysmasher --lang py

# Practice with random TypeScript code
keysmasher --lang ts

# Practice with random Markdown
keysmasher --lang md
```

**Supported languages:** `javascript` (js), `typescript` (ts), `python` (py), `markdown` (md), `json`, `html`, `css`, `bash` (sh), `yaml` (yml), `rust` (rs), `go`, `java`, `c`, `cpp`

### Custom Text Mode

Practice with your own text:

```bash
# Plain text (no highlighting)
keysmasher "your custom text here"

# With syntax highlighting (must specify language)
keysmasher "your code here" --lang typescript
keysmasher "const x = 1" --lang js
```

### Advanced Usage

Practice with content from files:

```bash
# Practice with content from a file
keysmasher "$(cat mytext.txt)"

# Practice with a random markdown file
keysmasher "$(find . -name "*.md" | head -1 | xargs cat)"

# Practice with your code
keysmasher "$(cat src/index.ts)"

# Practice with documentation
keysmasher "$(cat README.md)"

# Practice with specific lines from a file
keysmasher "$(head -n 10 article.txt)"
```

The text will be automatically split into groups of 25 words. Press Enter after completing each group to continue to the next one.

### Controls

- Start typing to begin the test
- Typed text appears at full color intensity (with syntax highlighting if enabled)
- Untyped text appears dimmed (60% opacity)
- Errors are highlighted in red
- Press `Backspace` to delete a character
- Press `Alt+Backspace` (Option+Backspace on Mac) to delete an entire word
- Press `ESC` or `Ctrl+C` to quit
- Press `Enter` after completion to start a new test
- Press `Ctrl+R` to restart test

## Development

```bash
# Install dependencies
bun install

# Run locally
bun run cli
```

## How It Works

The test displays 25 words at a time (either random words, code snippets, or your custom text). As you type:

**Without syntax highlighting:**
- Untyped characters appear in dim gray (#666666)
- Correctly typed characters appear in light gray (#e0e0e0)
- Incorrect characters are shown in red (#ff6b6b)

**With syntax highlighting:**
- Untyped characters appear dimmed (60% opacity and saturation of syntax color)
- Correctly typed characters appear at full color from GitHub Dark theme
- Incorrect characters are shown in red (#ff6b6b)
- Language must be specified with `--lang` flag

**General:**
- Your cursor position is highlighted with yellow background (#ffd43b)
- All content is centered for optimal focus
- Stats appear below in a single line: `keysmasher • 45 wpm • 98% acc • 12.3s`
- When using custom text, pagination info shows your progress: `2/5` (page 2 of 5)
- WPM is calculated using the standard formula: (characters / 5) / minutes
- Accuracy is calculated as: (correct characters / total typed) × 100

## License

MIT
