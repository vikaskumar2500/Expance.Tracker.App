import React, { useRef, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import "./SignUp.css";
import { UserAuth } from "../auth-context/AuthContext";
import { NavLink, useHistory } from "react-router-dom";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const [confirmHide, setConfirmHide] = useState(false);

  const history = useHistory();

  const {
    createUser,
    isSignupHandler,
    tokenHandler,
    emailVerify,
    emailVerified,
    user,
  } = UserAuth();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    try {
      createUser(email, password)
        .then((credential) => {
          // console.log(credential._tokenResponse.idToken);
          setIsLoading(false);
          tokenHandler(credential._tokenResponse.idToken);
          console.log(emailVerified);
          if (emailVerified !== undefined || !emailVerified) {
            emailVerify(user)
              .then((credential) => {
                alert("Verification mail sent to the your email account");
                console.log(credential);
                history.push("/login");
              })
              .catch((error) => alert(error.message));
          } else history.push("/login");
        })
        .catch((error) => {
          alert(error.message);
          setIsLoading(false);
        });

      isSignupHandler(true);

      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
      confirmPasswordInputRef.current.value = "";
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  const hideButtonHandler = () => {
    if (passwordInputRef.current.value.length !== 0) {
      passwordInputRef.current.type = hide ? "password" : "text";
      setHide((prev) => !prev);
    } else {
      setHide(false);
    }
  };

  const confirmHideButtonHandler = () => {
    if (confirmPasswordInputRef.current.value.length !== 0) {
      confirmPasswordInputRef.current.type = confirmHide ? "password" : "text";
      setConfirmHide((prev) => !prev);
    } else {
      setConfirmHide(false);
    }
  };

  return (
    <div className="container">
      <Form className="signup" onSubmit={formSubmitHandler}>
        <h2>Signup</h2>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailInputRef}
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label htmlFor="password">Password</Form.Label>
          <InputGroup>
            <Form.Control
              type="password"
              id="password"
              placeholder="Enter password"
              ref={passwordInputRef}
              required
            />
            <InputGroup.Text className="input-text">
              <Button variant="light" onClick={hideButtonHandler}>
                {!hide && <img src="./assets/hide.png" alt="not found" />}
                {hide && <img src="./assets/visible.png" alt="not found" />}
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="confirm-password">Confirm Password</Form.Label>
          <InputGroup>
            <Form.Control
              type="password"
              id="confirm-password"
              placeholder="Enter confirm password"
              ref={confirmPasswordInputRef}
              required
            />
            <InputGroup.Text className="input-text">
              <Button variant="light" onClick={confirmHideButtonHandler}>
                {!confirmHide && (
                  <img src="./assets/hide.png" alt="not found" />
                )}
                {confirmHide && (
                  <img src="./assets/visible.png" alt="not found" />
                )}
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        {!isLoading && (
          <Button type="submit" className="signup-btn">
            Sign up
          </Button>
        )}
        {isLoading && <p>Sending request...</p>}
      </Form>
      <p className="create-account">
        Don't have an account? <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
};

export default SignUp;
