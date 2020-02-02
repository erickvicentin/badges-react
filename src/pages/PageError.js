import React from "react";
import "./styles/PageError.css";
import errorLogo from "../images/pageErrorLogo.png";

function PageError(props) {
  return (
    <div className="PageError">
      <img src={errorLogo} alt="error" />
      <div style={{ fontSize: 36 }}>{props.error.message}</div>
    </div>
  );
}

export default PageError;
