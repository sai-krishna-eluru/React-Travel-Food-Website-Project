import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/MAJOR PROJECT.mp4" autoPlay loop muted />
      {/* <video src="MAJOR-PROJECT.mp4" type="video/mp4" autoPlay loop muted /> */}

      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          Book Now! <i class="fa-solid fa-ticket"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
