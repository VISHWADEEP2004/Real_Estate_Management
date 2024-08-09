// src/components/UserSettings.jsx
import React, { useState } from 'react';

const UserSettings = () => {
  const [settings, setSettings] = useState({
    email: 'user@example.com',
    password: '',
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    // Implement save logic here
    console.log('Settings saved:', settings);
  };

  return (
    <main className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Settings</h1>
      <div className='space-y-4'>
        {/* Email */}
        <div className='flex items-center'>
          <label className='w-1/3'>Email:</label>
          <input
            type='email'
            name='email'
            value={settings.email}
            onChange={handleChange}
            className='w-2/3 p-2 border rounded'
          />
        </div>
        {/* Password */}
        <div className='flex items-center'>
          <label className='w-1/3'>New Password:</label>
          <input
            type='password'
            name='password'
            value={settings.password}
            onChange={handleChange}
            className='w-2/3 p-2 border rounded'
          />
        </div>
        {/* Notifications */}
        <div className='flex items-center'>
          <label className='w-1/3'>Email Notifications:</label>
          <input
            type='checkbox'
            name='notifications'
            checked={settings.notifications}
            onChange={handleChange}
            className='w-2/3'
          />
        </div>
        {/* Save Button */}
        <button
          onClick={handleSave}
          className='px-4 py-2 bg-blue-500 text-white rounded mt-4'
        >
          Save Settings
        </button>
      </div>
    </main>
  );
};

export default UserSettings;
