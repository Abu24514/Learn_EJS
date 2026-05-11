# EJS (Embedded JavaScript) - Quick Guide

## What is EJS?
EJS stands for **Embedded JavaScript**. It is a popular templating engine for Node.js and Express. It allows you to generate HTML markup using plain JavaScript. By embedding JavaScript directly into your HTML, you can render dynamic data, use loops, and apply conditional logic seamlessly before the page is sent to the user's browser.

## Why Use EJS?
- **Plain JavaScript:** You don't need to learn a new templating syntax (like Pug or Handlebars). If you know JavaScript, you already know EJS.
- **Fast Execution:** It is lightweight and highly performant for server-side rendering (SSR).
- **Easy Integration:** It works flawlessly right out of the box with Express.js.
- **Partials:** Supports creating reusable layout components (like headers, footers, and navbars) to keep your code DRY (Don't Repeat Yourself).

## EJS Delimiters (Tags)
Delimiters are the symbols that define the boundary (the start and end) of EJS code within an HTML file. They tell the EJS engine, "Stop reading this as HTML and start executing it as JavaScript."

Here is a complete list of EJS opening and closing delimiters:

| Tag | Name | Description | Example |
| :--- | :--- | :--- | :--- |
| `<%` | **Scriptlet Tag** | Used for control-flow logic (e.g., `if`, `for`). It executes JavaScript but does **not** output anything. | `<% if (user) { %>` |
| `<%=` | **Escaped Output** | Outputs the value of a variable into the HTML. It escapes HTML elements to prevent XSS attacks. | `<%= user.name %>` |
| `<%-` | **Unescaped Output** | Outputs the raw, unescaped value. Used for rendering actual HTML strings or including partials. | `<%- include('header') %>` |
| `<%#` | **Comment Tag** | Used for comments. The engine completely ignores it and won't appear in the final HTML. | `<%# Hidden comment %>` |
| `<%%` | **Literal Tag** | Outputs a literal `<%` string into the template without executing it as EJS code. | `<%%= This prints as text %>` |
| `%>` | **Closing Tag** | The standard tag used to close any opening EJS block. | `<% } %>` |
| `-%>` | **Trim-mode Tag** | A closing tag that removes the newline character immediately following it. | `<%- include('nav') -%>` |
| `<%_` | **Whitespace Slurp** | An opening tag that removes all leading whitespace before it. | `<%_ if (true) { %>` |
| `_%>` | **Whitespace Slurp** | A closing tag that removes all trailing whitespace after it. | `<% } _%>` |

## Example Usage

Here is how different delimiters come together in a real `.ejs` file:

```html
<!-- 1. Including a Partial (Unescaped Output) -->
<%- include('partials/header') %>

<div class="container">
  <!-- 2. Logic (Scriptlet) & Variable Output (Escaped) -->
  <% if (users.length > 0) { %>
    <h2>User List</h2>
    <ul>
      <% users.forEach(function(user) { %>
        <li><%= user.name %> - <%= user.email %></li>
      <% }) %>
    </ul>
  <% } else { %>
    <p>No users found in the database.</p>
  <% } %>
</div>

<!-- 3. EJS Comment -->
<%# The footer includes copyright info %>
<%- include('partials/footer') %>
```

## Custom Delimiters
If you don't like using `%` as your delimiter, EJS allows you to customise it globally in your Express app. For example, changing it to `?`:

```javascript
const ejs = require('ejs');
ejs.delimiter = '?'; 
// Now you can write: <?= user.name ?>
```
