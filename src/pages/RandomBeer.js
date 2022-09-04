import Header from "../components/header";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function RandomBeer() {
  const [anyBeer, setAnyBeer] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axios.get(`${apiURL}/random`);
        const anyBeerData = response.data;
        setAnyBeer(anyBeerData);
        setLoading(false);
      } catch (err) {
        return <p>No beers found</p>;
      }
    };
    apiCall();
  }, []);

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center p-3 m-3" style={{ maxWidth: "100%" }}>
      <Header />
      <h1>Random Beer</h1>

      {loading && (<img src="https://c.tenor.com/S-y2qw-zuWMAAAAC/confused-unga.gif" alt="loading"/>
      )}

      {!loading && (
        <div>
          <img src={anyBeer.image_url} alt="beer" height="20%" width="20%" />
          <h3>{anyBeer.name}</h3>
          <p>{anyBeer.tagline}</p>
          <p>Attenuation level: {anyBeer.attenuation_level}</p>
          <p>Description: {anyBeer.description}</p>
          <p>Created by: {anyBeer.contributed_by}</p>

          <button className="btn btn-primary" onClick={() => {navigate(-1)}}> Return </button>
        </div>
      )}
    </div>
  )
};

export default RandomBeer;