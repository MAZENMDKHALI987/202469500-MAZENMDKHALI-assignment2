# Technical Documentation

## Project Overview

This project is a responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript. It introduces the developer, presents selected projects and skills, and provides a contact form with client-side validation and dynamic feedback. The site has a light/dark theme toggle and a collapsible list of messages submitted during the current page session.

The contact form is a front-end demonstration. It does not send email to a recipient, connect to a server, or save submitted messages after the page is reloaded.

## Project Structure

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── README.md
└── gitignore
```

- **`index.html`** contains the page content, navigation, project cards, contact form, and sent-messages section.
- **`css/styles.css`** defines theme variables, layout, responsive rules, and interactive visual states.
- **`js/script.js`** runs the theme, greeting, contact validation, feedback, and sent-message behaviors.
- **`assets/images/`** is available for local image assets. The current project cards use remote Unsplash image URLs.
- **`docs/`** contains project documentation, including this technical guide and the AI usage report.

## Technologies and Dependencies

- HTML5 for semantic page structure and native form controls.
- CSS3 for responsive layout, light/dark theme styling, and transitions.
- Vanilla JavaScript for page interactions and client-side validation.
- Browser `localStorage` for the selected color theme.
- Google Fonts (Inter) and Unsplash for externally hosted visual resources.

There is no framework, package manager, build step, or server-side component.

## Features Implemented

### Page sections and navigation

The page contains a hero introduction, About section, project cards, Contact section, sent-messages section, and footer. Header and call-to-action links navigate to sections using their element IDs.

### Time-based greeting

When the document is ready, JavaScript reads the browser's local time and changes the greeting to “Good morning,” “Good afternoon,” or “Good evening.”

### Theme toggle

The theme button toggles the `dark` class on the document body. CSS custom properties provide the corresponding colors. The selected value (`dark` or `light`) is stored in `localStorage` and restored on the next page load.

### Contact form validation and feedback

The form submission is handled in JavaScript without navigating away from the page. The script reads the name, email, and message with `FormData`, trims whitespace, and checks that each value is present. The email input's browser validity state is used to reject invalid email formats.

For invalid submissions, the page displays one or more helpful error messages, marks the invalid input with `aria-invalid`, and focuses the first invalid field. A valid submission displays a confirmation message and resets the form. The confirmation indicates that the message was recorded in the page; it does not indicate that an email was delivered.

### Dynamic sent-messages list

After a valid form submission, JavaScript builds a list entry containing the sender's name, email, and message. It updates the list count, hides the initial “No messages sent yet” empty state, and opens the collapsible list. The native `<details>` and `<summary>` elements allow the user to expand or collapse the section.

List content is assigned with `textContent`, so user-provided text is displayed as text and is not parsed as HTML. Messages are held in the page's DOM only and are cleared when the page is reloaded.

### Responsive layout and interaction styling

CSS Grid is used for the main two-column layouts on wider screens. Media queries switch content to a single column on narrower screens and adjust the navigation and spacing. Navigation links, buttons, and theme colors have transitions; navigation links also grow and glow on hover or keyboard focus.

## Implementation Notes

- JavaScript initialization and event listeners are registered after `DOMContentLoaded`.
- The form disables the browser's automatic validation pop-up so the page can show its own combined, accessible error feedback. The email input's native `validity.valid` property is still used to check the email format.
- User-facing form feedback is written to the `#formStatus` element, which uses `aria-live="polite"` so assistive technology can announce updates.
- The contact form and sent-message list work entirely in the browser. No API request, backend validation, email delivery, or message persistence is implemented.
- External Google Fonts and Unsplash images require an internet connection. The core layout and interactions are implemented locally.

## How to Run

1. Open the project folder in a code editor.
2. Open `index.html` directly in a modern browser, or use a local static web server such as the VS Code Live Server extension.
3. Use the navigation to browse the sections. Try the theme button and submit the contact form with valid and invalid values to see the interactions.

No installation or build command is required.

## Browser and Testing Notes

Use a modern browser with support for HTML5 form validation, `<details>`, CSS Grid, and `localStorage`. JavaScript syntax was checked with `node --check js\script.js`; whitespace errors were checked with `git diff --check`.
