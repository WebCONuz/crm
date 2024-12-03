const AuthHeader = () => {
  return (
    <header className="header sticky top-0 left-0 w-full bg-gray-200 py-3">
      <div className="container flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-600 uppercase">Logo</h3>

        <div className="flex gap-x-2">
          <button className="py-2 px-6 rounded-lg border-none outline-none bg-blue-500 text-white">
            Sign in
          </button>
          <button className="py-2 px-6 rounded-lg border-none outline-none bg-green-500 text-white">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
