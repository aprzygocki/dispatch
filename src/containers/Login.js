import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Logo from '../components/logo325p.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Row className="center">
        <img src={Logo}/>
      </Row>

      <Form onSubmit={handleSubmit}>
      <h3>Sign in</h3>
      <p>Hi there! Nice to see you again.</p>
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
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign In
        </Button>
        <br/>
        <p>or use one of your social profiles to login</p>
        
        <a class="btn btn-block btn-social btn-facebook">
          <span class="fa fa-facebook"></span> Sign in with Facebook
        </a>
        <a class="btn btn-block btn-social btn-google">
          <span class="fa fa-google"></span> Sign in with Google
        </a>
        <br/>
        <p><a href="">Forgot password?</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Sign Up</a></p>
        
        
      </Form>
      
    </div>
  );
}
// export default HomePage;