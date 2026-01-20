# JS Comment Box Project

This is a simple web project that lets users add comments to a web page. The main features and steps are:

## Features
- Users can type a comment in the input box.
- When the user submits, the comment appears below the box.
- All logic is handled in the JavaScript file.

## How It Works
1. Open `index.html` or `github-delete.html` in your browser.
2. Type your comment in the input field.
3. Click the submit button.
4. Your comment will show up below the input box.

## Files
- `index.html` / `github-delete.html`: The web page with the comment box.
- `comment.js`: The JavaScript code that manages adding and displaying comments.

## Usage
Just open the HTML file in your browser and start adding comments!

This project is for learning basic JavaScript and DOM manipulation.

---

## bubble.html

`bubble.html` is a demonstration of JavaScript event bubbling in the DOM.

### What it Shows
- How click events propagate (bubble) from a child element up to its parent elements.
- Each element (`li`, `ol`, `section`) has its own click event handler that logs a message to the console.

### How to Use
1. Open `bubble.html` in your browser.
2. Open the browser's developer console (usually F12 or right-click → Inspect → Console).
3. Click on any list item (`li`).
4. Observe the order of log messages in the console:
	- Clicking a list item triggers its own handler, then the `ol` handler, then the `section` handler, showing the bubbling process.

### Code Structure
- Inline CSS for visual distinction of each element.
- JavaScript at the bottom of the file sets up event listeners for `li`, `ol`, and `section`.

This file is useful for understanding how event bubbling works in the DOM.