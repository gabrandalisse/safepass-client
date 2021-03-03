import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import tokenAuth from "./config/token";

// Components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Passwords from "./components/passwords/Passwords";
import PrivateRoute from "./components/routes/PrivateRoute";

// States
import AlertState from "./context/alert/alertState";
import AuthState from "./context/authentication/authState";
import PasswordState from "./context/password/passwordState";

// Check for token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <PasswordState>
      <AlertState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/passwords" component={Passwords} />
            </Switch>
          </Router>
        </AuthState>
      </AlertState>
    </PasswordState>
  );
}

export default App;
