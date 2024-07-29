import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UserDashboard = () => {
  return (
    <main className='flex-grow p-6 dark:bg-slate-950 w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Profile Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View and update your personal details, including username, email, and contact information.</p>
          </CardContent>
        </Card>

        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Activity 1: Logged in at 10:00 AM</li>
              <li>Activity 2: Updated profile settings at 11:15 AM</li>
              <li>Activity 3: Viewed property details at 1:30 PM</li>
            </ul>
          </CardContent>
        </Card>

        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Recent notifications and important updates related to your account.</p>
          </CardContent>
        </Card>

        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Check your recent messages and correspondence.</p>
          </CardContent>
        </Card>

        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Update your account preferences, including notification settings and privacy options.</p>
          </CardContent>
        </Card>
        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Activity Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View statistics related to your recent activities and interactions.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default UserDashboard;
