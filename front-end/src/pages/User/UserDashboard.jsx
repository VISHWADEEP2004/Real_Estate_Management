// src/components/UserDashboard.jsx
import React from 'react';

const UserDashboard = () => {
  return (
    <main className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to Your Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Recent Activity */}
        <section className='p-4 bg-white shadow rounded-lg'>
          <h2 className='text-xl font-semibold mb-2'>Recent Activity</h2>
          <p>No recent activity.</p>
        </section>
        {/* Notifications */}
        <section className='p-4 bg-white shadow rounded-lg'>
          <h2 className='text-xl font-semibold mb-2'>Notifications</h2>
          <p>You have no new notifications.</p>
        </section>
        {/* Quick Links */}
        <section className='p-4 bg-white shadow rounded-lg'>
          <h2 className='text-xl font-semibold mb-2'>Quick Links</h2>
          <ul>
            <li><a href='/myproperties'>My Properties</a></li>
            <li><a href='/savedlistings'>Saved Listings</a></li>
            <li><a href='/searchmap'>Search Map</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default UserDashboard;
