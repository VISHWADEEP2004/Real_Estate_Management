
import AgentLeftBar from '@/components/Agent/AgentLeftbar';
import AgentMain from '@/components/Agent/AgentMain';
import AgentTopbar from '@/components/Agent/AgentTopbar';
import React from 'react';

const AgentLayout = () => {
  return (
    <div className='h-screen w-screen overflow-hidden flex pt-2 pl-2 pb-3 bg-slate-100 dark:bg-gray-800'>
      <AgentLeftBar />
      <div className='flex-1 flex flex-col gap-1'>
        <div className='sticky top-0 z-50 pt-0 pr-2 pl-2'>
          <AgentTopbar />
        </div>
        <div className='flex-1 overflow-auto h-full w-full flex justify-center items-center pr-2 pl-2'>
          <AgentMain />
        </div>
      </div>
    </div>
  );
}

export default AgentLayout;
