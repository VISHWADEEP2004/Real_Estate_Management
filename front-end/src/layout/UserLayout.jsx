import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import UserNavbar from '@/components/User/UserNavbar';
import Footer from '@/components/Web/Footer';
import UserLeftBar from '@/components/User/UserLeftbar';
import UserTopbar from '@/components/User/UserTopbar';
import UserMain from '@/components/User/UserMain';

const UserLayout = () => {
  const location = useLocation();

  const isUserDashboard = location.pathname.startsWith('/userdashboard');

  return (
    <div className='h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0'>
      {isUserDashboard ? (
        <div className='h-screen w-screen overflow-hidden flex pt-2 pl-2 pb-3'>
          <UserLeftBar />
          <div className='flex-1 flex flex-col gap-3'>
            <div className='sticky top-0 z-50 pt-0 pr-2 pl-2'>
              <UserTopbar />
            </div>
            <UserMain>
              <Outlet />
            </UserMain>
          </div>
        </div>
      ) : (
        <>
          <UserNavbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default UserLayout;
