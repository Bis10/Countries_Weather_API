import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from "react-router-bootstrap";
import { auth, logout } from "../auth/firebase";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <Navbar style={{ marginBottom: "1rem", backgroundColor: "#d0e5ff" }}>
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
            {!user ? (
              <>
                <LinkContainer to="/register">
                  <Nav.Link className="fw-bold">Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link className="fw-bold">Login</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <Button
                  onClick={logout}
                  className="fw-bold"
                  style={{
                    color: "black",
                    backgroundColor: "#d0e5ff",
                    border: "none",
                  }}
                >
                  Logout
                </Button>
                <div
                  style={{ marginLeft: "50rem", marginTop: "0.5rem" }}
                  className="text-success"
                >
                  Welcome, {user.email.split("@")[0]}
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
