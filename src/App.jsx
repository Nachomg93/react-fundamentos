import React, { Component } from "react";
// import classes from "./App.module.css";

class App extends Component {
  state = {
    users: [],
    cargando: true,
  };

  //Metodo de ciclo de vida, que es asincrono y se ejecuta cuando el componente ya esta montado.
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     text: "Hola React",
    //   });
    // }, 1000);
    fetch("https://jsonplaceholder.typicode.com/users")
    //El metodo Fetch regresa una promesa, por lo que podemos usar el metodo then.
      .then((res) =>
        //Parceamos la respuesta a json.
        res.json()
      )
      //El metodo json nos devuelve otra promesa, por lo que podemos usar el metodo then.
      .then((users) =>
        this.setState({
          users,
          cargando: false,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.cargando) {
      return <h1>Cargando...</h1>;
    }
    return (
      <div>
        <h1>Peticion HTTP</h1>
        <h2>{this.state.text}</h2>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              {user.name}
              <a href={`http://${user.website}`}>Website</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
