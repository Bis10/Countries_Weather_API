import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCountries } from "../services/countriesServices";


const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state)=> state.countries.countries);
  const isLoading = useSelector((state)=> state.countries.isLoading);
  console.log("Countries:", countries);
   console.log("isLoading:", isLoading);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

  // Handle the loading case here first(use Col, and spinner)
    if (isLoading) {
  return <div>Countries will be here</div>;
  // Handle the received data case here.
};
}
export default Countries;
