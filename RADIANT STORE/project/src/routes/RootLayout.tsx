import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-950">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;