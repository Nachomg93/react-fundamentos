import React, { useState, useContext } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

//Tiene dos objetos: {Provider, Consumer}
//Se utiliza Provider.Context o Provider.Consumer.
const MyContext = React.createContext();

//Consumir context de forma tradicional.
// const Nieto = () => (
//   <MyContext.Consumer>
//     {(context) => (
//       <div>
//         <p>Nieto {context.clicks}</p>
//         <button onClick={context.add}>Nieto Dispara</button>
//       </div>
//     )}
//   </MyContext.Consumer>
// );

//ESTA MANERA ES MAS CORRECTA Y MAS LIMPIA.
const Nieto = () => {
  const { clicks, add } = useContext(MyContext)
  return (
    <div>
      <p>Nieto {clicks}</p>
      <button onClick={add}>Nieto Dispara</button>
    </div>
  );
};

const Hijo = () => (
  <div>
    <p>Hijo</p>
    <Nieto />
  </div>
);

const App = () => {
  const [clicks, setClicks] = useState(0);
  const add = () => setClicks(clicks + 1);

  return (
    <MyContext.Provider
      value={{
        clicks,
        add,
      }}
    >
      <div className="container-center">
        <Header />
        <button onClick={add} className="dBlue">
          Clicks ({clicks})
        </button>
        <Hijo />
      </div>
    </MyContext.Provider>
  );
};

export default App;
