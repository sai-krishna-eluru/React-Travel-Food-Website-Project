import React from "react";
import "../pages/Products.css";

export default function Products() {
  return (
    <div className="hero-container1">
      {/* <h1 className="products"> */}
      <h3>
        Check out the best Hotels and Restaurants near you using our Food
        Advisor
      </h3>
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <a href="http://localhost:3003" target="_blank" rel="noreferrer">
        <button class="button button4">Food ADVISOR</button>
      </a>
      {/* </h1> */}
    </div>
  );
}
