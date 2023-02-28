import React from "react";
import "./reviews.css";

function Reviews() {
  return (
    <>
      <div className="reviews-container">
        <div className="reviews-heading">
          <h1> What Are Our Customers Say?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
            porro! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Placeat, nobis?
          </p>
        </div>

        <div className="reviews-image-body">
          <img
            src="https://www.kindpng.com/picc/m/4-41722_blank-color-world-map-hd-png-download.png"
            alt=""
          />

          <div className="reviews-body">
            <div className="reviews reviews-image">
              <div className="reviews-image-slot1">
                <img
                  src="https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
              <div className="reviews-image-slot2">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
              <div className="reviews-image-slot3">
                <img
                  src="https://images.unsplash.com/photo-1594756154841-ac5d160dbf46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
            </div>
            <div className="reviews reviews-image2">
              <div className="reviews-image2-slot1">
                <img
                  src="https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
              <div className="reviews-details">
                <p>
                  The Best team with brilliant Brains!
                  <br />
                  They are highly proactive and responsibe.
                </p>
                <p className="customer-name">Kaya Akter</p>
                <p>Customer</p>
              </div>
            </div>
            <div className="reviews reviews-image3">
              <div className="reviews-image3-slot1">
                <img
                  src="https://images.unsplash.com/photo-1608549036505-ead5b1de5417?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
              <div className="reviews-image3-slot2">
                <img
                  src="https://images.unsplash.com/photo-1613053341193-2b7f654c155f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
              <div className="reviews-image3-slot3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
              <div className="reviews-image3-slot2">
                <img
                  src="https://images.unsplash.com/photo-1516239482977-b550ba7253f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
