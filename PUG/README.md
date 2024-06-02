# Pug

This section covers Pug, a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers.

## Topics Covered
- Introduction to Pug
- Pug syntax
- Interpolation
- Iteration
- Conditionals
- Inheritance and includes

## Resources
- [Pug Documentation](https://pugjs.org/api/getting-started.html)
- [Pug Tutorial](https://pugjs.org/language/attributes.html)

## Code Examples

### Basic Pug Syntax

```pug
//- Layout.pug
doctype html
html
  head
    title= title
  body
    block content

//- Index.pug
extends layout

block content
  h1= message
  p Welcome to the Pug tutorial!