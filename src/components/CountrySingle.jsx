import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const CountrySingle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Location", location);
  console.log("Navigate", navigate);

  
  return (
    <div>Country Single will be here</div>
  )
};

export default CountrySingle;