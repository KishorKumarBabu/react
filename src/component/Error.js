import { useRouteError } from "react-router-dom"

const Error=()=>{
 const err = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-red-100 text-gray-800 px-6 py-12">
  <div className="text-6xl mb-4 animate-bounce">😵</div>

  <h1 className="text-3xl md:text-4xl font-bold mb-2 text-red-700 text-center">
    Oops! Something went wrong.
  </h1>

  <p className="text-xl font-medium text-red-600 mb-1 text-center">
    ❌ {err.status} - {err.statusText || "Unknown Error"}
  </p>

  <p className="text-gray-600 text-center mb-6 max-w-md">
    The page you're looking for doesn't exist or has been moved.
  </p>

  <a
    href="/"
    className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition shadow-md hover:shadow-lg"
  >
    ⬅ Back to Home
  </a>
</div>

  );
};

export default Error