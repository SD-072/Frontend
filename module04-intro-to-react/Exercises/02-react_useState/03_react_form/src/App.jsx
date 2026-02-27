import { useState } from 'react';

const initalFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

function App() {
  // 1. Single state for each input
  // const [name, setName] = useState('');

  // 2. Object State
  const [formState, setFormState] = useState(initalFormState);

  function handleChange(e) {
    // const value = e.target.value;
    // const field = e.target.name;

    // // In JS Objects you can set a dynamiv key with [keyname]
    // const newFormState = { ...formState, [field]: value };
    // setFormState(newFormState);
    // console.log(newFormState);
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div>
      <h1>React controlled form</h1>
      <form
        action=''
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
        onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' onChange={handleChange} value={formState.name} />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={handleChange}
          value={formState.email}
        />

        <label htmlFor='phone'>Phone</label>
        <input type='tel' name='phone' id='phone' onChange={handleChange} value={formState.phone} />

        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          id='message'
          onChange={handleChange}
          value={formState.message}></textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
