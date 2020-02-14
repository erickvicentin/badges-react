import React from "react";
import api from "../api";

import "./styles/BadgeEdit.css";
import header from "../images/convencion.png";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import md5 from "md5";
import PageLoading from "../components/PageLoading";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = e => {
    if (e.target.name === "email") {
      const hash = md5(e.target.value);
      var valueAvatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`;

      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
          avatarUrl: valueAvatar
        }
      });
    } else {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <div>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit_hero-image img-fluid"
            src={header}
            alt="Logo"
          />
          <div className="Header_text">Sistema de gestion de Insignias</div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                twitter={this.state.form.twitter || "twitter"}
                email={this.state.form.email || "email"}
                avatarUrl="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg"
              />
            </div>

            <div className="col-6">
              <h1> Editar Participante </h1>
              <BadgeForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeEdit;
