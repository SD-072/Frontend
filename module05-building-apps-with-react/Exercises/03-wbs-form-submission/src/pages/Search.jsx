import { Suspense, use, useActionState, useState } from 'react';
import { searchProducts } from '../api/index.js';
import { Instructions, SearchForm, SearchResults } from '../components';

const productsPromise = searchProducts();
const initialFilters = {
  category: '',
  minPrice: '',
  maxPrice: '',
  query: '',
};

// # Learning Concept: useActionState can drive a searchable page from form submissions.
// * The action returns the next result set, so the UI updates from submitted filters without manual fetch effects.
// ! When useActionState wraps a form action, the previous state becomes the first argument.
async function searchAction(_prevState, formData) {
  const { category, query } = Object.fromEntries(formData);

  const parsedMin = parseFloat(formData.get('minPrice'));
  const minPrice = Number.isNaN(parsedMin) ? undefined : parsedMin;

  const parsedMax = parseFloat(formData.get('maxPrice'));
  const maxPrice = Number.isNaN(parsedMax) ? undefined : parsedMax;

  console.log({ category, query, minPrice, maxPrice });

  const result = await searchProducts({ category, minPrice, maxPrice, query });
  return result;
}

const SearchContent = () => {
  const [filters, setFilters] = useState(initialFilters);
  const [state, formAction] = useActionState(searchAction, use(productsPromise));

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    setFilters((currentFilters) => ({
      ...currentFilters,
      [name]: value,
    }));
  };

  return (
    <div className='flex flex-col items-center'>
      <SearchForm filters={filters} formAction={formAction} onFilterChange={handleFilterChange} />
      {state.error ? (
        <div className='alert alert-error mt-6 w-full max-w-4xl'>
          <span>{state.error}</span>
        </div>
      ) : null}
      <SearchResults products={state.products} />
      <Instructions path='/search.md' />
    </div>
  );
};

const Search = () => (
  <Suspense
    fallback={
      <div className='flex justify-center items-center gap-2 py-10'>
        <span className='loading loading-spinner loading-lg'></span>
        <span>Loading products...</span>
      </div>
    }
  >
    <SearchContent />
  </Suspense>
);

export default Search;
