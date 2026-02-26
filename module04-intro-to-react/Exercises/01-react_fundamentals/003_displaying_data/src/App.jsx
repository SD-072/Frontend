import Student from './components/Student';
import './index.css';

// You can work here or download the template
const studentData = {
  id: 1,
  firstName: 'Testy',
  lastName: 'McTestFace',
  age: 42,
  course: 'Web Development',
  city: 'Berlin',
  picture: 'https://randomuser.me/api/portraits/men/1.jpg',
};

// Your components go here

const App = () => {
  return (
    <div>
      <Student
        // # 1. Individual props manually
        // firstName={studentData.firstName}
        // lastName={studentData.lastName}
        // age={studentData.age}
        // course={studentData.course}
        // city={studentData.city}
        // picture={studentData.picture}

        // # 2. Whole object as a prop
        person={studentData}

        // # 3. Spread operator - same as above, but no reference
        // {...studentData}
      />
    </div>
  );
};

export default App;
