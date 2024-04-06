import {} from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "../components/auth/Login";
import ForgotPassword from "../components/auth/ForgotPassword";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/forget-password" component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  );
};
