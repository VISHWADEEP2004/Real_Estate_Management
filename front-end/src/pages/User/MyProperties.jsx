// src/components/MyProperties.jsx
import React from 'react';

const MyProperties = () => {
  const properties = [
    // Sample properties
    { id: 1, name: 'Cozy Cottage', location: 'Chennai', price: '$250,000' },
    { id: 2, name: 'Modern Apartment', location: 'Bangalore', price: '$300,000' }
  ];

  return (
    <main className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>My Properties</h1>
      <ul className='space-y-4'>
        {properties.map(property => (
          <li key={property.id} className='p-4 bg-white shadow rounded-lg'>
            <h2 className='text-xl font-semibold'>{property.name}</h2>
            <p>Location: {property.location}</p>
            <p>Price: {property.price}</p>
            <button className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'>Edit</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MyProperties;
