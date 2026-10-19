# AI Usage Report

## Tools Used & Use Cases
I used Quillbot to help fix and grammar check.

I used the Copilot SDK assistant in VS Code to help implement two interactive features for my portfolio:

- **Dynamic Content:** I asked for a collapsible list of messages submitted through the contact form. The assistant helped add each submitted message with the sender's name and email, along with the message text. I then asked to move the list into its own section below Contact and make its heading larger.
- **Error Handling and User Feedback:** I asked for clear feedback when contact-form fields are empty or invalid. The assistant helped add messages for a missing name, missing or invalid email address, and missing message, as well as marking invalid fields and focusing the first invalid field.

The assistant worked with the existing HTML, CSS, and vanilla JavaScript. No external libraries or APIs were added.

## Benefits & Challenges

AI assistance helped turn the requested behaviors into concrete changes that fit the existing page. Iterating on the sent-message list made it possible to refine its placement and appearance after the initial implementation. The form feedback work also highlighted the need to handle fields containing only whitespace, not just fields that are literally empty.

One limitation is that submitted messages are added to the page only in the current browser session. They are not sent to a server or saved across reloads. This portfolio does not make API requests, so API loading and failure messages do not apply to these features.

## Learning Outcomes

This work helped me understand how to:

- Handle contact-form submissions with JavaScript and `FormData`.
- Trim and validate user input before processing it.
- Give users visible validation feedback and identify invalid fields accessibly.
- Create and append list elements dynamically, and update a message count.
- Use the native HTML `<details>` and `<summary>` elements for expandable content.
- Keep submitted text as text content rather than interpreting it as HTML.

## Responsible Use & Modifications

I used AI as an implementation aid for the two features above, rather than for the rest of the assignment. I reviewed the changes in the context of the existing form and page, kept the implementation in the project's existing HTML, CSS, and JavaScript files, and checked that the JavaScript parses and the diff has no whitespace errors.

The sent-message list is a local demonstration: the page displays submitted messages, but does not deliver email or persist messages. I did not add an API or claim that a message was actually emailed.

## Usage Log

| ID | Tool (model) | Date | Purpose | Files affected | What you changed and how you verified it |
|----|--------------|------|---------|----------------|------------------------------------------|
| C01 | Copilot SDK assistant (model not specified) | 2026-10-19 | Add dynamic sent-message content to the contact form | `index.html`, `js/script.js`, `css/styles.css` | Added a collapsible list that displays each submitted sender's name, email, and message, updates its count, and shows an empty state. Checked JavaScript syntax and `git diff --check`. |
| C02 | Copilot SDK assistant (model not specified) | 2026-10-19 | Refine the dynamic content section | `index.html`, `css/styles.css` | Moved the sent-message list into a separate section below Contact and increased the summary text size. Checked the diff with `git diff --check`. |
| C03 | Copilot SDK assistant (model not specified) | 2026-10-19 | Add error handling and user feedback to the contact form | `js/script.js`, `css/styles.css` | Added feedback for empty or whitespace-only fields and invalid email addresses, marked invalid fields, and focused the first invalid field. Checked JavaScript syntax and `git diff --check`. |


## Declaration

Name: Mazen Mdkhali

Student ID: 202469500

Date: 2026-10-19

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

