function NavBar({ title, user }) {
  return (
    <nav>
      <h2>{title}</h2>
      <p className={user === "Renke" ? "bg-red-500" : "bg-green-500"}>
        Welcome, {user}
      </p>
      <ul className="flex justify-around font-bold">
        <li style={{ backgroundColor: "red" }}>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default NavBar;

// const name = "Studentname";
// const email = "studentname@gmail.com";

// export { name, email };

// function greet(name) {
//   console.log("Hello " + name);
// }

// greet("Martin");
// greet("Patrick");
