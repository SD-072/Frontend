// const Student = ({ firstName, lastName, age, course, city, picture }) => {
const Student = ({ person }) => {
  const { firstName, lastName, age, course, city, picture } = person;

  return (
    <article className='card'>
      <img className='card-image' src={picture} alt='' />
      <div className='card-body'>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        <p>Course: {course}</p>
      </div>
    </article>
  );
};
export default Student;
