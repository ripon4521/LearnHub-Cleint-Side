import React from 'react'
import ReactDOM from 'react-dom/client'
const queryClient = new QueryClient();

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import { router } from './Route/Router.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from './providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
   <QueryClientProvider client={queryClient}>
   <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
    </QueryClientProvider>
 
    
  </React.StrictMode>,
)
