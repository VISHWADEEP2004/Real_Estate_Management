import React from 'react';
import { Outlet } from 'react-router-dom';

const UserMain = () => {
  return (
    <main className='sticky overflow-auto left-0 w-full h-full  rounded-lg shadow-md bg-white  dark:bg-slate-950'>
      <div className='h-full w-full flex justify-center items-center border '>
        <Outlet />
      </div>
    </main>
  );
};

export default UserMain;
