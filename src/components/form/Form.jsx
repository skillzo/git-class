import React from "react";
import "./form.css";

function Form() {
  return (
    <>
      <div className="form-container">
        <h1>GET IN TOUCH</h1>
        <div className="form-body">
          <div className="form">
          <div className="form-input">
             <div>
              <label htmlFor="/"> Full Name</label>
              <input type="text" placeholder="Full Name" />
            </div>
            <div>
              <label htmlFor="/"> Email</label>
              <input type="text" placeholder="Email" />
            </div>
          </div>
            <div>
              <textarea
                name="Message"
                placeholder="Message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="form-map">
            <img
              src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
              alt=""
            />
          </div>
        </div>
        <button className="button2 form-button">SUBMIT</button>
      </div>
    </>
  );
}

export default Form;
