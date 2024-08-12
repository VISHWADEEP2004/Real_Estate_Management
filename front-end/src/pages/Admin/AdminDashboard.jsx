import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUsers, FaUserTie } from 'react-icons/fa';

const AgentDashboard = () => {
    const [userCount, setUserCount] = useState(0);
    const [agentCount, setAgentCount] = useState(0);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const userResponse = await axios.get('http://localhost:8080/api/auth/count');
                const agentResponse = await axios.get('http://localhost:8080/api/agents/count');
                setUserCount(userResponse.data);
                setAgentCount(agentResponse.data);
            } catch (error) {
                console.error('Error fetching counts:', error);
            }
        };

        fetchCounts();
    }, []);

    return (
        <main className='flex-grow p-6 dark:bg-slate-950 w-full h-screen flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl'>
                
                <div className='bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4 border'>
                    <FaUsers className='text-8xl text-violet-900' />
                    <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>Total Users</h2>
                    <p className='text-4xl font-bold text-gray-800 dark:text-white'>{userCount}</p>
                </div>

                <div className='bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4 border'>
                    <FaUserTie className='text-8xl text-violet-900' />
                    <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>Number of Agents</h2>
                    <p className='text-4xl font-bold text-gray-800 dark:text-white'>{agentCount}</p>
                </div>

                <div className='bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4 border'>
                    <FaUserTie className='text-8xl text-violet-900' />
                    <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>Active Users</h2>
                    <p className='text-4xl font-bold text-gray-800 dark:text-white'>Coming Soon</p>
                </div>
                
            </div>
        </main>
    );
};

export default AgentDashboard;
