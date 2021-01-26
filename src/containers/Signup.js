import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signup.css";
import Logo from '../components/login_logo325.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Checkbox from '../components/Checkbox';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Signup">
      <br/>
      <Form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <br/>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </Form.Group>
           <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </Form.Group>

          <Checkbox/>

          <br/>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
          Continue
          </Button>
            {/* <br/>
          <p>or use one of your social profiles to login</p>
        
          <a class="btn btn-block btn-social btn-facebook">
          <span class="fa fa-facebook"></span> Sign in with Facebook
          </a>
          <a class="btn btn-block btn-social btn-google">
          <span class="fa fa-google"></span> Sign in with Google
          </a> */}
          <br/>
          <p>Have an Account?&nbsp;&nbsp;&nbsp;<a href="/login">Sign In</a></p>
        
      </Form>
      
    </div>
  );
}