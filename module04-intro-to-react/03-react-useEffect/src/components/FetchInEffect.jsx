import { useEffect, useState } from 'react';

const FetchInEffect = () => {
  // # Learning Concept: Cancel async work in cleanup
  // * Aborting stale requests prevents state updates after unmount and avoids race conditions.
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        // ! React StrictMode (dev) can trigger an extra mount/cleanup cycle.
        // * Ignore abort-related errors so only real failures reach the UI.
        if (err.name === 'AbortError' || /aborted/i.test(err.message)) return;
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    // # Cleanup: runs on unmount and before re-running this effect
    return () => controller.abort();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {todos.map((item) => (
        <article key={item.id}>
          <h2>
            {item.title} <span>{item.completed ? '✅' : '❌'}</span>
          </h2>
        </article>
      ))}
    </div>
  );
};
export default FetchInEffect;
