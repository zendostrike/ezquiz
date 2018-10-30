import React from "react";
import "./styles.css";

const Button = ({ text, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

export default Button;
