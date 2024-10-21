import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Accordion,
} from "react-bootstrap";
import "../css/home.css";
import globeImage from "../assets/globe.jpg"; // Adjust the path according to your structure
import weather from "../assets/weather.avif";
import languages from "../assets/languages.webp";
import flags from "../assets/flags.jpg";
import registerImage from "../assets/registration.jpg"; // Add your register image path
import loginImage from "../assets/login.webp"; // Add your login image path
import countriesImage from "../assets/countries.webp"; // Add your countries image path
import favoritesImage from "../assets/favourites.png"; // Add your favorites image path

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
                      <Card.Text style={{ fontSize: "1.2rem" }}>
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
                      <Card.Text style={{ fontSize: "1.2rem" }}>
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
                      <Card.Text style={{ fontSize: "1.2rem" }}>
                        "Chase the Sun in Finland, Dance in the Rain in Brazil!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Accordion for Additional Information */}
              <Accordion defaultActiveKey="1" className="mt-4">
                <div className="custom-accordion">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="explore-header">Explore Features</div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Row className="text-center">
                        {/* Feature Cards Inside Accordion */}
                        <Col md={3}>
                          <Card className="mb-4">
                            <Card.Img
                              variant="top"
                              src={registerImage} // Image for register
                              alt="Register"
                              style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                              }}
                            />
                            <Card.Body>
                              <Card.Title>Register</Card.Title>
                              <Card.Text
                                style={{
                                  color: "#003366",
                                  fontStyle: "italic",
                                }}
                              >
                                "Register with your name & email to create an
                                account."
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>

                        <Col md={3}>
                          <Card className="mb-4">
                            <Card.Img
                              variant="top"
                              src={loginImage} // Image for login
                              alt="Log In"
                              style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                              }}
                            />
                            <Card.Body>
                              <Card.Title>Log In</Card.Title>
                              <Card.Text
                                style={{
                                  color: "#003366",
                                  fontStyle: "italic",
                                }}
                              >
                                "Log in with your email & password to access
                                your account."
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>

                        <Col md={3}>
                          <Card className="mb-4">
                            <Card.Img
                              variant="top"
                              src={countriesImage} // Image for countries
                              alt="Countries"
                              style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                              }}
                            />
                            <Card.Body>
                              <Card.Title>Countries</Card.Title>
                              <Card.Text
                                style={{
                                  color: "#003366",
                                  fontStyle: "italic",
                                }}
                              >
                                "Explore comprehensive data about countries."
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>

                        <Col md={3}>
                          <Card className="mb-4">
                            <Card.Img
                              variant="top"
                              src={favoritesImage} // Image for favorites
                              alt="Favorite Countries"
                              style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                              }}
                            />
                            <Card.Body>
                              <Card.Title>Favorite Countries</Card.Title>
                              <Card.Text
                                style={{
                                  color: "#003366",
                                  fontStyle: "italic",
                                }}
                              >
                                "Easily manage your list of favorite countries."
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
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
    </Container>
  );
};

export default Home;
