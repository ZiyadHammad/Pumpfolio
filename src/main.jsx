import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

// Styling
import "./global.css";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'exercises/:id',
        element: <ExerciseDetail />
      }
    ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
