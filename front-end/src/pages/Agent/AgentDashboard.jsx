import React from 'react';
import AgentStats from './AgentStats';
import AgentRecentActivities from './AgentRecentActivities';
import AgentWelcomeMessage from './AgentWelcomeMessage';

const AgentDashboard = () => {
  return (
    <div className='w-full h-full p-4 dark:bg-gray-800'>
      <AgentWelcomeMessage />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <AgentStats />
        <AgentRecentActivities />
      </div>
    </div>
  );
};

export default AgentDashboard;
