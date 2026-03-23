import './App.css';
import useFetch from './hooks/useFetch';
import { CatFactsSchema } from './schemas/catFacts';

function App() {
  const { data, error, loading } = useFetch('https://catfact.ninja/fact', CatFactsSchema);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Zod Runtime Validation</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      <p>{data?.fact}</p>

      {/* <ProductList /> */}
    </div>
  );
}

export default App;
