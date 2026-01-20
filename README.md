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

---

## delegate.html

`delegate.html` demonstrates the concept of event delegation in JavaScript.

### What it Shows
- How to use a single event listener on a parent element (`ol`) to handle events for all its child elements (`li`).
- How new items added dynamically to the list are automatically handled by the same event listener.
- Clicking any list item removes it from the list.
- A button allows you to add new items to the list.

### How to Use
1. Open `delegate.html` in your browser.
2. Click any list item to remove it from the list.
3. Click the "Add new Item" button to add a new item to the list. The new item can also be removed by clicking it.

### Code Structure
- The JavaScript uses event delegation by attaching a single click event listener to the `ol` element.
- When a list item is clicked, the event handler removes the clicked item using `event.target.parentNode.removeChild(event.target)`.
- The add button creates a new `li` element and appends it to the list.

This file is useful for learning efficient event handling and dynamic DOM manipulation using event delegation.