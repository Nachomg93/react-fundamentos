import React, { Component } from "react";
// import { Chart } from "chart.js";
// import classes from "./App.module.css";

class InputControlado extends Component {
  state = {
    text: "",
    tieneError: false,
    color: "E8E8E8",
  };

  actualizar = (event) => {
    const text = event.target.value;
    const tieneError = text !== "" && text.length < 5;
    let color = "green";
    if (text.trim() === "") {
      color = "E8E8E8";
    }
    if (text.trim() !== "" && text.length < 5) {
      color = "red";
    }
    this.setState({ text, color });
  };

  render() {
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: "0.3em 0.6em",
      outline: "none",
    };
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.actualizar}
        style={styles}
      />
    );
  }
}

class App extends Component {
  send = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Inpusts controlados</h1>
        <InputControlado />
      </div>
    );
  }
}

export default App;
