import React from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";

const Profile = (props) => {
  return (
    <div className="dummy">
      <p>Welcome to Expense Tracker!!!</p>
      <p className="about-profile">
        Your profile is incomplete.
        <NavLink to="/profile/profile-updatation">complete now</NavLink>
      </p>
    </div>
  );
};

export default Profile;
