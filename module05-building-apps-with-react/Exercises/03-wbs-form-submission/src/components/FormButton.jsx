import { useFormStatus } from 'react-dom';

const FormButton = ({ children, pendingLabel = 'Working...' }) => {
  // # Learning Concept: useFormStatus reads the nearest form submission state.
  // * This keeps pending UI inside one reusable button instead of repeating loading logic in every page.
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className='btn btn-neutral mt-4' type='submit'>
      {pending ? pendingLabel : children}
    </button>
  );
};
export default FormButton;
