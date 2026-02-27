import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <>
      <h1>React: useState</h1>
      <div style={{ display: 'flex' }}>
        <Counter state={count1} setter={setCount1} />
        <Counter state={count2} setter={setCount2} />
        <Counter state={count3} setter={setCount3} />
      </div>
    </>
  );
}

export default App;
