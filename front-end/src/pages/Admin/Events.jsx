// src/components/Events.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaCalendarAlt, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';

const Events = () => {
  // Sample events data with more details
  const events = [
    {
      date: '2024-08-10',
      title: 'Property Expo',
      description: 'A showcase of new property listings.',
      location: 'Convention Center, Downtown',
      time: '10:00 AM - 5:00 PM',
    },
    {
      date: '2024-08-15',
      title: 'Agent Training Session',
      description: 'Training for new agents on best practices.',
      location: 'Training Room, Office HQ',
      time: '1:00 PM - 3:00 PM',
    },
    {
      date: '2024-08-20',
      title: 'Monthly Review Meeting',
      description: 'Review of monthly performance and metrics.',
      location: 'Meeting Room B, Office HQ',
      time: '4:00 PM - 6:00 PM',
    },
    // Additional events
    {
      date: '2024-09-05',
      title: 'Networking Mixer',
      description: 'An evening of networking with industry professionals.',
      location: 'Rooftop Bar, City Center',
      time: '6:00 PM - 9:00 PM',
    },
    {
      date: '2024-09-10',
      title: 'Market Trends Seminar',
      description: 'A seminar on the latest market trends and predictions.',
      location: 'Conference Hall, Downtown',
      time: '9:00 AM - 12:00 PM',
    },
  ];

  return (
    <main className='flex-grow p-6 dark:bg-slate-950 w-full h-full'>
      <Card className='bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg'>
        <CardHeader className="mb-4">
          <CardTitle className='text-3xl font-extrabold text-gray-900 dark:text-white'>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='space-y-4'>
            {events.map((event, index) => (
              <li key={index} className='bg-gray-50 dark:bg-slate-800 p-5 rounded-lg shadow-md flex flex-col'>
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0'>
                    <FaCalendarAlt className='text-2xl text-blue-500 dark:text-blue-400' />
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between'>
                      <span className='text-lg font-semibold text-gray-800 dark:text-gray-200'>{event.date}</span>
                      <span className='text-sm text-gray-600 dark:text-gray-400'>{event.title}</span>
                    </div>
                    <p className='mt-1 text-gray-700 dark:text-gray-300'>{event.description}</p>
                    <div className='mt-2 flex items-center space-x-2 text-gray-600 dark:text-gray-400'>
                      <FaMapMarkerAlt className='text-sm' />
                      <span>{event.location}</span>
                    </div>
                    <div className='mt-1 flex items-center space-x-2 text-gray-600 dark:text-gray-400'>
                      <FaRegClock className='text-sm' />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
};

export default Events;
