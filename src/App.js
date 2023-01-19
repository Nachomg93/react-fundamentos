import React from "react";
import TarjetaFruta from "./components/TarjetaFruta/TarjetaFrutas";

const App = () => (
    <div>
      <TarjetaFruta name="Fresa" price={5.20} />
      <TarjetaFruta name="Melon" price={2.39} />
      <TarjetaFruta name="Chirimolla" price={2.99} />
    </div>
);

export default App;