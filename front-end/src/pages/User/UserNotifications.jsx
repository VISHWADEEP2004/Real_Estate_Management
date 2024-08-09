// src/components/UserNotifications.jsx
import React from 'react';

const UserNotifications = () => {
  const notifications = [
    // Sample notifications
    { id: 1, message: 'Your property listing has been approved.' },
    { id: 2, message: 'New offers on your saved properties.' }
  ];

  return (
    <main className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Notifications</h1>
      <ul className='space-y-4'>
        {notifications.map(notification => (
          <li key={notification.id} className='p-4 bg-white shadow rounded-lg'>
            <p>{notification.message}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UserNotifications;
