// src/components/Settings.jsx
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteTitle: 'DreamDwelling',
    adminEmail: 'admin@dreamdwelling.com',
    maintenanceMode: false,
    theme: 'light', // Added theme setting
    newPassword: '', // Added password change feature
    notifications: true, // Added notification preferences
  });

  const handleInputChange = (e) => {
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
    <main className='flex-grow p-6 dark:bg-slate-950 w-full h-full'>
      <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
        <CardHeader className="space-y-1">
          <CardTitle className='text-2xl font-bold mb-4'>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            {/* Site Title */}
            <div className='flex justify-between'>
              <label className='w-1/3'>Site Title:</label>
              <input
                type='text'
                name='siteTitle'
                value={settings.siteTitle}
                onChange={handleInputChange}
                className='w-2/3 p-2 border rounded'
              />
            </div>
            {/* Admin Email */}
            <div className='flex justify-between'>
              <label className='w-1/3'>Admin Email:</label>
              <input
                type='email'
                name='adminEmail'
                value={settings.adminEmail}
                onChange={handleInputChange}
                className='w-2/3 p-2 border rounded'
              />
            </div>
            {/* Maintenance Mode */}
            <div className='flex justify-between items-center'>
              <label className='w-1/3'>Maintenance Mode:</label>
              <input
                type='checkbox'
                name='maintenanceMode'
                checked={settings.maintenanceMode}
                onChange={handleInputChange}
                className='w-2/3'
              />
            </div>
            {/* Theme Selection */}
            <div className='flex justify-between items-center'>
              <label className='w-1/3'>Theme:</label>
              <select
                name='theme'
                value={settings.theme}
                onChange={handleInputChange}
                className='w-2/3 p-2 border rounded'
              >
                <option value='light'>Light</option>
                <option value='dark'>Dark</option>
              </select>
            </div>
            {/* Change Password */}
            <div className='flex flex-col'>
              <label className='w-full'>New Password:</label>
              <input
                type='password'
                name='newPassword'
                value={settings.newPassword}
                onChange={handleInputChange}
                className='w-full p-2 border rounded'
              />
            </div>
            {/* Notification Preferences */}
            <div className='flex justify-between items-center'>
              <label className='w-1/3'>Email Notifications:</label>
              <input
                type='checkbox'
                name='notifications'
                checked={settings.notifications}
                onChange={handleInputChange}
                className='w-2/3'
              />
            </div>
            {/* Backup and Restore */}
            <div className='flex justify-between items-center'>
              <label className='w-1/3'>Backup and Restore:</label>
              <button
                onClick={() => console.log('Backup initiated')}
                className='w-1/3 px-2 py-1 bg-green-500 text-white rounded'
              >
                Backup
              </button>
              <button
                onClick={() => console.log('Restore initiated')}
                className='w-1/3 px-2 py-1 bg-yellow-500 text-white rounded'
              >
                Restore
              </button>
            </div>
            {/* Save Button */}
            <button
              onClick={handleSave}
              className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
            >
              Save Settings
            </button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Settings;
