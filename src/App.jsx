import React, { Component } from "react";
// import { Chart } from "chart.js";
// import classes from "./App.module.css";

class InputNoControlado extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="name">Nombre</label>
          <input type="text" placeholder="Nombre" id="name" />
        </p>
        <p>
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </p>
        <button>Enviar</button>
      </form>
    );
  }
}

class App extends Component {
  state = {
    active: true,
  };

  handleChange = (e) => {
    this.setState({
      active: e.target.checked,
    });
  };
  render() {
    const { active } = this.state;
    return (
      <div>
        {active && <h1>Etiqueta Checkbox</h1>}
        <form>
          <input
            type="checkbox"
            checked={this.state.active}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
export default App;
