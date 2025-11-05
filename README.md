# Sudoku Solver

A simple, elegant Sudoku puzzle solver built with **vanilla JavaScript** - no frameworks, no dependencies, just clean HTML/CSS/JS.

## Features

- 🎮 **Interactive Grid**: Click cells and enter numbers 1-9
- ✅ **Real-time Validation**: Prevents invalid moves based on Sudoku rules
- 🚀 **Instant Solving**: Backtracking algorithm solves puzzles in milliseconds
- 📱 **Responsive Design**: Works on desktop and mobile
- 🔓 **Open Source**: All code visible and modifiable
- ⚡ **Zero Dependencies**: Pure vanilla JavaScript
- 🌐 **Static Hosting**: Deploy anywhere (GitHub Pages, Netlify, Vercel)

## Live Demo

🎯 **[Play Now](https://devendrap.github.io/sudoku/)**

## Usage

1. **Load Sample** - Load a pre-configured puzzle
2. **Manual Entry** - Click any cell and type a number (1-9)
3. **Solve** - Let the algorithm complete the puzzle
4. **Reset** - Clear the grid and start over

**Keyboard Shortcuts:**
- `1-9` - Enter number in selected cell
- `Space` or `Esc` - Clear selected cell

## Technology Stack

- **HTML5** - Clean semantic markup
- **CSS3** - Grid layout with visual feedback
- **Vanilla JavaScript** - No frameworks or libraries
- **Algorithm** - Classic backtracking with constraint validation

## Local Development

No build step required! Just open the file:

```bash
# Clone the repository
git clone https://github.com/devendrap/sudoku.git
cd sudoku

# Open in browser
open index.html
# or
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

## Deployment

### GitHub Pages (Automated)

This repository uses GitHub Actions to automatically deploy to GitHub Pages on every push.

The workflow is configured in `.github/workflows/deploy.yml`

### Manual Deployment

Since it's a static site, you can deploy to:

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --dir=. --prod
```

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**Any Static Host:**
Just upload `index.html` and any related files to your hosting provider.

## How It Works

### Solving Algorithm

Uses a **backtracking algorithm** with constraint propagation:

1. Find empty cell
2. Try numbers 1-9
3. Check if number is valid (row, column, 3x3 box)
4. If valid, place number and recurse
5. If stuck, backtrack and try next number
6. Repeat until solved or no solution

### Validation Rules

For each move, checks:
- ✅ Number not already in same row
- ✅ Number not already in same column
- ✅ Number not already in same 3x3 box

## File Structure

```
sudoku/
├── index.html              # Main application
├── test-load-sample.html   # Debug version with metrics
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
└── README.md              # This file
```

## Browser Support

Works in all modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Contributing

Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Fork and modify

## License

MIT License - feel free to use in your own projects!

## Author

**Devendra Phadke**
🌐 [Ride Softech](http://ridesoftech.com)

---

## Why Vanilla JS?

This project deliberately uses **no frameworks** to demonstrate that:

✅ Modern browsers are powerful enough for interactive UIs
✅ Simple projects don't need complex tooling
✅ Vanilla JS is fast, lightweight, and will work forever
✅ No build steps = easier maintenance
✅ Great for learning fundamentals

**Want to add a framework?** The algorithm logic is framework-agnostic and can easily be adapted to React, Vue, Svelte, etc.

---

© 2020-2025 Devendra Phadke
