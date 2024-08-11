// src/components/LoginChoice.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginChoice = () => {
    const navigate = useNavigate();

    const handleChoice = (role) => {
        navigate(`/login/${role}`);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-800">
            <h1 className="text-2xl font-bold mb-4">Choose Login Type</h1>
            <div className="flex flex-col gap-4">
                <button
                    onClick={() => handleChoice('agent')}
                    className="p-2 bg-blue-500 text-white rounded"
                >
                    Login as Agent
                </button>
                <button
                    onClick={() => handleChoice('user')}
                    className="p-2 bg-green-500 text-white rounded"
                >
                    Login as User
                </button>
            </div>
        </div>
    );
};

export default LoginChoice;
