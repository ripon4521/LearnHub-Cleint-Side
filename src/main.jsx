import React from 'react'
import ReactDOM from 'react-dom/client'
const queryClient = new QueryClient();

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import { router } from './Route/Router.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />

    </QueryClientProvider>
    
  </React.StrictMode>,
)
