import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h3>Oops!!</h3>
      <h4>Something went wrong</h4>
      <h4>
        {err.status}:{err.statusText}
      </h4>
    </div>
  );
};

export default Error;
