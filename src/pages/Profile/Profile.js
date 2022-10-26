import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  // const {displayName, email,photoURL, phoneNumber } = user;
  console.log("hi", user);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl mb-3 font-bold">
              Name: {user.displayName}
            </h1>
            <h1 className="text-3xl mb-3 font-sm">Email : {user.email}</h1>
            <h1 className="text-3xl mb-3 font-sm">
              Phone Number : {user.phoneNumber}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
