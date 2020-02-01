import React from "react";

class BadgeForm extends React.Component {
  handlerChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  };

  handlerClick = e => {
    console.log("Se clickeo el boton");
  };

  render() {
    return (
      <div>
        <h1> Nuevo Participante </h1>

        <form>
          <div className="form-group">
            <label> First Name</label>
            <input
              onChange={this.handlerChange}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>

          <button
            type="button"
            onClick={this.handlerClick}
            className="btn btn-primary"
          >
            SAVE
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
