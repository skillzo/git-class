import React from "react";
import CustomizedSwitches from "../switch/Switch";
import "./navbar.css";
import { useAuth } from "../../store/authContext";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar(props) {
  const { theme, setTheme } = useAuth();
  function toggleHandler() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/food-smile-logo-lettering-eyes-tongue-white-background-eps-194895527.jpg"
              alt=""
            />
          </div>
          <div className="navbar-logo-text" id={theme}>
            Ọk<span>ẹ</span>l<span>ẹ̀</span>
          </div>
        </div>
        <div className="nav-links" id={theme}>
          <nav>
            <ul>
              <li>Home</li>
              <li>Gallary</li>
              <li>Shop</li>
              <li>About Us </li>
              <li>Our Restaurants</li>
              <li>Reviews</li>
              {/* <li>
                {" "}
                <div className="toggle-button">
                  <CustomizedSwitches onSwitch={toggleHandler} />
                </div>
              </li> */}
            </ul>
          </nav>
        </div>
        {/* <div>
          <MenuIcon />
        </div> */}
      </div>
    </>
  );
}

export default NavBar;
