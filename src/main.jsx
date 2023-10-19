import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";

import Headphones from "./pages/Headphones.jsx";
import Speakers from "./pages/Speakers.jsx";
import Earphones from "./pages/Earphones.jsx";
import Layout from "./ui/Layout.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContext } from "./context/MainContext.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/headphones",
        element: <Headphones />,
      },

      {
        path: "/speakers",
        element: <Speakers />,
      },

      { path: "/earphones", element: <Earphones /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <MainContext>
        <RouterProvider router={router} />
      </MainContext>
    </>
  </React.StrictMode>
);
