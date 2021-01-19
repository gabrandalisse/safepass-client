import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// States
import AlertState from './context/alert/alertState';

function App() {
  return (
    <AlertState>
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </AlertState>
  );
};

export default App;
