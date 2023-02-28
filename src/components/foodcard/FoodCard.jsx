import React from "react";
import "./foodcard.css";
import { useAuth } from "../../store/authContext";

function FoodCard() {
  const {theme}=useAuth()
  return (
    <>
      <div className="foodcard" id={theme}>
        <div className="foodcard-day-container">
        <div className="foodcard-day" id={theme}>
           <div className=" number number-after"> <h3>6</h3> <h6>days</h6></div>
           <div className=" number number-after"> <h3>6</h3> <h6>days</h6></div>
           <div className=" number number-after"> <h3>6</h3> <h6>days</h6></div>
           <div className=" number "> <h3>6</h3> <h6>days</h6></div>
        </div>
        </div>
        <div className="foodcard-container">
          <div className="foodcard-card">
            <img
              src="https://images.unsplash.com/photo-1605704931020-ba62cdb2ba9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>Amala and Ewedu</p>
            <h5>$8.00</h5>
          </div>
          <div className="foodcard-card">
            <img
              src="https://images.unsplash.com/photo-1605704931020-ba62cdb2ba9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>Amala and Ewedu</p>
            <h5>$8.00</h5>
          </div>
          <div className="foodcard-card">
            <img
              src="https://images.unsplash.com/photo-1605704931020-ba62cdb2ba9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>Amala and Ewedu</p>
            <h5>$8.00</h5>
          </div>
          <div className="foodcard-card">
            <img
              src="https://images.unsplash.com/photo-1605704931020-ba62cdb2ba9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>Amala and Ewedu</p>
            <h5>$8.00</h5>
          </div>
          <div className="foodcard-card">
            <img
              src="https://images.unsplash.com/photo-1605704931020-ba62cdb2ba9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>Amala and Ewedu</p>
            <h5>$8.00</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodCard;
