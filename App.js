import { Fragment } from "react";
import "./App.css";
import SignUp from "./components/Signup";
import Welcome from "./components/Welcome";
import ResetPassword from "./components/ResetPassword";
import ComposeMail from "./components/ComposeMail";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      {!isLoggedIn && (
        <Route path="/signup">
          <SignUp />
        </Route>
      )}

      <Switch>
        <Route path="/" exact>
          <Redirect to="/signup" />
        </Route>
        <Route path="/header">
          <Header />
        </Route>
        <Route path="/resetpassword">
          <ResetPassword />
        </Route>
        <Route path="welcome">
          <Welcome />
        </Route>
        <Route path="/composeemail">
          <ComposeMail />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
