import Header from "../components/header";
import React from "react";
import axios from "axios";
import { useNavigate , useParams } from "react-router-dom";
import { useState , useEffect } from "react";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/";

function BeerDetails() {
  const [theBeer, setTheBeer] = useState([]);
  const [loading, setLoading] = useState(true);
  const { beerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axios.get(apiURL + beerId);
        const theBeerData = response.data;
        setTheBeer(theBeerData);
        setLoading(false);
      } catch (err) {
        return (
          <div><p>No beers found</p></div>
        );
        }
    };
    apiCall();
  }, [beerId]);

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center p-3 m-3" style={{ maxWidth: "100%" }}>

      <Header />

      {loading && (<img src="https://c.tenor.com/S-y2qw-zuWMAAAAC/confused-unga.gif" alt="loading" />
      )}

      {!loading && (
        <>
          <img src={theBeer.image_url} alt="beer" height="20%" width="20%"/>
          <h3>{theBeer.name}</h3>
          <p>{theBeer.tagline}</p>
          <p>Attenuation level: {theBeer.attenuation_level}</p>
          <p>Description: {theBeer.description}</p>
          <p>Created by: {theBeer.contributed_by}</p>

          <button className="btn btn-primary" onClick={() => { navigate(-1)}}> Return </button>
        </>
      )}
    </div>
  )
};

export default BeerDetails;