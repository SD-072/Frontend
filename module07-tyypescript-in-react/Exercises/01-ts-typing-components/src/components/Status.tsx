// components/Status.tsx
// This component should receive a `status` prop with one of: "loading", "success" , "error"
type StatusProp = {
  status: 'loading' | 'success' | 'error';
};

const Status = ({ status }: StatusProp) => {
  return (
    <div>
      {status === 'loading' && 'Loading...'}
      {status === 'success' && 'Data fetched successfully'}
      {status === 'error' && 'Error fetching data'}
    </div>
  );
};

export default Status;
