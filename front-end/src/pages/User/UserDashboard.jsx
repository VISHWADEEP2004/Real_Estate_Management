import React from 'react';
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <Outlet />
    </div>
  );
};

export default UserDashboard;
