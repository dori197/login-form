import React from 'react'
import "./app.scss";
import Home from './pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Register from './pages/registers';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/createAccount",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
