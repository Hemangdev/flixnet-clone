
import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Server Error</h1>
        <p className="text-white">Cannot get data from the Movie Database API</p>
      </div>
    </div>
  );
};

export default ErrorPage;
