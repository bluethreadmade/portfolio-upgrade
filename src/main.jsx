import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./App.css";

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

// Bringing in the pages the router will use to conditionally show the appropriate views

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
