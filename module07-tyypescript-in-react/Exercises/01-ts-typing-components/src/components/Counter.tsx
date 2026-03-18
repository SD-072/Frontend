// components/Counter.tsx
// This component should receive an `initialCount` number prop
// Pass that initial count as the initial value of a piece of state called count

import { type MouseEventHandler, useState } from 'react';

// Render buttons to increase, decrease and reset
const Counter = ({ initialCount }: { initialCount: number }) => {
  const [count, setCount] = useState(initialCount);

  const handleDecrease: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.currentTarget.value === '-') setCount((c) => c - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
        type='button'>
        Increment
      </button>
      <button value={'-'} onClick={handleDecrease} type='button'>
        Decrement
      </button>
      <button onClick={() => setCount(initialCount)} type='button'>
        Reset
      </button>
    </div>
  );
};

export default Counter;
