import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

const App = () => {
  const [clicks, setClicks] = useState(0);
  const add = () => setClicks(clicks + 1);

  useEffect(() => {
    console.log("useEffect 1");
  }, [clicks]);

  useEffect(() => {
    console.log("useEffect 2");
  }, [clicks]);

  //useEffect => Es asincrono(Este pasa a la cola de la llamada).
  //useEFfect => Se ejecuta despues de que se actualiza el DOM.
  //useLayoutEffect => Se ejecuta antes de la actualizacion del DOM.
  //useLayoutEffect => Es sincrono(Se ejecuta antes).

  useLayoutEffect(() => {
    console.log("useLayoutEffect 1");
  }, [clicks]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect 2");
  }, [clicks]);

  return (
    <div className="container-center">
      <Header />
      <button onClick={add}>Clicks ({clicks})</button>
    </div>
  );
};

export default App;
