// src/components/SearchMap.jsx
import React from 'react';

const SearchMap = () => {
  return (
    <main className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Search Map</h1>
      <div className='h-96 bg-gray-200 rounded-lg'>
        {/* Integrate a map library here, e.g., Google Maps or Leaflet */}
        <p className='text-center pt-40'>Map will be displayed here.</p>
      </div>
    </main>
  );
};

export default SearchMap;
