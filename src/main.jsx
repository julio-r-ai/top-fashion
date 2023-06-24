import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './routes/home.jsx';
import Client from './routes/Client.jsx';
import Rents from './routes/Rents.jsx';
import Product from './routes/Product.jsx';
import Configuratin from './routes/Configuration.jsx'
import ErrorPage from './routes/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "client",
        element: <Client />,
      },
      {
        path: "rents",
        element: <Rents />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "configuration",
        element: <Configuratin />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
