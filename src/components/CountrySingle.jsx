import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { initializeCountries } from "../services/countriesServices";
import axios from "axios";

const CountrySingle = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const country = location.state?.country;
  const country = location.state.country;
  const [weather, setWeather] = useState("");
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          country.capital
        }&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
        setIsWeatherLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsWeatherLoading(false); // Don't forget to set this to false in case of an error
      });
  }, [country.capital]);

  console.log("Weather:", weather);

  // Handle the loading case first

  if (isWeatherLoading) {
    // Create a spinner
    return <div>Loading weather...</div>;
  }

  // Show weather data here (minimum requirements are: Temperature, weather description and an icon)

  // useEffect(() => {
  //   if (!country) {
  //    dispatch(initializeCountries());
  //   }
  // }, [location.state]);

  return <div>Country Single will be here</div>;
};

export default CountrySingle;
