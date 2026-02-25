import Card from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import StudentList from "./components/StudentList";

function App() {
  const name = "Nil";

  const add = (num1, num2) => {
    return num1 + num2;
  };

  const students = ["Patrick", "Nil", "Martin", "Samara"];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
  };

  return (
    <>
      <NavBar title="React Fundamentals" user="Renke" />
      <NavBar title="Dashboard" user="Morle" />
      <NavBar title="Catfood" user="Arne" />
      <Card>
        <h2>Hello!</h2>
        <p>This test is inside the card.</p>
      </Card>
      <Footer />
      <h1>Hello, {name.toUpperCase()}</h1>
      <h2>Sum of 4 and 5 is : {add(4, 5)}</h2>
      <h2>{students[2]}</h2>

      <StudentList />

      <button
        type="button"
        onClick={() => {
          alert("Button was clicked");
        }}
      >
        Alert
      </button>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" name="email" />
        <button type="submit">Submit Email</button>
      </form>

      {/* <UserCard name="Samara" age={99} />
      <UserCard admin={true} />
      <StudentList students={studentsArray} />
      <Button onClick={handleDelete} />

      <Card>
        <UserCard />
      </Card> */}
    </>
  );
}

export default App;
