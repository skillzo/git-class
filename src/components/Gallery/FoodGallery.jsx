import React from "react";
import "./Foodgallery.css";

function FoodGallery() {
  return (
    <>
      <div className="foodgallery-container">
        <h3>Food Gallery</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
          officia.
        </p>
        <div className="gallery-container">
          <div className="gallery">
            <div className="foodgallery-one">
              <img
                src="https://www.nairaland.com/attachments/2977384_egusisoup_jpeg1d59795e0abcc00e369d107315f0ca39"
                alt=""
              />
            </div>
            <div className="foodgallery-two">
              <img
                src="https://images.unsplash.com/photo-1565976424065-1314a4e852c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fG5vb2RsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
          <div className="gallery gallery-two">
            <div className="foodgallery-one">
              <img
                src="https://images.unsplash.com/photo-1571047399553-603e2138b646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="foodgallery-two">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
          <div className="gallery">
            <div className="foodgallery-one">
              <img
                src="https://www.nairaland.com/attachments/5558389_images3_jpeg61842ce9c9fa2118d9a3e0561118cec5"
                alt=""
              />
            </div>
            <div className="foodgallery-two">
              <img
                src="https://www.thedreamafrica.com/wp-content/uploads/2021/02/bole_fish-traditional-food.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodGallery;
