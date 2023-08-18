import React, { useRef, useState } from "react";
import "./SignUp.css";
import { Button, Form, InputGroup } from "react-bootstrap";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setConfirmPassword(confirmPasswordInputRef.current.value);
    if (passwordInputRef.current.value !== confirmPassword)
      alert("password doesn't match");
    else {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAi_zDvXq4IuDzKX_WmaHKicFr5Tg3xk8Y",
          {
            method: "POST",
            body: JSON.stringify({
              email: emailInputRef.current.value,
              password: passwordInputRef.current.value,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message);
        setIsLoading(false);
        console.log('User has successfully signed up');
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        confirmPasswordInputRef.current.value="";
      } catch (error) {
        setIsLoading(false);
        alert(error.message);
      }
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
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="Enter password"
            ref={passwordInputRef}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="confirm-password">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            id="confirm-password"
            placeholder="Enter confirm password"
            ref={confirmPasswordInputRef}
            required
          />
        </Form.Group>
        {!isLoading && (
          <Button type="submit" className="signup-btn">
            Sign up
          </Button>
        )}
        {isLoading && <p>Sending request...</p>}
      </Form>
      <Button variant="light" type="button" className="login">
        Have an account?Login
      </Button>
    </div>
  );
};

export default SignUp;
