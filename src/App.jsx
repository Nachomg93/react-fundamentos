import React, { Component } from "react";
import PubSub from "pubsub-js";
// import classes from "./App.module.css";

const Header = () => {
  return (
    <header>
      <div>
        <p>( Cualquiera )</p>
      </div>
      <h3>
        <strong>Observer Pattern</strong>
      </h3>
    </header>
  );
};
const boxStyles = {
  margin: "0.5em",
  borderRadius: "0.3em",
  border: "1px solid gray",
  padding: "0.5em",
  textAlign: "center",
};

class Bisnieto extends Component {
  state = {
    message: "******",
  }

  handleClick = () => {
    PubSub.publish("saludo", "Hola desde el bisnieto");
  };

  componentDidMount() {
    PubSub.subscribe("otro evento", (e, data) => {
      this.setState({ message: data.title });
    });
  }

  render() {
    return (
      <div style={boxStyles}>
        <p>{ this.state.message }</p>
        <button onClick={this.handleClick}>Nieto</button>
      </div>
    );
  }
}

class Nieto extends Component {
  render() {
    return (
      <div style={boxStyles}>
        <Bisnieto />
      </div>
    );
  }
}

class Hijo extends Component {
  render() {
    return (
      <div style={boxStyles}>
        <Nieto />
      </div>
    );
  }
}

class App extends Component {
  componentDidMount() {
    PubSub.subscribe("saludo", (e, data) => {
      alert(data);
    });
  }

  handleClick = () => {
    PubSub.publish("otro avento", { title: "Hola desde <App />" });
  };
  render() {
    return (
      <div style={boxStyles}>
        <button onClick={this.handleClick}>Padre</button>
        <Header />
        <Hijo />
      </div>
    );
  }
}

export default App;
