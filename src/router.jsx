import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import Register from './pages/Register/index.jsx'
import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },

  {
    path: "/Register",
    element: (
      <Register/>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)