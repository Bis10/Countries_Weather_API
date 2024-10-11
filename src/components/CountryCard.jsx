import React from "react";
import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"; // Make sure to import useSelector
import { Link } from "react-router-dom";
import { addFavourite, removeFavourite } from "../store/favouritesSlice"; // Import actions from your slice

export const CountryCard = ({ country }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites); // Get favourites from the store

  const isFavourite = favourites.includes(country.name.common); // Check if the country is a favourite

  return (
    <Col className="mt-5" key={country.name.official}>
      <Card className="h-100">
        <Link
          to={`/countries/${country.name.common}`}
          state={{ country: country }}
        >
          <Card.Img
            variant="top"
            src={country.flags.svg}
            alt={country.name.common}
            className="rounded h-50"
            style={{
              objectFit: "cover",
              minHeight: "200px",
              maxHeight: "200px",
            }}
          />
        </Link>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{country.name.common}</Card.Title>
          <Card.Subtitle className="mb-5 text-muted">
            {country.name.official}
          </Card.Subtitle>
          <ListGroup
            variant="flush"
            className="flex-grow-1 justify-content-center"
          >
            <ListGroupItem>
              <i className="bi bi-people me-2">
                {country.population.toLocaleString()}
              </i>
            </ListGroupItem>
            <ListGroupItem>
              <i className="me-2">
                {Object.values(country.currencies || {})
                  .map((currency) => currency.name)
                  .join(", ") || "No currency"}
              </i>
            </ListGroupItem>
            <ListGroupItem>
              <i className="me-2">
                {Object.values(country.languages || {})
                  .map((language) => language)
                  .join(", ") || "No language"}
              </i>
            </ListGroupItem>
          </ListGroup>
          <Button
            variant={isFavourite ? "danger" : "primary"}
            onClick={() => {
              if (isFavourite) {
                dispatch(removeFavourite(country.name.common)); // Remove from favourites
              } else {
                dispatch(addFavourite(country.name.common)); // Add to favourites
              }
            }}
          >
            {isFavourite ? "Remove Favourite" : "Add Favourite"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
