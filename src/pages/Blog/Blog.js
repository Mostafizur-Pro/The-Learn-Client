import React from "react";

const Blog = () => {
  return (
    <div className="w-6/12 mx-auto text-left ">
      <div
        tabIndex={0}
        className="collapse  collapse-open border bg-inherit border-base-300  rounded-box"
      >
        <div className="collapse-title text-xl font-medium">What is cors?</div>
        <div className="collapse-content">
          <p>
            In <span className="text-green-500">ReactJS</span>, Cross-Origin
            Resource Sharing (CORS) refers to the method that allows you to make
            requests to the server deployed at a different domain. As a
            reference, if the frontend and backend are at two different domains,
            we need CORS there.{" "}
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse mt-5 collapse-open border bg-inherit border-base-300  rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="collapse-content">
          <p>
            Firebase{" "}
            <span className="font-bold">
              helps you develop high-quality apps, grow your user base, and earn
              more money.
            </span>{" "}
            Each feature works independently, and they work even better
            together.{" "}
          </p>
          <br />
          <p>
            Usually, authentication by a server entails the use of a user name
            and password. Other ways to authenticate can be through{" "}
            <span className="font-bold">
              cards, retina scans, voice recognition, and fingerprints.
            </span>
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse mt-5 collapse-open border bg-inherit border-base-300  rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does the private route work?
        </div>
        <div className="collapse-content">
          <p>
            The react private route component{" "}
            <span className="font-bold">
              renders child components ( children ) if the user is logged in
            </span>
            . If not logged in the user is redirected to the /login page with
            the return url passed in the location state property.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse mt-5 collapse-open border bg-inherit border-base-300  rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p>
            <strong>Node</strong> allows developers to write JavaScript code
            that runs directly in a computer process itself instead of in a
            browser.
          </p>
          <br />
          <p>
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
