import React from "react";
import PageLoading from "../components/PageLoading";
import BadgesList from "../components/BadgesList";
import MiniLoader from "../components/MiniLoader";
import PageError from "../pages/PageError";
import confLogo from "../images/logo.png";
import { Link } from "react-router-dom";
import "./styles/Badges.css";
import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();

    const intervalId = setInterval(this.fetchData, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.IntervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Añadir nueva insignia
            </Link>
          </div>

          <div className="Badges__container">
            <div>
              <BadgesList badges={this.state.data} />

              <div className="Loader">
                {this.state.loading && <MiniLoader />}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
