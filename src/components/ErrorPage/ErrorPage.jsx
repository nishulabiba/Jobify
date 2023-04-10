import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-center text-8xl m-8">Oops!</h1>
      <p className="text-4xl text-center">Sorry, an unexpected error has occurred. ^_^</p>
      <p className="text-xl text-center">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}