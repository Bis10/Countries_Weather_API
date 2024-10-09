import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import { auth, logout } from "../auth/firebase";

const Layout = () => {
  const [user] = useAuthState(auth);
  return (
    <Container fluid>
      <Row>
        <Navbar
          style={{
            marginBottom: "1rem",
          }}
          bg="light"
          variant="light"
        >
          <Container className="justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link className="fw-bold">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/countries">
                  <Nav.Link className="fw-bold">Countries</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favourites">
                  <Nav.Link className="fw-bold">Favourites</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link className="fw-bold">Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link className="fw-bold">Login</Nav.Link>
                </LinkContainer>
                {user && (
                  <Button onClick={logout} className="fw-bold">
                    Logout
                  </Button>
                )}
                <div
                  style={{
                    marginLeft: "35rem",
                    marginTop: "0.5rem",
                  }}
                  className="text-success"
                >
                  Hello, {user?.email}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Outlet />
      </Row>
    </Container>
  );
};

export default Layout;
