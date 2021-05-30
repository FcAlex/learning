import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from './Context/AuthContext';

import Login from './pages/Login';
import Users from './pages/Users';

function CustomRoute({ isPrivate, ...rest }) {
  const { isAuthenticated, loading } = useContext(Context)

  if(loading) {
    return <span>Loading</span>
  }

  if(isPrivate && !isAuthenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest}/>
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute exact path="/users" component={Users} />
    </Switch>
  );
}