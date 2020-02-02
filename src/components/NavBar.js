import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logocuadrado.png";
import "./styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Badge_logo" src={logo} alt="Logo" />
            <span className="font-weight-light">CNEISI</span>
            <span className="font-weight-bold">
              2020 - Facultad Regional Resistencia
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
