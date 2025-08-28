import React from 'react'
import "./app.scss";
import Home from './pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Register from './pages/registers';
import SpacePage from './pages/space-page';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Create-Account",
      element: <Register />,
    },
    {
      path: "/Space-Page",
      element: <SpacePage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
