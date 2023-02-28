import React from "react";
import "./header.css";
import PaddedWrapper from "../wrapper/paddedWrapper";
import { useAuth } from "../../store/authContext";

function Header() {
  const { theme } = useAuth();
  return (
    <>
      <PaddedWrapper>
        <div className="header-body">
          <div className="header-text">
            <div className="header-maintext" id={theme}>
              <h3>Welcome To Our World </h3>
              <h2>
                It's not just Food, <br />
                It's an <span>Experience!</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                facilis soluta ipsa, repellat ullam ipsum eos necessitatibus
                magnam rem odio at. Mollitia, eum et! Quisquam asperiores est
                vero eos quod!
              </p>
            </div>
            <div className="header-button">
              <button className="button1 shop-now" id={theme}>
                SHOP NOW
              </button>
              <button className="button2" id={theme}>
                Our Restuarants
              </button>
            </div>
          </div>
          <div className="header-img">
            <img
              src="https://www.pointoneafricancuisine.com/wp-content/uploads/2021/05/Egusi.jpeg"
              alt=""
            />
          </div>
        </div>
      </PaddedWrapper>
    </>
  );
}

export default Header;
