import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Passwords from './components/passwords/Passwords';

// States
import AlertState from './context/alert/alertState';

function App() {
  return (
    <AlertState>
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/passwords" component={Passwords} />
        </Switch>
      </Router>
    </AlertState>
  );
};

export default App;
