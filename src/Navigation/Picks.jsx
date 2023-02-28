import React, { Fragment } from "react";
import "./picks.css";
import { useAuth } from "../store/authContext";
import FoodCard from "../components/foodcard/FoodCard";
function Picks() {
  const { theme } = useAuth();
  return (
    <Fragment>
      <div className="pick-container" id={theme}>
        <div className="overlay">
          <div className="pick-container-image" id={theme}>
            <img
              src="https://thumbs.dreamstime.com/b/colored-vegetable-soup-cream-dietary-food-black-background-top-view-free-copy-space-164631855.jpg"
              alt=""
            />
          </div>
          <div className="pick-heading">
            <h3>HURRY UP!!</h3>
            <h1>DEALS OF THE WEEK</h1>
            <h6 id="pick-paragraph">
              Hey you! look at our Food charts for the week. Check for your
              favorites meals.
            </h6>
          </div>
        </div>

        <div className="pick-food" id={theme}>
          <div className="food">
            <img src="" alt="" />
          </div>
        </div>
        <FoodCard />
      </div>
    </Fragment>
  );
}

export default Picks;
