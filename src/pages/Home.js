import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import logoUTN from "../images/logo.png";
import utnCuadrado from "../images/convencion.png";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-6 col-md-4">
              <img
                src={logoUTN}
                alt="UTN Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>Sistema de Manejo de Insignias</h1>
              <h3>CNEISI 2020 - Facultad Regional Resistencia</h3>
              <Link className="btn btn-primary" to="/badges">
                Iniciar
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={utnCuadrado}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
