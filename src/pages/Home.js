import { Link } from "react-router-dom";
import beer from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function HomePage() {
  return (
      <div className="d-inline-flex flex-column justify-content-center align-items-center p-3 m-3" style={{ maxWidth: "100%" }} >

        <Link to="/beers"> 
          <div className="card p-5 m-5" style={{ width: "50rem" }}>
            <img src={beer} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">All Beers</h5>
              <p className="card-text"> Click here to view all the beers in our database </p>
            </div>
          </div>
        </Link>

        <Link to="/random-beer">
          <div className="card p-5 m-5d" style={{ width: "50rem" }}>
            <img src={randomBeer} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Random Beer</h5>
              <p className="card-text"> Click here to get a random beer from our database </p>
            </div>
          </div>
        </Link>

        <Link to="/new-beer">
          <div className="card p-5 m-5" style={{ width: "50rem" }}>
            <img src={newBeer} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">New Beer</h5>
              <p className="card-text"> Click here to add a new beer to our database </p>
            </div>
          </div>
        </Link>

      </div>
  )
};

export default HomePage;