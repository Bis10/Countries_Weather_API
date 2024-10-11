import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Row,
  Spinner,
  Card,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const CountrySingle = (props) => {
  const location = useLocation();
  const country = props.country || location.state.country;
  const [weather, setWeather] = useState("");
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          country.capital
        }&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      )
      .catch((error) => {
        console.log(error);
      })
      .then((response) => {
        setWeather(response?.data);
        setIsWeatherLoading(false);
      });
  }, [country.capital]);

  console.log("Weather: ", weather);

  if (isWeatherLoading) {
    return (
      <Container className="text-center m-5">
        <Spinner
          animation="border"
          role="status"
          variant="info"
          className="my-5"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        {/* Country Flag and Basic Info */}
        <Col md={4} className="text-center">
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src={country.flags.svg}
              alt="Country Flag"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title>Country Name: {country.name.common}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <strong>Capital: </strong>
                {country.capital}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <strong>Region: </strong>
                {country.region}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <strong>Subregion:</strong> {country.subregion}
              </Card.Subtitle>

              {/* Display Population */}
              <Card.Subtitle className="mb-2 text-muted">
                <strong>Population:</strong>{" "}
                {new Intl.NumberFormat().format(country.population)}
              </Card.Subtitle>

              {/* Display Area */}
              <Card.Subtitle className="mb-2 text-muted">
                <strong>Area:</strong>{" "}
                {new Intl.NumberFormat().format(country.area)} km²
              </Card.Subtitle>

              {/* Display Currency */}
              <Card.Subtitle className="mb-2 text-muted">
                <strong>Currency:</strong>{" "}
                {Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </Card.Subtitle>

              {/* Display Official Languages */}
              <Card.Subtitle className="mb-2 text-muted">
                <strong>Languages:</strong>{" "}
                {Object.values(country.languages).join(", ")}
              </Card.Subtitle>
              <Button variant="primary" onClick={() => navigate("/countries")}>
                Back to Countries
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Weather Information */}
        <Col md={6}>
          <h3>Weather in {country.capital}</h3>
          {weather ? (
            <div>
              <p>
                Currently, it is{" "}
                <strong>{parseInt(weather.main.temp)}°C</strong> with{" "}
                {weather.weather[0].description} in {country.capital}.
              </p>
              <Image
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                style={{ width: "80px", height: "80px" }}
              />
            </div>
          ) : (
            <div>No weather data available.</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CountrySingle;
