import React from "react";

class BadgeForm extends React.Component {
  //state = {};
  //handlerChange = e => {
  //  console.log({
  //    name: e.target.name,
  //    value: e.target.value
  //this.setState({
  //  [e.target.name]: e.target.value
  //});
  //};

  handlerClick = e => {
    console.log("Se clickeo el boton");
  };

  handlerSubmit = e => {
    e.preventDefault();
    console.log("form was sumbitted");
  };

  render() {
    return (
      <div>
        <h1> Nuevo Participante </h1>

        <form onSubmit={this.handlerSubmit}>
          <div className="form-group">
            <label> First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label> Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label> Email </label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label> Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label> Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handlerClick} className="btn btn-primary">
            SAVE
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
