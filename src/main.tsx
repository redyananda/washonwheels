import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Teams from "./pages/Teams";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/teams",
    element: <Teams />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/blogs/:objectId",
    element: <BlogDetail />
  },

]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
