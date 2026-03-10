const ErrorPage = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-error mb-4 text-6xl font-bold">404</h1>
        <p className="text-base-content mb-2 text-2xl font-semibold">
          Page Not Found
        </p>
        <p className="text-base-content/60">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
