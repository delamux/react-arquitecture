import React from 'react';
import { LoginComponent } from './login.component';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import { Login } from './login.vm';
import { isValidLogin } from './login.api';

export const LoginContainer: React.FunctionComponent = () => {
  const history = useHistory();

  const logginSuceed = (isValid: boolean): void => {
    if (isValid) {
      history.push(routes.submoduleList);
    } else {
      alert('Ivalid login');
    }
  };

  const handleLogin = (login: Login) => {
    isValidLogin(login.user, login.password).then(logginSuceed);
  };

  return (
    <>
      <LoginComponent onLogin={handleLogin} />
    </>
  );
};
