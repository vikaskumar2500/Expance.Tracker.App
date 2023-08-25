import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { Form, InputGroup, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { auth } from "../firebaseConfig";
import { UserAuth } from "../auth-context/AuthContext";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";



const Login = (props) => {
  const [hide, setHide] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { loginUser, tokenHandler } = UserAuth();
  const history = useHistory();
  const auth = getAuth();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(()=> {
    console.log(auth.currentUser?.emailVerified);

  }, [auth]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    setIsLoading(true);
    loginUser(email, password)
      .then((credential) => {
        console.log(credential);
        setIsLoading(false);
        tokenHandler(credential._tokenResponse.idToken);
        history.push("/profile");
        
        // reseting data
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
        setIsLoading(false);
      });
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
      <Form className="signup" onSubmit={formSubmitHandler}>
        <h2>Login</h2>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
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

          {!isLoading && (
            <Button type="submit" className="signup-btn">
              Login
            </Button>
          )}
          {isLoading && <p>Sending request...</p>}
        </Form.Group>
      </Form>
      <p className="create-account">
        Don't have an account? <NavLink to="/signup">Sign up</NavLink>
      </p>
    </div>
  );
};

export default Login;
