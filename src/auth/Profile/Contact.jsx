import React, { useEffect, useRef, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Contact.css";
import { UserAuth } from "../../auth-context/AuthContext";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebaseConfig";

const Contact = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({ displayName: "", photoUrl: "" });
  const [profileComplete, setProfileComplete] = useState(false);

  const { updateUser, user } = UserAuth();
  const history = useHistory();

  const nameInputRef = useRef();
  const photoUrlInputRef = useRef();

  const contactBtnHandler = () => {
    let displayName = nameInputRef.current.value;
    let photoUrl = photoUrlInputRef.current.value;
    if (displayName.length <= 4 || photoUrl.length === 0) {
      alert("please fill the data!!");
      return;
    }

    setIsLoading(true);
    updateUser(user, displayName, photoUrl)
      .then((credential) => {
        setIsLoading(false);
        console.log("Updated successful");
        setProfileComplete(true);

        nameInputRef.current.value = "";
        photoUrlInputRef.current.value = "";
      })
      .catch((error) => {
        alert(error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (auth.currentUser) {
      const displayName = auth.currentUser.displayName;
      const photoUrl = auth.currentUser.photoURL;
      setDetails(() => ({
        displayName: displayName,
        photoUrl: photoUrl,
      }));
      if(details.displayName && details.photoUrl) setProfileComplete(true);
    }
  }, []);

  const editBtnHandler = () => {
    if (auth.currentUser) {
      const displayName = auth.currentUser.displayName;
      const photoUrl = auth.currentUser.photoURL;
      setDetails(() => ({
        displayName: displayName,
        photoUrl: photoUrl,
      }));
    }
    nameInputRef.current.value = details.displayName;
    photoUrlInputRef.current.value = details.photoUrl;
  };

  return (
    <React.Fragment>
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
      <Form className="contact-form">
        <Row className="contact-heading ">
          <Col>
            <h2>Contact Details</h2>
          </Col>
          <Col>
            <Button
              variant="outline-danger"
              onClick={() => {
                history.push("/profile");
              }}
            >
              Cancel
            </Button>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Full name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              ref={nameInputRef}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridUrl">
            <Form.Label>Profile Photo URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter Url"
              ref={photoUrlInputRef}
              required
            />
          </Form.Group>
        </Row>
        {!isLoading && (
          <Button variant="danger" onClick={contactBtnHandler}>
            Update
          </Button>
        )}
        {!isLoading && (
          <Button variant="danger" onClick={editBtnHandler}>
            Edit
          </Button>
        )}
        {isLoading && <p>Sending request...</p>}
      </Form>
    </React.Fragment>
  );
};

export default Contact;
