import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-body">
        <div className="footer footer1">
          <div>LOGO here </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            optio!
          </p>

          <div className="footer-contact">
            <div>
              <span>Logo</span>
              <p>Support@okele.com</p>
            </div>
            <div>
              <span>Logo</span>
              <p>(+234) 701 7181 902</p>
            </div>
            <div>
              <span>Logo</span>
              <p>T8, Aleshinloye Market, Garaki, Lagos.</p>
            </div>
          </div>
        </div>

        <div className="footer footer2">
          <h2>Useful Links</h2>
          <div className="footer-Links">
            <ul>
              <li>About us</li>
              <li>Our Products</li>
              <li>Our Services</li>
              <li>Shop</li>
              <li>News Blog</li>
              <li>Contact US</li>
            </ul>
          </div>
        </div>
        <div className="footer footer3">
          <h2>OUR SERVICES</h2>
          <div className="footer-services">
            <ul>
              <li>Online Shopping</li>
              <li>Free Home Delivery</li>
              <li>Return Money</li>
              <li>Delivery On Place</li>
              <li>Wishlist</li>
              <li>Discount</li>
            </ul>
          </div>
        </div>
        <div className="footer footer4">
          <h2>NEWS LETTER</h2>
          <div className="footer-news">
            <p>Subscribe To our Newsletter</p>
            <div>form goes here</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
