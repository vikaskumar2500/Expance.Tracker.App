import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import "./EmailVerification.css";
import { Form, Button } from "react-bootstrap";
import { UserAuth } from "../auth-context/AuthContext";
import { isSignInWithEmailLink } from "firebase/auth";

const EmailVerification = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const { emailVerify, user } = UserAuth();

  const history = useHistory();

  const emailVerificationHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await emailVerify(user);
      console.log(isSignInWithEmailLink);
      history.push('/login');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert(err.message);
    }
  };

  const cancelButtonHandler = () => {
    history.push("/signup");
  };

  return (
    <Form className="signup" onSubmit={emailVerificationHandler}>
      <Form.Group className="mb-3 ">
        <div className="adjustment">
          <Form.Label>Email</Form.Label>
          <Button
            variant="light"
            className="cancelBtn"
            onClick={cancelButtonHandler}
          >
            X
          </Button>
        </div>
        <Form.Control
          type="email"
          placeholder="Enter email"
          defaultValue={props.email}
          disabled
        />
      </Form.Group>
      {!isLoading && (
        <Button variant="primary" type="submit">
          Verify Your Email
        </Button>
      )}
      {isLoading && <p>Sending request...</p>}
    </Form>
  );
};

export default EmailVerification;
