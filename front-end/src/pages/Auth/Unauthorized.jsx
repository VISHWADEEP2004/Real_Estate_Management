import React from 'react';

const Unauthorized = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl">Unauthorized Access</h1>
      <p className="text-xl">You do not have permission to view this page.</p>
    </div>
  );
};

export default Unauthorized;
