import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'produtos',
        element: <ProductsPage />,
      },
      {
        path: 'produtos/:slug',
        element: <ProductDetailPage />,
      },
      {
        path: 'carrinho',
        element: <CartPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      // Add more routes as needed
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;