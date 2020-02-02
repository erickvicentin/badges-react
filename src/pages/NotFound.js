import React from "react";
import notFound from "../images/404.png";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="NotFound_page">
      <img src={notFound} alt="Error 404! Page not found" />
      <h1>Page not found</h1>;
    </div>
  );
}

export default NotFound;
