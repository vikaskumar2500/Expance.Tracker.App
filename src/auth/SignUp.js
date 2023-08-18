import React, { useRef, useState } from "react";
import "./SignUp.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Dummy from "../components/Dummy/Dummy";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [login, setLogin] = useState(false);
  const [hide, setHide] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLogin) {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAi_zDvXq4IuDzKX_WmaHKicFr5Tg3xk8Y",
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
        setLogin(true);
        console.log("User logged in seccessfully");

        // reseting data
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
      } catch (error) {
        setIsLoading(false);
        setLogin(false);
        alert(error.message);
      }
    } else {
      setLogin(false);
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
          console.log("User has successfully signed up");

          emailInputRef.current.value = "";
          passwordInputRef.current.value = "";
          confirmPasswordInputRef.current.value = "";
        } catch (error) {
          setIsLoading(false);
          alert(error.message);
        }
      }
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

  return (
    <div className="hidden">
      {!login && <div className="container">
        <Form className="signup" onSubmit={formSubmitHandler}>
          <h2>{isLogin ? "Login" : "Signup"} </h2>
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
          {!isLogin && (
            <Form.Group className="mb-3">
              <Form.Label htmlFor="confirm-password">
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                id="confirm-password"
                placeholder="Enter confirm password"
                ref={confirmPasswordInputRef}
                required
              />
            </Form.Group>
          )}
          {!isLoading && (
            <Button type="submit" className="signup-btn">
              {isLogin ? "Login" : "Sign up"}
            </Button>
          )}
          {isLoading && <p>Sending request...</p>}
          {isLogin && (
            <NavLink
              to="/forgot-password"
              style={{ marginLeft: "60px", fontSize: "1.1rem" }}
            >
              Forgot password
            </NavLink>
          )}
        </Form>
        <Button
          variant="light"
          type="button"
          className="login"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          {isLogin ? "Don't have an account?Sign up" : "Have an account?Login"}
        </Button>
      </div>}
      {login && <Dummy/>}
    </div>
  );
};

export default SignUp;
