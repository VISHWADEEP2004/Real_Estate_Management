import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminMain = () => {
  return (
    <main className='sticky overflow-auto left-0 w-full h-full  rounded-lg shadow-md bg-input text-foreground dark:bg-secondary dark:text-secondary-foreground'>
      <div className='h-full w-full flex justify-center items-center border '>
        <Outlet />
      </div>
    </main>
  );
};

export default AdminMain;
