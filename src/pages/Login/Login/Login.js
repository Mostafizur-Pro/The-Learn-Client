import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { user, createGoogle, createGithub, signIn, setLoading } =
    useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // console.log("from", from);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("hiuser", user);
        form.reset();
        setSuccess("Success login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(
          "Please confirm your email and password. Please create account"
        );
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleGoogleSignIn = () => {
    // event.preventDefault();
    createGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  const handleGithubSignIn = () => {
    // event.preventDefault();
    createGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });

        // setUser(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero min-h-screen bg-inherit">
      <div className="hero-content flex-col ">
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold">Please Login Now !!!</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered bg-inherit"
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            {user?.displayName ? (
              <p className="text-green-400">{success}</p>
            ) : (
              <p className="text-red-400 font-bold">
                <Link to="/register">{loginError}</Link>
              </p>
            )}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <Link to="/register">
              <span className="text-lg text-orange-400">Create Account</span>
            </Link>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>
            <div className="form-control mt-3">
              <button
                onClick={handleGoogleSignIn}
                className="btn text-lg btn-outline btn-success capitalize"
              >
                <FaGoogle />
                <span className="ml-3">Sign in Google</span>
              </button>
            </div>
            <div className="form-control mt-3">
              <button
                onClick={handleGithubSignIn}
                className="btn text-lg btn-outline btn-light capitalize"
              >
                <FaGithub />
                <span className="ml-3">Sign in GitHub</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
