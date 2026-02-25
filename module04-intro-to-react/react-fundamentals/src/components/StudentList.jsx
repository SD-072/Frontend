const StudentList = () => {
  const students = [
    { id: 1, name: "Nil", country: "Germany / Spain" },
    { id: 2, name: "Samara", country: "Kyrgyzstan" },
    { id: 3, name: "Patrick", country: "France" },
    { id: 4, name: "Martin", country: "Sweden" },
  ];

  // I want list items, that say: "Patrick from France"
  return (
    <ul>
      {students.map((student) => {
        return (
          <li key={student.id}>
            {student.name} from {student.country}
          </li>
        );
      })}
    </ul>
  );
};

export default StudentList;
