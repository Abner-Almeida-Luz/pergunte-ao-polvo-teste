import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Portifolio from './portifolio.jsx';
import Polvo from './polvo.jsx';
import { Outlet } from "react-router";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/portifolio",
    element: <Portifolio/>,
  },
  {
    path: "/polvo",
    element: <Polvo/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <Outlet />
  </StrictMode>
)
