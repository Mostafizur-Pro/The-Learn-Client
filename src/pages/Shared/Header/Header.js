import React, { useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import "./Header.css";

import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout, setTheme, theme } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleLogOut = () => {
    logout()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-ghost-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Courses</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {/* <li>
                <Link to="/login">Login</Link>
              </li> */}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            The Learn
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-bold">
            <li>
              <Link to="/">Courses</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <>
            {user?.uid ? (
              <>
                <span className="text-2xl sm:block hidden">
                  {user?.displayName}
                </span>
                <div className="dropdown dropdown-end bg-inherit">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-inherit rounded-box w-52"
                  >
                    <li>
                      <Link to="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <button variant="light" onClick={handleLogOut}>
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link className="btn btn-dark" to="/login">
                  Login
                </Link>
              </>
            )}
          </>
        </div>
        <input onClick={toggleTheme} type="checkbox" className="toggle" />
        {/* <button variant="light" onClick={handleLogOut}>
          Log out O
        </button> */}
      </div>
    </div>
  );
};

export default Header;
