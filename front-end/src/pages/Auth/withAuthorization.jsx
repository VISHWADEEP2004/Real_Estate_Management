import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const withAuthorization = (WrappedComponent, allowedRoles) => {
  return (props) => {
    const navigate = useNavigate();
    const userRole = localStorage.getItem('userRole'); // Assume role is stored in localStorage after login

    if (!allowedRoles.includes(userRole)) {
      toast.error('You are not authorized to access this page.');
      navigate('/unauthorized');
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthorization;
