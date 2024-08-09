// src/components/Events.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Events = () => {
  // Sample events data
  const events = [
    { date: '2024-08-10', title: 'Property Expo', description: 'A showcase of new property listings.' },
    { date: '2024-08-15', title: 'Agent Training Session', description: 'Training for new agents on best practices.' },
    { date: '2024-08-20', title: 'Monthly Review Meeting', description: 'Review of monthly performance and metrics.' },
  ];

  return (
    <main className='flex-grow p-6 dark:bg-slate-950 w-full h-full'>
      <Card className='bg-white dark:bg-slate-950 p-4 rounded-lg shadow-md'>
        <CardHeader className="space-y-1">
          <CardTitle className='text-2xl font-bold mb-4'>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {events.map((event, index) => (
              <li key={index} className='mb-4'>
                <strong>{event.date}</strong>: {event.title} - {event.description}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
};

export default Events;
