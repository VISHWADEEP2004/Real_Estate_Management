// src/components/Analytics.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

const Analytics = () => {
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'darkviolet',
        borderColor: 'lightviolet',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
  };

  return (
    <main className='flex-grow p-6 dark:bg-slate-950 w-full h-full'>
      <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
        <CardHeader className="space-y-1">
          <CardTitle className='text-2xl font-bold mb-4'>Analytics Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar data={data} options={options} />
        </CardContent>
      </Card>
    </main>
  );
};

export default Analytics;
