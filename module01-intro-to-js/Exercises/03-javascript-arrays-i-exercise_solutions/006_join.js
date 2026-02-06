// You can work here or download the template!
const array = ["apple", "banana", "cherry", "date"];

// Create different strings by joining the array elements with various delimiters
let joinedWithComma = array.join(); // Default delimiter (comma)
console.log("Joined with comma:", joinedWithComma);

let joinedWithDash = array.join("-"); // Using dash as delimiter
console.log("Joined with dash:", joinedWithDash);

let joinedWithSpace = array.join(" "); // Using space as delimiter
console.log("Joined with space:", joinedWithSpace);

let joinedWithAnd = array.join(" and "); // Using ' and ' as delimiter
console.log("Joined with 'and':", joinedWithAnd);

let joinedWithoutDelimiter = array.join(""); // Without any delimiter
console.log("Joined without delimiter:", joinedWithoutDelimiter);

/*
 Create a URL Slug: A "slug" is the part of a URL that identifies a page, often created from the page title.
  Task: Create a URL slug from the `pageTitle` array. It should be lowercase and have words joined by dashes.
  Example: "my-first-blog-post"
*/
const pageTitle = ["My", "First", "Blog", "Post"];
const slug = pageTitle.join("-").toLowerCase();
console.log("The URL slug is:", slug);

// ALTERNATIVE 1 = start from the String
const sentence = "My First Blog Post";
const slug1 = sentence.split(" ").join("-").toLowerCase();
console.log(`The URL slug is: ${slug1}`);

// ALTERNATIVE 2 - do not convert into array
const slug2 = sentence.replaceAll(" ", "-").toLowerCase();
console.log(slug2);
