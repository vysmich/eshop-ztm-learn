import React from "react";
import "./button.scss";

const BUTTON_TYPES = {
  google: "google",
  inverted: "inverted",
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
