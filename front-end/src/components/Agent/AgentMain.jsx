import React from 'react';
import { Outlet } from 'react-router-dom';

const AgentMain = () => {
  return (
    <main className='sticky overflow-auto left-0 w-full h-full rounded-lg shadow-md border bg-white dark:bg-slate-950'>
      <div className='h-full w-full flex flex-col p-4'>
        <div className='flex-grow flex justify-center items-start'>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AgentMain;
