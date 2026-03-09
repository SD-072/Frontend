import FormButton from './FormButton';

const SearchForm = ({ filters, formAction, onFilterChange }) => {
  // # Learning Concept: controlled inputs preserve the current filters across submissions.
  // * React owns the field values here, so the search criteria stay visible after the action runs.
  return (
    <section className='w-full max-w-4xl'>
      <form action={formAction} className='w-full'>
        <fieldset className='bg-base-200 border border-base-300 rounded-box p-4'>
          <legend className='fieldset-legend mb-2'>Search Products</legend>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-end'>
            <div className='flex flex-col'>
              <label htmlFor='category' className='label text-sm font-medium'>
                Category
              </label>
              <input
                id='category'
                className='input input-bordered w-full'
                name='category'
                onChange={onFilterChange}
                placeholder='Category'
                value={filters.category}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='minPrice' className='label text-sm font-medium'>
                Min Price
              </label>
              <input
                id='minPrice'
                type='number'
                className='input input-bordered w-full'
                name='minPrice'
                onChange={onFilterChange}
                placeholder='Min'
                value={filters.minPrice}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='maxPrice' className='label text-sm font-medium'>
                Max Price
              </label>
              <input
                id='maxPrice'
                type='number'
                className='input input-bordered w-full'
                name='maxPrice'
                onChange={onFilterChange}
                placeholder='Max'
                value={filters.maxPrice}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='query' className='label text-sm font-medium'>
                Description
              </label>
              <input
                id='query'
                className='input input-bordered w-full'
                name='query'
                onChange={onFilterChange}
                placeholder='Search keyword'
                value={filters.query}
              />
            </div>
            <div className='flex justify-end md:items-end'>
              <FormButton pendingLabel='Searching...'>Search</FormButton>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default SearchForm;
