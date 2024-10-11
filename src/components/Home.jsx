import React from "react";
import { Container, Row, Col, Card, ListGroup, Accordion } from "react-bootstrap";
import globeImage from "../assets/globe.jpg"; // Adjust the path according to your structure
import registration from "../assets/registration.jpg";
import login from "../assets/login.webp";

const Home = () => {
  return (
    <Container className="mt-5">
      <h1
        className="text-center"
        style={{
          opacity: 0.75,
        }}
      >
        Welcome to the Countries App
      </h1>
      <p className="text-center">
        Explore information about countries around the world with ease!
      </p>

      {/* Local Globe Image */}
      <div className="text-center mb-4">
        <img
          src={globeImage} // Use the imported local image
          alt="Globe"
          style={{ width: "400px", height: "400px" }} // Image styling
        />
      </div>

      <Row className="mb-4">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">ONE STEP AT ONCE</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>User Registration:</strong> Create an account to
                  access personalized features and save your favorite countries.
                  <div className="text-center mb-4">
                    <img
                      src={registration} // Use the imported local image
                      alt="registration"
                      style={{ width: "150px", height: "150px" }} // Image styling
                    />
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Log In:</strong> Log in using email and password
                </ListGroup.Item>
                <div className="text-center mb-4">
                  <img
                    src={login} // Use the imported local image
                    alt="login"
                    style={{ width: "150px", height: "150px" }} // Image styling
                  />
                </div>
                <ListGroup.Item>
                  <strong>Countries:</strong> See the detail information of the
                  countries
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Favorite Countries:</strong> Once logged in, easily
                  add countries to your favorites and manage your list.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="text-center">Start Exploring Today!</h2>
      <p className="text-center">
        Whether you're planning a trip or just curious about different cultures,
        the Countries App makes it easy to find the information you need.
      </p>
      <footer
        className="mt-5 p-3 text-center"
        style={{ backgroundColor: "#f8f9fa", borderTop: "1px solid #e9ecef" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Countries App. All rights reserved.
        </p>
      </footer>
    </Container>
  );
};

export default Home;
