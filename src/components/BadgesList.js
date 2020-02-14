import React from "react";
import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";
import { Link } from "react-router-dom";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div style={{ padding: 50, textAlign: "center" }}>
          <h3>No se encontraron insignias</h3>
        </div>
      );
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <div className="BadgesListItem">
                <div className="row">
                  <div className="col-3">
                    <li key={badge.id}>
                      <Gravatar
                        className="BadgesListItem__avatar"
                        email={badge.email}
                        alt="Avatar"
                      />
                    </li>
                  </div>
                  <Link
                    className="text-reset text-decoration-none"
                    to={`/badges/${badge.id}/`}
                  >
                    <div className="Badge__infoComplete">
                      <div className="Badges_name">
                        {badge.firstName} {badge.lastName}
                      </div>
                      <div className="twitterID">@{badge.twitter}</div>
                      <div className="jobTitle">{badge.jobTitle}</div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
