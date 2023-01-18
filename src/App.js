import React from "react";
import TarjetaFruta from "./components/TarjetaFrutas";

const App = () => (
    <div>
      <TarjetaFruta name="Fresa" price={4.0} />
      <TarjetaFruta name="Melon" price={1.55} />
      <TarjetaFruta name="Chirimolla" price={2.99} />
    </div>
);

export default App;