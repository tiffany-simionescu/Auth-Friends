import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
