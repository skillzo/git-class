import React from "react";
import "./news.css";
function News() {
  return (
    <>
      <div className="news-container">
        <div className="news-heading">
          <h1>Latest News</h1>
          <p>
            Here's what's trending in the marketing world.
            <br /> Stay up to date with all the latest nutrition biggest
            annoucement. Market never sleeps.
          </p>
        </div>
        <div className="news-body">
          <div className="news">
            <img
              src="https://www.mydiasporakitchen.com/wp-content/uploads/2020/06/savingpng-5-741x1024.png"
              alt=""
            />
            <p>August 2, 2022</p>
            <h4>Get Fat real Quick</h4>
            <div className="news-after">
              <div>
                <h3>Read More</h3>
              </div>
              <div>Share Icon</div>
            </div>
          </div>
          <div className="news">
            <img
              src="https://www.mydiasporakitchen.com/wp-content/uploads/2020/06/savingpng-5-741x1024.png"
              alt=""
            />
            <p>August 2, 2022</p>
            <h4>Get Fat real Quick</h4>
            <div className="news-after">
              <div>
                <h3>Read More</h3>
              </div>
              <div>Share Icon</div>
            </div>
          </div>
          <div className="news">
            <img
              src="https://www.mydiasporakitchen.com/wp-content/uploads/2020/06/savingpng-5-741x1024.png"
              alt=""
            />
            <p>August 2, 2022</p>
            <h4>Get Fat real Quick</h4>
            <div className="news-after">
              <div>
                <h3>Read More</h3>
              </div>
              <div>Share Icon</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
