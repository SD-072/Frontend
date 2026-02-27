// import { useState } from 'react';

export default function Counter({ state, setter }) {
  //   const [count, setCount] = useState(0);

  // * setCount
  // 1. scheduling the change of the value count for the next render
  // 2. triggers a re-render

  //    first mount count = 0
  //    Pressing + button -> 0 + 1 = 1 is beeing scheduled for the next render
  //    count is currently 0, but is scheduled to be 1 for the next render
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button type='button' onClick={() => setter(prev => prev - 1)}>
          -
        </button>

        <p>{state}</p>
        <button type='button' onClick={() => setter(prev => prev + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
