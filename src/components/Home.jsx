import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Accordion,
} from "react-bootstrap";
import globeImage from "../assets/globe.jpg"; // Adjust the path according to your structure
import weather from "../assets/weather.avif";
import languages from "../assets/languages.webp";
import flags from "../assets/flags.jpg";

const Home = () => {
  return (
    <Container className="mt-5">
      {/* Heading Section */}
      <h1 className="text-center" style={{ opacity: 0.85 }}>
        WELCOME TO THE WORLD
      </h1>
      <p className="text-center">
        Explore information about countries around the world with ease!
      </p>

      {/* Globe Image Section */}
      <div className="text-center mb-4">
        <img
          src={globeImage} // Use the imported local image
          alt="Globe"
          style={{
            width: "350px",
            height: "350px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Features Section */}
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                "Discover new horizons, one country at a time!"
              </Card.Title>

              <Row className="text-center">
                {/* User Registration Card */}
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Img
                      variant="top"
                      src={flags}
                      alt="flags"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>Flags</Card.Title>
                      <Card.Text>
                        "Wave your pride, discover the world through its flags!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Login Card */}
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Img
                      variant="top"
                      src={languages}
                      alt="languages"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>Languages</Card.Title>
                      <Card.Text>
                        "Language: The Bridge to Global Understanding!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Countries Information Card */}
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Img
                      variant="top"
                      src={weather} // Example image for countries
                      alt="weather"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>Weather</Card.Title>
                      <Card.Text>
                        "Chase the Sun in Finland, Dance in the Rain in Brazil!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Accordion for Additional Information */}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Explore Features</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Register:</strong> Register with your name & email.
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Log In:</strong> Log in with email & password.
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Countries:</strong> Once logged in, you can see
                        comprehensive data about countries, including
                        population, currency, official languages, and more.
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Favorite Countries:</strong> You can add countries to your favorites list and manage them
                        easily.
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call to Action Section */}
      <h2 className="text-center">Start Exploring Today!</h2>
      <p className="text-center">
        Whether you're planning a trip or just curious about different cultures,
        the Countries App makes it easy to find the information you need.
      </p>

      {/* Footer Section */}
      <footer
        className="mt-5 p-3 text-center"
        style={{ backgroundColor: "#F0FFFF", borderTop: "1px solid #e9ecef" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Countries App. All rights reserved.
        </p>
      </footer>
    </Container>
  );
};

export default Home;
