// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// const BarChart = () => {
//   ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Sales',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         backgroundColor: 'darkviolet',
//         borderColor: 'lightviolet',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.raw}`,
//         },
//       },
//     },
//   };

//   return <Bar data={data} options={options} />;
// };

// const AdminDashboard = () => {
//   return (
//     <main className='flex-grow p-6 dark:bg-slate-950 w-full h-full'>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        
//         <Card className='bg-violet dark:bg-slate-950 p-4 rounded-lg shadow-md'>
//           <CardHeader className="space-y-1">
//             <CardTitle className='text-2xl font-bold mb-4'>Sales Overview</CardTitle>
//           </CardHeader>
//           <CardContent className='h-50'>
//             <div style={{ height: '100%' }}>
//               <BarChart />
//             </div>
//           </CardContent>
//         </Card>

//         <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
//           <CardHeader className="space-y-1">
//             <CardTitle className='text-2xl font-bold mb-4'>Overview</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>Get a snapshot of the current system status, including key metrics and operational health.</p>
//             <ul>
//               <li><strong>Total Users:</strong> 1,245</li>
//               <li><strong>Total Properties:</strong> 5,678</li>
//               <li><strong>Pending Tasks:</strong> 45</li>
//             </ul>
//           </CardContent>
//         </Card>

//         <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
//           <CardHeader className="space-y-1">
//             <CardTitle className='text-2xl font-bold mb-4'>Statistics</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>View detailed statistics and trends for various aspects of the real estate management system.</p>
//             <ul>
//               <li><strong>Average Listings Per Day:</strong> 150</li>
//               <li><strong>Monthly New Users:</strong> 120</li>
//               <li><strong>Property Sale Success Rate:</strong> 87%</li>
//             </ul>
//           </CardContent>
//         </Card>

//         <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
//           <CardHeader className="space-y-1">
//             <CardTitle className='text-2xl font-bold mb-4'>Recent Activities</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul>
//               <li><strong>July 20:</strong> User John Doe updated property listing.</li>
//               <li><strong>July 22:</strong> Admin Sarah Smith approved new property addition.</li>
//               <li><strong>July 25:</strong> System update completed successfully.</li>
//             </ul>
//           </CardContent>
//         </Card>

//         <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
//           <CardHeader className="space-y-1">
//             <CardTitle className='text-2xl font-bold mb-4'>User Management</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>Manage and view details about users in the system.</p>
//             <ul>
//               <li><strong>Active Users:</strong> 1,200</li>
//               <li><strong>Inactive Users:</strong> 45</li>
//               <li><strong>Pending User Requests:</strong> 30</li>
//             </ul>
//           </CardContent>
//         </Card>

//         <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
//           <CardHeader className="space-y-1">
//             <CardTitle className='text-2xl font-bold mb-4'>System Alerts</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul>
//               <li><strong>Alert:</strong> System backup completed successfully.</li>
//               <li><strong>Warning:</strong> Server load is high. Investigate potential issues.</li>
//               <li><strong>Notification:</strong> New update available for system modules.</li>
//             </ul>
//           </CardContent>
//         </Card>

//         <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
//           <CardHeader className="space-y-1">
//             <CardTitle className='text-2xl font-bold mb-4'>Tasks Overview</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>Track and manage tasks and to-do lists for the administrative team.</p>
//             <ul>
//               <li><strong>Task 1:</strong> Review new property submissions.</li>
//               <li><strong>Task 2:</strong> Update user access permissions.</li>
//               <li><strong>Task 3:</strong> Prepare monthly performance report.</li>
//             </ul>
//           </CardContent>
//         </Card>

//         <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
//           <CardHeader className="space-y-1">
//             <CardTitle className='text-2xl font-bold mb-4'>Reports</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>Access various reports and analytics related to the real estate system.</p>
//             <ul>
//               <li><strong>Monthly Sales Report:</strong> Detailed analysis of sales data.</li>
//               <li><strong>Property Listing Report:</strong> Overview of new and updated listings.</li>
//               <li><strong>User Engagement Report:</strong> Insights into user interactions and engagement.</li>
//             </ul>
//           </CardContent>
//         </Card>

//       </div>
//     </main>
//   );
// };

// export default AdminDashboard;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard = () => {
  // Example data; replace with actual data from your state or props
  const totalUsers = 1245;
  const numberOfAgents = 120;
  const activeUsers = 1200;

  return (
    <main className='flex-grow p-6 dark:bg-slate-950 w-full h-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        
        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-bold'>{totalUsers}</p>
          </CardContent>
        </Card>

        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Number of Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-bold'>{numberOfAgents}</p>
          </CardContent>
        </Card>

        <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
          <CardHeader className="space-y-1">
            <CardTitle className='text-2xl font-bold mb-4'>Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-3xl font-bold'>{activeUsers}</p>
          </CardContent>
        </Card>

      </div>
    </main>
  );
};

export default AdminDashboard;
