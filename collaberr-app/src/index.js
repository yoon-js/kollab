import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { RootRouter } from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
  <RouterProvider router={RootRouter} />
);