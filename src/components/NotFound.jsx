import { useRouteError } from "react-router-dom";
const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="m-50">
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
      <a
        href="/"
        class=" text-red-600 hover:text-red-700 transition duration-300 ease-in-out mb-4"
      >
        Return home
      </a>
    </div>
  );
};

export default NotFound;
