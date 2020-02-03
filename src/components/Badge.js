import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/logo.png";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badgheader">
          <img
            className="Badge__logo"
            src={confLogo}
            alt="Logo de la conferencia"
          />
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3> {this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer"> #CNEISI2020 </div>
      </div>
    );
  }
}

export default Badge;
