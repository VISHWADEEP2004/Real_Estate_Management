import React from 'react';

const AgentStats = () => {
  return (
    <div className='bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Key Statistics</h2>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <span className='font-medium'>Total Listings:</span>
          <span>45</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Active Deals:</span>
          <span>12</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Closed Deals:</span>
          <span>8</span>
        </div>
      </div>
    </div>
  );
};

export default AgentStats;
