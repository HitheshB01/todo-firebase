import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
   <>
    <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 px-6 shadow-md flex justify-between items-center">
      <h1 className="text-3xl font-bold">Todo App</h1>
      <div className="space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 font-medium text-blue-500 bg-white rounded-md hover:bg-gray-200 transition duration-300">
            Log In
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-2 font-medium text-blue-500 bg-white rounded-md hover:bg-gray-200 transition duration-300">
            Sign Up
          </button>
        </Link>
      </div>
     
    </header>
    <Outlet/>
    
    </>
  );
};

export default Header;
