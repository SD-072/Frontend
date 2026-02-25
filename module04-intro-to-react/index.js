// function logHello() {
//   console.log("Bye");
// }

// logHello();
// logHello();
// logHello();

// # Create a NavBar component
// You write components in PascalCase
const NavBar = () => {
  // Atop of the component is JavaScript
  const navBarText = "Navigation Bar";

  function displayText() {
    return "Navigation Bar";
  }

  // At the bottom in a return statement is JSX (What you will see in the DOM/on the webapp)
  return (
    <nav>
      <ul>
        {/* ✔ Allowed (expressions) - always have a return */}
        <li>{2 + 2}</li>
        <li>{navBarText}</li>
        <li>{displayText()}</li>
        <li>{loggedIn ? "Hi" : "Please log in"}</li>
        {items.map(i => (
          <li>{i}</li>
        ))}
      </ul>
    </nav>
    /* ❌ Not allowed (statements) - might not return sth. */
    /* <h1>{if (loggedIn) "Hi"}</h1>; */
  ); // JSX = compination of HTML-like syntax & JavaScript // JSX => JavaScript XML
};

// const navBarText = "Navigation Bar";
// const navBar = document.createElement("nav");
// navBar.textContent = navBarText;
