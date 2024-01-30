import React from "react";

export default function Carousel() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.shutterstock.com/image-photo/kiev-ukraine-march-31-2015-260nw-275940803.jpg"
              className="d-block w-100"
              alt="..."
              width={20}
              height={275}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5ZwuyL48VQ6k3PbA9dyPRUaDCVbKcICpXHaijp4vLA&s"
              className="d-block w-100"
              alt="..."
              width={20}
              height={275}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.shutterstock.com/image-photo/kiev-ukraine-march-31-2015-260nw-275940803.jpg"
              className="d-block w-100"
              alt="..."
              width={20}
              height={275}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
