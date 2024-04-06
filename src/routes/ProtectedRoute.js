import {} from "react";
import { Redirect, Route } from "react-router-dom";
import { getSession } from "service/services";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let { Authorization } = getSession();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Authorization) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
