import React from 'react';
import { Dashboard, Login, Error, PrivateRoute, AuthWrapper} from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
      <Router>

        <Switch>

          <PrivateRoute path='/' exact>
            <Dashboard/>
          </PrivateRoute>
          <Route path='/login' exact>
            <Login/>
          </Route>
          <Route path='*'>
            <Error/>
          </Route>

        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
