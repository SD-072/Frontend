import { ErrorBoundary } from 'react-error-boundary';
import { toast } from 'react-toastify';
import { sendContactForm } from '../api';
import { ErrorFallback, Instructions } from '../components';
import FormButton from '../components/FormButton';

const Contact = () => {
  const sendAction = async (formData) => {
    // # Learning Concept: Object.fromEntries(formData) converts input fields into an API-friendly object.
    // * This keeps the submit handler short while still letting us destructure only the fields we need.
    const submission = Object.fromEntries(formData);
    const { firstName, lastName, email, message } = submission;

    console.log('Contact form submission:', submission);

    try {
      const response = await sendContactForm({ firstName, lastName, email, message });

      console.log('Contact form response:', response);
      toast.success(response);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form action={sendAction}>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4'>
            <legend className='fieldset-legend'>Contact Us</legend>
            <label className='label' htmlFor='firstName'>
              First Name
            </label>
            <input
              id='firstName'
              className='input w-full'
              name='firstName'
              placeholder='First Name'
              type='text'
            />
            <label className='label' htmlFor='lastName'>
              Last Name
            </label>
            <input
              id='lastName'
              className='input w-full'
              name='lastName'
              placeholder='Last Name'
              type='text'
            />
            <label className='label' htmlFor='email'>
              Email
            </label>
            <input id='email' className='input w-full' name='email' placeholder='Email' type='email' />
            <label className='label' htmlFor='message'>
              Message
            </label>
            <textarea
              id='message'
              className='textarea w-full'
              name='message'
              placeholder='Your message'
              rows={4}
            />
            <FormButton pendingLabel='Sending...'>Send</FormButton>
          </fieldset>
        </form>
      </ErrorBoundary>
      <Instructions path='/contact.md' />
    </div>
  );
};

export default Contact;
