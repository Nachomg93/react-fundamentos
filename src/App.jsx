import React, { Component } from "react";
// import classes from "./App.module.css";

class App extends Component {
  state = {
    movies: {},
    isLoading: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const title = event.target[0].value;
    const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d9a3ddd0";
    fetch(URL + "&t=" + title)
      .then((res) => res.json())
      .then((movies) => this.setState({ movies, isLoading: false }));
  };

  render() {
    const { movies, isLoading } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="nombre de la pelicula" />
          <button>Buscar</button>
        </form>
        {isLoading && (
          <h2>Cargando...</h2>
        )}
        {movies.Title && !isLoading && (
          <div>
            <h1>{movies.Title}</h1>
            <p>{movies.Plot}</p>
            <img
              src={movies.Poster}
              alt="Poster"
              style={{ width: "200px", height: "300px" }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
