import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, loginWithEmailAndPassword } from "../auth/firebase";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to home if logged in
    }
  }, [user, navigate]);

  const handleLogin = () => {
    loginWithEmailAndPassword(email, password);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={handleLogin}
              size="sm"
              className="w-100 mt-3"
              style={{
                padding: "0.25rem 0.5rem", // Custom padding for smaller button
                fontSize: "0.875rem", // Smaller font size
                borderRadius: "4px", // Custom border radius
              }}
            >
              Login
            </Button>
          </Form>

          {/* Redirect to Register if user doesn't have an account */}
          {!user && (
            <div className="mt-3 text-center">
              <Button variant="link" onClick={() => navigate("/register")}>
                Don't have an account? Register
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
