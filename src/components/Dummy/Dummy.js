import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Dummy.css";
import Contact from "./Contact";

const Dummy = (props) => {
  const [isComplete, setIsComplete] = useState(false);
  const [profileComplete, setProfileComplete] = useState(false);

  const dummyBtnHandler = () => {
    setIsComplete(true);
  };
  const profileHandler = (isTrue) => {
    setProfileComplete(true);
  };

  return (
    <React.Fragment>
      {!isComplete && (
        <div className="dummy">
          <p>Welcome to Expense Tracker!!!</p>
          <p className="about-profile">
            Your profile is incomplete.
            <Button variant="light" onClick={dummyBtnHandler}>
              complete now
            </Button>
          </p>
        </div>
      )}
      {isComplete && (
        <div className="contact-details">
          <div className="dummy">
            <p>Winners never quite, Quitters never win.</p>
            <p className="about-profile">
              Your profile is{" "}
              <span style={{ fontWeight: "bold" }}>
                {profileComplete ? "100%" : "0%"}
              </span>
              completed. A complete Profile has higher chances of landing a job.
              <Button variant="light">
                {profileComplete ? "completed" : "complete now"}
              </Button>
            </p>
          </div>
          <Contact token={props.token} onContact={profileHandler} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Dummy;
