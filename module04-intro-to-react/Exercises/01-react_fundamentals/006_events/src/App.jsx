import './index.css';

// You can work here or download the template

const App = () => {
  const handleSubmit = event => {
    event.preventDefault();
    // console.log(event.target.elements);

    const { name, age, color, recommend, button } = event.target.elements;

    try {
      button.disabled = true;

      if (!name.value) {
        throw new Error('Name is required');
      }
      if (!age.value) {
        throw new Error('Age is required');
      }
      if (!color.value) {
        throw new Error('Color is required');
      }
      console.log({
        name: name.value,
        age: age.value,
        color: color.value,
        recommend: recommend.checked,
      });
    } catch (error) {
      alert(error.message);
    } finally {
      button.disabled = false;
    }
  };
  return (
    <>
      {/* <button
        type='button'
        onClick={event => {
          console.log(event);
          alert('Clicked!');
        }}>
        Click me!
      </button> */}
      <div className='app'>
        <h1>Mini Survey</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor=''>
            Name <input type='text' name='name' id='name' />
          </label>
          <label htmlFor=''>
            Age
            <input type='text' name='age' inputMode='numeric' pattern='[0-9]*' />
          </label>
          <label htmlFor=''>
            Favorite Color
            <select name='color' defaultValue=''>
              <option value='' disabled>
                --Select--
              </option>
              <option value='red'>Red</option>
              <option value='green'>Green</option>
              <option value='blue'>Blue</option>
            </select>
          </label>
          <fieldset>
            <legend>Would you recommend our site?</legend>
            <label htmlFor='' className='checkbox'>
              <input type='checkbox' name='recommend' /> I would recommend this site
            </label>
          </fieldset>
          <button name='button' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
