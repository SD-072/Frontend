// # Object Literals
// * Object literals are a comma-separated list of name-value pairs wrapped in curly braces.
// * They are the most common way to create objects in JavaScript.

// # 01. Create an object called book using object literal syntax.
const book = {
  // * Properties: Key-value pairs holding data.
  title: "Dune",
  author: "Frank Herbert",
  pages: 412,
  isRead: true,

  // # 02. Methods: Functions attached to an object.
  // * 'this' keyword refers to the current object (book).
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${
      this.isRead ? "Yes" : "No"
    }`;
  },

  toggleReadStatus() {
    // # 03. Modifying object state
    this.isRead = !this.isRead;
    // * The above line is a concise way to toggle a boolean.

    // this.isRead = this.isRead ? false : true;

    // ! Alternative verbose way:
    // if (this.isRead === true) {
    //   this.isRead = false;
    // } else {
    //   this.isRead = true;
    // }
  },
};

// # 04. Accessing properties and methods
console.log("Initial Summary:", book.summary());

// # 05. calling methods to modify state
book.toggleReadStatus();
console.log("After toggle:", book.summary());

// # 06. Modifying properties directly
// * You can modify properties using dot notation.
book.isRead = false;
// * We manually set isRead to false.
console.log("After manual modification:", book.summary());

// # 07. Adding properties/methods dynamically
// * You can add new properties or methods to an object after it has been created.
book.getAuthorInfo = function () {
  return `${this.author} has written a book with ${this.pages} pages.`;
};

console.log(book.getAuthorInfo());
