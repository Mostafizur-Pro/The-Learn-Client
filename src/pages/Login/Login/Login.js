import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { createGoogle, createGithub, signIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    createGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleGithubSignIn = (event) => {
    event.preventDefault();
    createGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
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
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
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
