import React, { Component } from "react";

const styles = {
  height: "200px",
  background: "gold",
  padding: "1em",
  boxSizing: "border-box",
};
class App extends Component {
  state = {
    y: 0,
    x: 0,
  };

  manejador = (e) => {
    this.setState({
        x: e.clientX,
        y: e.clientY
    })
  };

  render() {
    return <div style={styles} onMouseMove={this.manejador}>
        <div>
        x: { this.state.x }
        </div>
        <div>
        x: { this.state.y }
        </div>
    </div>
  }
}

export default App;
