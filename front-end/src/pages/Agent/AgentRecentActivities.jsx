import React from 'react';

const AgentRecentActivities = () => {
  return (
    <div className='bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Recent Activities</h2>
      <ul className='list-disc pl-5'>
        <li>New property added in Downtown - 3 BHK</li>
        <li>Deal closed for 2 BHK in Uptown</li>
        <li>Listing updated for 1 BHK in Midtown</li>
      </ul>
    </div>
  );
};

export default AgentRecentActivities;
