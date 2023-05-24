import React from 'react';
import { Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from './auth-helper';

export default function PrivateRoute() {
  const isAuthenticated = auth.isAuthenticated();
  const location = useLocation();

  return (
 
      isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate
          to={{
            pathname: '/signin',
            state: { from: location },
          }}
        />
      )
   
  );
}
