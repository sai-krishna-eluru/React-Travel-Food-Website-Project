import React, { Component } from "react";
import Tile from "../servicecomps/Tile";
import "../servicecomps/Tiles.css";
// import data from "./ServiceImages";

class Tiles extends React.Component {
  render() {
    // Create tile for each item in data array
    // Pass data to each tile and assign a key
    return (
      <div>
        <div className="tiles">
          {this.props.data.map((data) => {
            return <Tile data={data} key={data.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Tiles;
