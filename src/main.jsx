import ReactDOM from "react-dom/client";

import "./App.css";

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from "./App.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import Example from "./components/ProjectsCarousel.jsx";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'example',
        element: <Example />
      }
    ]
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
