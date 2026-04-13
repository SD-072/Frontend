import { useEffect, useState } from 'react';

const Effect = () => {
  // # Learning Concept: useEffect Lifecycle + Dependencies + Cleanup
  // * `useEffect` helps separate side effects from render logic so React can coordinate async work safely.
  const [todo, setTodo] = useState(null);
  const [count, setCount] = useState(0);
  const [myObj, setMyObj] = useState({ test: 42 });

  // # Effect 1: Fetch once on mount
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await res.json();
      setTodo(data);
      console.log('Fetched todo:', data);
    };

    fetchData();
  }, []);

  // # Effect 2: React to primitive dependency changes
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("This executes after 'count' has changed:", count);
  }, [count]);

  // # Effect 3: React to object reference changes
  useEffect(() => {
    console.log('Object changed:', myObj);
    console.log("Runs every time after 'myObj' has changed");
  }, [myObj]);
  // with variables: runs whenever the value changes
  // ! For objects (also arrays/functions): if the reference changes, the effect runs again.

  // # Effect 4: Setup and cleanup subscriptions
  useEffect(() => {
    const handleResize = (e) => {
      console.log(e.target.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // * Cleanup prevents memory leaks and duplicate listeners when the component is removed.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {todo && <p>{todo.title}</p>}

      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>
  );
};

export default Effect;
