import { useFormStatus } from 'react-dom';

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className={`w-full py-2 rounded text-white ${
        pending ? 'bg-blue-400 cursor-progress' : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
      }`}>
      {pending ? 'Sending message...' : 'Send Message'}
    </button>
  );
};
export default SubmitBtn;
