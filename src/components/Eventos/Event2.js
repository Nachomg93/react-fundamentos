import React, { Component } from "react";

class App extends Component {
    state = {
        text: '',
        evento: ''

    }
  manejador = (e) => {
    console.log(e.target.value);
    this.setState({
        text: e.target.value,
        evento: e.type
    })
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.manejador}
        onCopy={this.manejador}
        onPaste={this.manejador} />
        <h2>
            { this.state.text }
        </h2>
        <h3>
            { this.state.evento }
        </h3>
      </div>
    );
  }
}

export default App;
