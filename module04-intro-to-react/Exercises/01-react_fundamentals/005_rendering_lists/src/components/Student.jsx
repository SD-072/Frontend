import Grade from './Grade';

// const Student = ({ firstName, lastName, age, course, city, picture }) => {
const Student = ({ person }) => {
  const { firstName, lastName, age, course, city, picture, gpa, graduate } = person;

  return (
    <article className={`card ${graduate ? 'card-graduate' : ''}`}>
      <img className='card-image' src={picture} alt='' />
      <div className='card-body'>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        <p>Course: {course}</p>
        <Grade gpa={gpa} />
        <p>Status: {graduate ? 'Alumnus' : 'Student'}</p>
      </div>
    </article>
  );
};
export default Student;
