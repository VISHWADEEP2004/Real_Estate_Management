import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize the state from localStorage
    return !!localStorage.getItem('isLoggedIn');
  });
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || null);
  const navigate = useNavigate();

  const login = (token, role) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', role);
    localStorage.setItem('isLoggedIn', true); // Store isLoggedIn in localStorage
    setIsLoggedIn(true);
    setUserRole(role);

    if (role === 'AGENT') {
      navigate('/agentdashboard');
    } else if (role === 'ADMIN') {
      navigate('/admindashboard');
    } else {
      navigate('/userdashboard');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn from localStorage
    setIsLoggedIn(false);
    setUserRole(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
