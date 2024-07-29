import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard = () => {
  return (
    <main className='flex-grow p-6 dark:bg-slate-900 w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Admin dashboard overview content goes here.</p>
          </CardContent>
        </Card>

        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Admin dashboard statistics content goes here.</p>
          </CardContent>
        </Card>

        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Activity 1</li>
              <li>Activity 2</li>
              <li>Activity 3</li>
            </ul>
          </CardContent>
        </Card>

        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Details about user management and actions can be placed here.</p>
          </CardContent>
        </Card>

        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>System Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <p>System alerts and notifications content goes here.</p>
          </CardContent>
        </Card>

        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Tasks Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Overview of tasks and to-do lists for administrators.</p>
          </CardContent>
        </Card>

        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Various reports and analytics can be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default AdminDashboard;
