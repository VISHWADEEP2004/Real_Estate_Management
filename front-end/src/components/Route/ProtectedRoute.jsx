import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Adjust this as necessary
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
