import React, { useState } from 'react';

const ProfilePage = () => {
  // Initial user profile data
  const [profile, setProfile] = useState({
    username: 'Vishwa',
    email: 'vishwa@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Springfield, IL',
    memberSince: 'January 2020',
    bio: 'Real estate enthusiast with a passion for helping people find their dream homes.'
  });
  return (
    <div className="flex flex-col w-full items-center p-6  rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{profile.username}'s Profile</h2>
      </div>
      <div className="w-full max-w-2xl  p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium ">Username:</label>
            <input 
              type="text" 
              name="username" 
              value={profile.username} 
              className="mt-1 p-2 border  rounded-md focus:outline-none bg-white dark:bg-slate-900"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium ">Email:</label>
            <input 
              type="email" 
              name="email" 
              value={profile.email} 
              className="mt-1 p-2 border  rounded-md focus:outline-none focus:ring-2 bg-white dark:bg-slate-900"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium ">Phone:</label>
            <input 
              type="text" 
              name="phone" 
              value={profile.phone} 
              className="mt-1 p-2 border  rounded-md focus:outline-none bg-white dark:bg-slate-900"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium ">Address:</label>
            <input 
              type="text" 
              name="address" 
              value={profile.address} 
              className="mt-1 p-2 border rounded-md focus:outline-none bg-white dark:bg-slate-900"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium ">Member Since:</label>
            <input 
              type="text" 
              name="memberSince" 
              value={profile.memberSince} 
              disabled
              className="mt-1 p-2 border  rounded-md bg-white dark:bg-slate-900"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium ">Bio:</label>
            <textarea 
              name="bio" 
              value={profile.bio} 
              className="mt-1 p-2 border rounded-md focus:outline-none bg-white dark:bg-slate-900"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
