import React, { useRef, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const nameInputRef = useRef();
  const photoUrlInputRef = useRef();

  const contactBtnHandler = async () => {
    if (
      nameInputRef.current.value.length <= 4 ||
      photoUrlInputRef.current.value.length === 0
    ) {
      alert("please fill the data!!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAi_zDvXq4IuDzKX_WmaHKicFr5Tg3xk8Y",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: props.token,
            displayName: nameInputRef.current.value,
            photoUrl: photoUrlInputRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setIsLoading(false);
      if (!response.ok) throw new Error(data.error.message);
      console.log(data);
      nameInputRef.current.value = "";
      photoUrlInputRef.current.value = "";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Form className="contact-form">
      <Row className="contact-heading ">
        <Col>
          <h2>Contact Details</h2>
        </Col>
        <Col>
          <Button variant="outline-danger">Cancel</Button>
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
      {isLoading && <p>Sending request...</p>}
    </Form>
  );
};

export default Contact;
