import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">
          🚀 Rick and Morty - Fan Service Beta Version 1.1.0
        </h1>
        <p>some text</p>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
