import { useState } from 'react';
import Effect from './components/Effect';
import FetchInEffect from './components/FetchInEffect';

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <input type='checkbox' checked={toggle} onChange={() => setToggle((t) => !t)} />
      {toggle && <Effect />}

      <FetchInEffect />
    </>
  );
}

export default App;
