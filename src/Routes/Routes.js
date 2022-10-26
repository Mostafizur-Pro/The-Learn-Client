import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import Course from "../pages/Courses/Course";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";

import Login from "../pages/Login/Login/Login";

import Register from "../pages/Login/Register/Register";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/categories"),
      },
      {
        path: "/course/:id",
        element: (
          <PrivateRoute>
            <Course></Course>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/training/${params.id}`),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
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
  {
    path: "*",
    element: (
      <div className="font-bold text-3xl text-center ">
        File not found: 404
        <h1>
          Please{" "}
          <Link className="text-red-400" to="/">
            Click Me!!
          </Link>
        </h1>
      </div>
    ),
  },
]);
