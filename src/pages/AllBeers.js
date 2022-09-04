import Header from "../components/header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/search";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/";

function AllBeers() {
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axios.get(apiURL);
        setBeers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  }, []);

  useEffect(() => {
    const searchResult = async () => {
      try {
        const response = await axios.get(apiURL + `/search?q=${search}`);
        setBeers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    searchResult();
  }, [search]);

  const searchHandler = (result) => {
    setSearch(result);
  };

  return (
      <div className="d-inline-flex flex-column justify-content-center align-items-center p-3 m-3" style={{ maxWidth: "100%" }}>
        
        <Header />
        <Search searchHandler={searchHandler} />

        {loading && (
          <img src="https://c.tenor.com/S-y2qw-zuWMAAAAC/confused-unga.gif" alt="loading"/>
        )}

        {beers.map((beer, i) => {
          return (

            <div key={i}>

              <Link to={"/beers/" + beer._id}>
                <div className="card" style={{ width: "50rem" }}>
                  <div className="card-body">
                    <img src={beer.image_url} style={{ height: "150px" }} alt={"image of" + beer.name}/>
                    <h5 className="card-title">{beer.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{beer.tagline}</h6>
                    <p className="card-text">Created by: {beer.contributed_by}</p>
                  </div>
                </div>
              </Link>

            </div>
          );
        })}
      </div>
  )
};

export default AllBeers;