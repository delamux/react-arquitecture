import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  LoginScene,
  SubmoduleListScene,
  EmployeeListScene,
  EmployeeScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.login]}
          component={LoginScene}
        />
        <Route
          path={[switchRoutes.submoduleList, switchRoutes.login]}
          component={SubmoduleListScene}
        />
        <Route
          exact={true}
          path={switchRoutes.employees}
          component={EmployeeListScene}
        />
        <Route path={switchRoutes.editEmployee} component={EmployeeScene} />
      </Switch>
    </Router>
  );
};
