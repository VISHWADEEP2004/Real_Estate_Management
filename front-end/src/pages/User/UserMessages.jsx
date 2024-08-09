// src/components/UserMessages.jsx
import React from 'react';

const UserMessages = () => {
  const messages = [
    // Sample messages
    { id: 1, from: 'Agent Smith', subject: 'Property Inquiry', body: 'Please call me regarding the property.' },
    { id: 2, from: 'John Doe', subject: 'Request for a Viewing', body: 'I would like to schedule a viewing for this weekend.' }
  ];

  return (
    <main className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Messages</h1>
      <ul className='space-y-4'>
        {messages.map(message => (
          <li key={message.id} className='p-4 bg-white shadow rounded-lg'>
            <h2 className='text-xl font-semibold'>{message.subject}</h2>
            <p><strong>From:</strong> {message.from}</p>
            <p>{message.body}</p>
            <button className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'>Reply</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UserMessages;
