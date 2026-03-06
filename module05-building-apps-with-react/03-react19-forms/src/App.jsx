// Code from <https://learn.wbscodingschool.com/courses/full-stack-web-app/lessons/data-mutations/topic/%f0%9f%93%9a-onsubmit-event/>
import { useActionState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback.jsx';
import SubmitBtn from './components/SubmitBtn.jsx';
import { sleep, validate } from './utils/index.js';

async function action(_prevState, formData) {
  console.log(_prevState);
  // console.log(formData.get('email'));
  const data = Object.fromEntries(formData); //  {name: "Guybrush"}

  const validationErrors = validate(data);

  if (Object.keys(validationErrors).length === 0) {
    await sleep(2000); // Simulate network delay
    console.log('Submitted:', data);
    alert('Form submitted successfully!');
    fetch('', {
      // method: "GET"
      // method: "POST",
      method: 'PUT',
    });
    return {};
  }

  return {
    errors: validationErrors,
    input: data,
  };
}

const App = () => {
  const [state, formAction, isPending] = useActionState(action, {});

  return (
    <main className='min-h-screen bg-gray-900 p-8 font-sans'>
      <div className='max-w-xl mx-auto bg-gray-950 p-6 rounded-lg shadow space-y-6'>
        <h2 className='text-2xl font-bold text-center text-gray-200'>Contact Us</h2>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <form action={formAction} className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-200' htmlFor='name'>
                Name
              </label>
              <input
                name='name'
                id='name'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                defaultValue={state.input?.name}
                disabled={isPending}
                className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
                placeholder='Leia Organa'
              />
              {state.errors?.name && (
                <p className='text-sm text-red-600 mt-1'>{state.errors?.name}</p>
              )}
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-200' htmlFor='email'>
                Email
              </label>
              <input
                name='email'
                id='email'
                // value={formData.email}
                // onChange={handleChange}
                defaultValue={state.input?.email}
                disabled={isPending}
                className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
                placeholder='leia@rebellion.org'
              />
              {state.errors?.email && (
                <p className='text-sm text-red-600 mt-1'>{state.errors?.email}</p>
              )}
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-200' htmlFor='message'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                rows={4}
                // value={formData.message}
                // onChange={handleChange}
                defaultValue={state.input?.message}
                disabled={isPending}
                className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
                placeholder='Tell us how we can help...'
              />
              {state.errors?.message && (
                <p className='text-sm text-red-600 mt-1'>{state.errors?.message}</p>
              )}
            </div>
            <SubmitBtn />
          </form>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default App;
