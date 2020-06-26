import React from 'react';
import { routes } from 'core/router';
import { Link } from 'react-router-dom';

export const LoginScene: React.FC = () => {
  return (
    <>
      <h1>Hello from Login Scene!</h1>
      <Link to={routes.submoduleList}> Navigate to Submodule List List</Link>
    </>
  );
};
