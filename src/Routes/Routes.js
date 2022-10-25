import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login/Login";

import Register from "../pages/Login/Register/Register";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Courses></Courses>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
