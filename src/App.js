import React from 'react';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail'; 

import './App.css';
console.log('ProductDetail =', ProductDetail);

const AppLayout = () => (
  <div className="App">
    <Outlet />
  </div>
);


const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'products',
        element: <ProductList />,
      },
      {
        path: 'product/:id',
        element: <ProductDetail />,
      },
    ],
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;