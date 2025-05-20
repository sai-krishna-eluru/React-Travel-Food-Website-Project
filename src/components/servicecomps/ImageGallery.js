import Tiles from "./Tiles";
import data from "../servicecomps/ServiceImages";
import "./ImageGallery.css";

import React from "react";

function ImageGallery() {
  return (
    <div className="ImageCards">
      <h1 className="h1">Image Gallery</h1>
      <Tiles data={data} />
    </div>
  );
}

export default ImageGallery;
