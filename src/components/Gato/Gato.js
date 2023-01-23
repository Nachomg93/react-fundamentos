// import './App.css';
import React, { Component } from "react";

const Gato = (props) => (
  <div>
    <h1>Gato 🐈</h1>
    <pre>{JSON.stringify(props, null, 4)}</pre>
  </div>
);

class App extends Component {
  state = {
    agilidad: 100,
    vidas: 7,
  };
  render() {
    const otrosDatos = {
      raza: "Siames",
      juegos: 6,
    };
    return (
      <div>
        <Gato name="Zelu"
        age="6 años"
        {...otrosDatos} 
        {...this.state}
        />
      </div>
    );
  }
}

export default App;
