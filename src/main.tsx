/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

import Home from "./routes/Home.tsx";
import Repositorios from "./routes/Repositorios.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/repos/:name", element: <Repositorios /> },
    ],
  },
]);

function AppWrapper() {
  // const { name } = useParams();

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<AppWrapper />);
