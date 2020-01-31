import React from "react";
import logo from "../images/logocuadrado.png";
import './styles/NewBadge.css';

class NavBar extends React.Component {
  render() {
    return (
        <div className="Navbar">
        <div className="container-fluid">
            <a className="Navbar__brand" href="/">
                <img className="Badge_logo" src={logo} alt="Logo" />
                <span className="font-weight-light">CNEISI</span>
                <span className="font-weight-bold">Conference</span>
            </a>
        </div>
        </div>
    )
  }
}

export default NavBar;
