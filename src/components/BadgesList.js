import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length == 0) {
      return (
        <div>
          <h3>No se encontraron insignias</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Crear nueva insignia
          </Link>
        </div>
      );
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <div className="BadgesListItem">
                  <div className="BadgesListItem__avatar">
                    <img src={badge.avatarUrl} alt="" />
                  </div>
                  <div className="Badges_Info">
                    {badge.firstName} <br />
                    {badge.lastName} <br />
                    {badge.jobTitle} <br />@{badge.twitter} <br />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
