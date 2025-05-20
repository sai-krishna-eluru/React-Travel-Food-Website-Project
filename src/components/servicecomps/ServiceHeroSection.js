import React from "react";
import "../servicecomps/ServiceHeroSection.css";
import "antd/dist/antd.min.css";
// import background from "../../components/images/space4.gif";
// import { Row } from "antd";
// import { Gallery } from "react-grid-gallery";
// import ImageGallery from "../co/ImageGallery";

export default function ServiceHeroSection() {
  return (
    <div className="service-container">
      <div
        className="container"
        // style={{
        //   backgroundImage: `url(${background})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   width: "100%",
        //   height: "100vh",
        // }}
      >
        <video src="/videos/video-2.mp4" autoPlay loop muted />

        <h1>“The journey of a thousand miles begins with a single step”</h1>
        <br />
        {/* <ImageGallery /> */}
      </div>
    </div>
  );
}
