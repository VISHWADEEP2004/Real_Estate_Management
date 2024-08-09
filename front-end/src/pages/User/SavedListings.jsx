// src/components/SavedListings.jsx
import React from 'react';

const SavedListings = () => {
  const savedListings = [
    // Sample saved listings
    { id: 1, name: 'Beachfront Villa', location: 'Goa', price: '$1,000,000' },
    { id: 2, name: 'City Loft', location: 'Mumbai', price: '$500,000' }
  ];

  return (
    <main className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Saved Listings</h1>
      <ul className='space-y-4'>
        {savedListings.map(listing => (
          <li key={listing.id} className='p-4 bg-white shadow rounded-lg'>
            <h2 className='text-xl font-semibold'>{listing.name}</h2>
            <p>Location: {listing.location}</p>
            <p>Price: {listing.price}</p>
            <button className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'>View Details</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default SavedListings;
