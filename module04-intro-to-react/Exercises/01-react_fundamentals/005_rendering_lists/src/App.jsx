import Student from './components/Student';
import './index.css';

import students from './data/students';

const App = () => {
  return (
    <div className='container'>
      {students.map((student, index) => (
        <Student key={student.id} person={student} />
      ))}
    </div>
  );
};

export default App;
