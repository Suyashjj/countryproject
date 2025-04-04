import { NavLink, useRouteError } from "react-router-dom";  //property

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      {/* if errror then show error */}
      {error && <p>{error.data}</p>}   
      <NavLink to="/">
        <button> Go Home </button>
      </NavLink>
    </div>
  );
};