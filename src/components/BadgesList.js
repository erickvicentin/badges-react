import React from "react";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
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
