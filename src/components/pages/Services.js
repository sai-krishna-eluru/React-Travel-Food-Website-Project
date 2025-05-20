import "antd/dist/antd.min.css";
import ServiceHeroSection from "../servicecomps/ServiceHeroSection";
import Tiles from "../servicecomps/Tiles";
import ImageGallery from "../servicecomps/ImageGallery";
import "./Services.css";
import VideoGallery from "../servicecomps/VideoGallery";

import React from "react";

function Services() {
  window.scrollTo(0, 0);
  return (
    <div>
      <ServiceHeroSection />
      <div className="container1">
        <div className="Names-container">
          <h1>Delhi</h1>
        </div>

        <ImageGallery />
        {/* <h2>VideoGallery</h2> */}
        <div className="Names-container">
          <h1>Hyderabad</h1>
        </div>
        <ImageGallery />
        {/* <h2>Video Gallery</h2> */}
        <div className="Names-container">
          <h1>Goa</h1>
        </div>
        <ImageGallery />
        {/* <h2>Video Gallery</h2> */}
        <div className="Names-container">
          <h1>Banglore</h1>
        </div>
        <ImageGallery />
        {/* <h2>Video Gallery</h2> */}
        {/* <Tiles /> */}
        {/* <VideoGallery /> */}
      </div>
    </div>
  );
}

export default Services;
