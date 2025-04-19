import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-950 to-blue-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tight hover:text-blue-400 transition-colors flex items-center"
          >
            <span className="text-blue-400">RADIANT</span>
            <span className="ml-1">STORE</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;