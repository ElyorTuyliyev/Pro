const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-white">404</h1>
        <p className="mb-4 text-xl text-slate-300">Oops! Page not found</p>
        <a href="/" className="text-cyan-300 underline hover:text-cyan-200">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
