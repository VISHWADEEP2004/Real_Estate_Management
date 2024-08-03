import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AgentWelcomeMessage = () => {
  const [agentName, setAgentName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAgentName = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/users/all');
        console.log('API Response:', response.data);

        const users = response.data;
        const agent = users.find(user => user.role === 'agent');

        if (agent) {
          setAgentName(agent.name);
        } else {
          console.error('Agent not found');
        }
      } catch (error) {
        setError('Error fetching agent data');
        console.error('Error fetching agent data:', error);
      }
    };

    fetchAgentName();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md mb-4'>
      <h1 className='text-2xl font-bold mb-2'>Welcome back, {agentName || 'Agent'}!</h1>
      {error && <p className='text-red-500'>{error}</p>}
      <p>Here’s a quick overview of your performance and recent activities. Let’s make today another successful day!</p>
    </div>
  );
};

export default AgentWelcomeMessage;
