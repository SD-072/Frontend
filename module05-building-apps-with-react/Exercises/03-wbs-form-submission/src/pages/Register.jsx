import { useActionState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { registerNewsletter } from '../api';
import { ErrorFallback, Instructions } from '../components';
import FormButton from '../components/FormButton';

const initialState = {
  success: '',
  error: '',
};

// # Learning Concept: useActionState lets a form action return the next UI state.
// * Returning success or error data from the action keeps async feedback colocated with the form.
// ! The first parameter is always the previous state once the action is composed with useActionState.
async function registerAction(_prevState, formData) {
  const submission = Object.fromEntries(formData);

  console.log('Newsletter registration:', submission);

  try {
    const result = await registerNewsletter(submission.email);

    return {
      success: result,
      error: '',
    };
  } catch (error) {
    return {
      success: '',
      error: error.message,
    };
  }
}

const Register = () => {
  const [state, formAction] = useActionState(registerAction, initialState);

  return (
    <div className='flex flex-col items-center'>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form action={formAction}>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4'>
            <legend className='fieldset-legend'>Register to our newsletter</legend>
            <label className='label' htmlFor='email'>
              Email
            </label>
            <input
              className='input w-full'
              id='email'
              name='email'
              placeholder='Email'
              type='email'
            />

            {state.error ? <p className='mt-3 text-sm text-red-600'>{state.error}</p> : null}
            {state.success ? <p className='mt-3 text-sm text-green-600'>{state.success}</p> : null}

            <FormButton pendingLabel='Registering...'>Register!</FormButton>
          </fieldset>
        </form>
      </ErrorBoundary>
      <Instructions path='/register.md' />
    </div>
  );
};

export default Register;
