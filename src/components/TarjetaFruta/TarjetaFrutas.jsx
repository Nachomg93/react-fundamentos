import React from "react";
// import "./TarjetaFruta.css";
import styles from './TarjetaFruta.module.css'


class TarjetaFruta extends React.Component {
  state = {
    cantidad: 0,
  };

  agregar = () => {
    this.setState({ cantidad: this.state.cantidad + 1 });
  };

  quitar = () => {
    this.setState({ cantidad: this.state.cantidad - 1 });
  };

  limpiar = () => {
    this.setState({ cantidad: 0 });
  };

  render() {
    // const clases = tieneElementos ? "TarjetaFruta-activa" : "TarjetaFruta";
    // const clases = `TarjetaFruta ${
    //   tieneElementos ? 'TarjetaFruta-activa' : ""
    // }`;
    const tieneElementos = this.state.cantidad > 0;
    const claseActiva = tieneElementos ? styles['card-activa'] : "";
    const clases = styles.card + ' ' + claseActiva;
    
    return (
      <div className={clases}>
        <h3>{this.props.name}</h3>
        <div>Cantidad: {this.state.cantidad}</div>
        <button onClick={this.agregar}> + </button>
        <button onClick={this.quitar}> - </button>
        <button onClick={this.limpiar}> Limpiar </button>
        <hr />
        <p>{this.props.price} €</p>
        <p>Total: €{this.props.price * this.state.cantidad}</p>
      </div>
    );
  }
}

export default TarjetaFruta;
