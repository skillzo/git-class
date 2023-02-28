import React, { Fragment } from "react";
import NavBar from "../components/navbar/navBar";
import Header from "../components/header/Header";
import { useAuth } from "../store/authContext";

function Home() {
  const { theme } = useAuth();
  const Fruits = require("../Assests/fruits.png");
  return (
    <Fragment>
      <div className="container" id={theme}>
        <div className="header-container">
          <div className="header-overlay">
            <img src={Fruits} alt="" />
          </div>
          <NavBar />
          <Header />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
