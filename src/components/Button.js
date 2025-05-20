import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <div>
      <a href="http://localhost:3002" target="_blank" rel="noreferrer">
        <button class="button button4">Book Now!</button>
      </a>
    </div>
    // <Link to="/Services" className="btn-mobile" scrollToTop>
    //   <button
    //     className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    //     onClick={onClick}
    //     type={type}
    //   >
    //     {children}
    //   </button>
    // </Link>
  );
};
