## #_REACT CHEAT SHEET_

**`npx create-react-app + "nombre de la carpeta"`**

###Expresiones

```const nombre = "Nacho Martín";

const user1 = {
  nombre: "Nacho Martín",
  edad: 29,
  país: "España",
};

const getInfo = (user) => {
  return `Hola mi nombre es ${user.nombre} y soy de ${user.país}.`;
};

const App = <h1>{getInfo(user1)}</h1>;
```

###Crear componente funcional
:pushpin: Los componentes siempre deben comenzar en mayúscula.
:point_right: Únicamente pueden retornar un nodo.

```
const TarjetaFruta = () => (
  <div>
    <h3>Título</h3>
    <hr />
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
);

const App = () => (
  <div>
    <TarjetaFruta />
  </div>
);
```

###Props
:pushpin: La forma de pasarle datos al momento de que usamos el componente es a través de sus atributos.
:point_right: Para pasarle strings no hace falta llaves. Para otro tipo de datos (objetos, arrays, string literals...) si.
:pushpin: Props son sólo para lecturas. Las debemos solo de usar para leer sus valores, pero dentro de los componentes no podemos mutarlas ni reescribirlas.

```
const TarjetaFruta = (props) => (
  <div>
    <h3>{props.name}</h3>
    <hr />
    <p>$ {props.price}</p>
  </div>
);

let fruta = 'mango'

const App = () => (
  <div>
    <TarjetaFruta name="fresas" price={4.0} />
    <TarjetaFruta name="manzanas" price={1.55} />
    <TarjetaFruta name={`${fruta}`} price={6.0} />
  </div>
);
```

###Métodos de clase para manejar eventos
:point_right: Con la palabra extends estamos agrgando la funcionalidad a esta class, convertimos esta class agregando los methods las funciones de con component.
:pushpin: Render retorna los elements
:point_right: A los props se le añade delante la palabra reservada this.
:pushpin: El metodo constructor() se ejecuta en el que se crea el component y dentro del constructor() inicializamos el estado con this.state.

```
class TarjetaFruta extends React.Component {
  constructor() {
    super();

    const METHODS = ["agregar", "restar", 'limpiar'];

    METHODS.forEach((method) => {
      this[method] = this[method].bind(this);
    });

    this.state = {
      cantidad: 0,
    };
  }

  agregar() {
    this.setState({
      cantidad: this.state.cantidad + 1,
    });
  }
  restar() {
    this.setState({
      cantidad: this.state.cantidad - 1,
    });
  }
  limpiar() {
    this.setState({
      cantidad: 0,
    });
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <hr />
        <div>Cantidad: {this.state.cantidad}</div>
        <button onClick={this.agregar}> + </button>
        <button onClick={this.restar}> - </button>
        <button onClick={this.limpiar}> Limpiar </button>
        <p>$ {this.props.price}</p>
      </div>
    );
  }
}

let fruta = "mango";

const App = () => (
  <div>
    <TarjetaFruta name="Fresas" price={4.0} />
    <TarjetaFruta name="Manzana" price={1.55} />
    <TarjetaFruta name={`${fruta}`} price={6.0} />
  </div>
);
```

###Inicializadores de propiedad
:point_right:Nos ayuda a evitar pasar el .bind() al method
:pushpin:Sacamos el {} this.state del constructor y ya no es necesario llamas a this.
:point_right:Podemos eliminar todo el constructor a continuación modificamos las funciones a funciones flecha.

```
class TarjetaFruta extends React.Component {
     this.state = {
      cantidad: 0,
    };

  agregar () => {
    this.setState({
      cantidad: this.state.cantidad + 1,
    });
  }
  restar () => {
    this.setState({
      cantidad: this.state.cantidad - 1,
    });
  }
  limpiar () => {
    this.setState({
      cantidad: 0,
    });
  }
```

###Ejemplo de refactorizacion de componentes
:pushpin:Consiste en desglosar el trabajo en partes mas pequeñas, es decir separar los componentes separados en diferentes archivos.
###Aprendiendo JSX en mas profundidad.
:point_right:JSX nos ayuda a declarar los elementos de una forma mas ordenada y mantenible
**`JSX`**

```
const Componentes = {
    Titulo: () => (
        <h1>Algun Titulo</h1>
    ),

    Parrafo: () => (
        <p>Lorem, ipsum dolor.</p>
    )
}

const App = () => (
    <div>
        <Componentes.Titulo />
        <Componentes.Parrafo />
    </div>
)
```

:pushpin:es lo mismo que:
**`DOM`**

```
const Componentes = {
  Titulo: () => /*#__PURE__*/React.createElement("h1", null, "Algun Titulo"),
  Parrafo: () => /*#__PURE__*/React.createElement("p", null, "Lorem, ipsum dolor.")
};
const App = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Componentes.Titulo, null), /*#__PURE__*/React.createElement(Componentes.Parrafo, null));
```

###Aplicar estilos CSS en linea a componentes de React.

```
const styles = {
        border: '1px solid black',
        marginBottom: '1em',
        borderRadius: '0.5em',
        padding: '1em'
    }

      <div style={styles}>
```

:point_right:Para hacerlo mas dinamico.

```
const tieneElementos = this.state.cantidad > 0;
    const styles = {
        border: '1px solid black',
        marginBottom: '1em',
        borderRadius: '0.5em',
        padding: '1em',
        background: tieneElementos > 0 ? 'linear-gradient(45deg, black, #4a02f7)' : '#FFF',
        color: tieneElementos > 0 ? '#FFF' : '#000',
        transition: 'all 350ms ease-out'
    }
```

:pushpin:Para calcular el total.

```
<p>
    Total: €{this.props.price * this.state.cantidad}
</p>
```

###Aplicar estilos con clases CSS en componentes de React.
:point_right:Por cada componente tener un archivo CSS.
:pushpin:A continuacion veremos ejemplos de clases dinamicas.

```
    // const clases = tieneElementos ? "TarjetaFruta-activa" : "TarjetaFruta";
    // const clases = `TarjetaFruta ${
    //   tieneElementos ? 'TarjetaFruta-activa' : ""
    // }`;
    const tieneElementos = this.state.cantidad > 0;
    const claseActiva = tieneElementos ? 'TarjetaFruta-activa' : ""
    const clases = 'TarjetaFruta' + claseActiva;
    return (
      <div className={clases}>
    )
```

###Sistemas de modulos CSS
:point_right:Es un modulo de CSS mas fiable, ya que es casi imposible que se pisen los estilos.
:pushpin:Hay dos formas de ejecutar el estilo, lo veremos con ejemplos.

```
import styles from './TarjetaFruta.module.css';
<div className={styles.card}>
<div className={styles['card-active']}> o tambien
const claseActiva = tieneElementos ? styles['card-activa'] : "";
const clases = styles.card + ' ' + claseActiva;
<div className={clases}>
```

###Modularizacion de componentes en folders con ayuda de ES6.
:point_right:Consiste en dividir en carpetas o directorios los modulos CSS y los Componentes, para tener mas limpio la estructura de trabajo.

###Entendiendo el Object.assign(ES6)
:pushpin:Object.assign nos ayuda a clonar un objeto o combinar las propiedades de varios objetos diferentes.
:point_right:Si modificas una propiedad esta se quedara con el ultimo resultado encontrado.

```
const perfil = {
  nombre: "Nacho",
  info: {
    direccion: "la direccion...",
  },
};

const region = {
  pais: "España",
  info: {
    coordenadas: "coordenadas...",
  },
};

const social = {
  social: "nachomargar",
  nombre: "NachoMartin",
};

const resultado = Object.assign({}, perfil, region, social);

resultado.info = Object.assign({}, perfil.info, region.info);

console.log(resultado);

```

###Entendiendo el operador Spread.
:pushpin:Se declara usando ... sin espacios, sirve para concatenar objetos con sus propiedades.
:point_right:El orden si importa por lo que siempre tomara la ultima propiedad encontrada, se puede evitar usando un segundo operador spread.

```
const perfil = {
  nombre: "Nacho",
  info: {
    direccion: "la direccion...",
  },
};

const region = {
  pais: "España",
  info: {
    coordenadas: "coordenadas...",
  },
};

const social = {
  social: "nachomargar",
  nombre: "NachoMartin",
};

const resultado = {
    ...region,
    ...perfil,
    ...social,
    info: {
        ...perfil.info,
        ...region.info
    }
}

console.log(resultado);
```

###Operador Spread con Arrays
:pushpin:Es muy similar al anterior ejemplo.

```
const motosPequeñas = [
    'honda sh',
    'sh model',
    'peugeot'
]

const motosGrandes = [
    'TMAX',
    'XADV',
    'MT09'
]

const motos = [
    ...motosPequeñas,
    'yamaha',
    motosGrandes,
    'BMW'
]

console.log(motos);
```

###Mutando el estado de componente con una funcion.
:point_right: Para actualizar el estado de la forma del ejemplo no es recomendable cuando tenemos que acceder a propiedades dentro del propio estado.
:pushpin: El metodo setState es asincrono, cuando ejectuamos el state este internamente no se ejecuta hasta pasado un tiempo para validar si mas componente mutaron el estado y actualizar el estado al mismo tiempo con las diferentes actualizaciones. y se ejecuta un cola donde se van agrupando las diferentes mutaciones.
:point_right: Para corregir esta incidencia al this.setState le pasamos una funcion Arrow con los parametros prevState y props.

```
import React, { Component } from "react";

class Contador extends Component {
  state = {
    clicks: 0,
  };

  add = () => {
    this.setState((state) => ({
      // if (state.clicks === 3) {
      //     return null
      // }

      clicks: state.clicks + 1,
    }));
  };

  render() {
    return <button onClick={this.add}>Clicks: ( {this.state.clicks} )</button>;
  }
}

function App() {
  return (
    <div>
      <Contador />
    </div>
  );
}

export default App;
```

:pushpin: Otro ejemplo actualizando y conservando (con el operador ...) el estado del objeto video.

```
import React, { Component } from "react";

class Contador extends Component {
  state = {
    video: {
      title: "Super video",
      likes: 0,
    },
  };

  add = () => {
    this.setState((state) => ({
      video: {
        ...state.video,
        likes: state.video.likes + 1,
      },
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.video.title}</h1>
        <button onClick={this.add}>Likes: ({this.state.video.likes})</button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Contador />
    </div>
  );
}

export default App;
```

###Usando operador spread para pasar props.
:point_right: Para pasar informacion de forma dinamica.

```
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
```

###Manejando eventos de mouse,
:pushpin:Tipos de eventos: onClick, onMouseDown, onMouseUp, onDoubleClick

```
import React, { Component } from "react";

class App extends Component {
    manejador = () => {
        alert('Hey Nacho')
    }

    render() {

      return (
        <div>
          <button onDoubleClick={this.manejador}>
            Dispara
          </button>
        </div>
      );
    }
  }

  export default App;
```

:point_right: El evento onMouseMove nos calcula las posiciones respectivamente.

```
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
```

###Ejemplos de Eventos Input.
:pushpin: El evento onChange este e va a ser disparado en cuanto se le agregue texto en el input.
:point_right: El e que nos esta llegando se trata de un objeto, podemos acceder a el con el metodo e.target que hace referencia al e, que en este caso es el input. Y con el (e.target.value) obtenemos el texto que se ingresa en el input con el (value).
:pushpin: Practicamos con eventos onChange, onCopy, onPaste.

```
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
```

###Diferencia de evento nativo DOM y evento sintetico de React.
:point_right: Para ver los eventos nativos.

```
import React, { Component } from "react";

class App extends Component {
    manejador = (e) => {
e.preventDefault()
console.log(e.nativeEvent);
    }
      render() {
    return (
      <div>
        <a
        href="https://google.com"
        onClick={this.manejador}
        >
            Google
        </a>
      </div>
    );
  }
}

export default App;

```

###Conservar eventos con React.

```
import React, { Component } from "react";

class PersistenciaEventos extends Component {
  state = {
    color: "blue",
  };
  handlerChange = (e) => {
    const color = e.target.value
    this.setState((state) => ({
      color
    }));
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handlerChange} />
        <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
      </div>
    );
  }
}

const App = () => (
  <div>
    <PersistenciaEventos />
  </div>
);

export default App;
```

###Crear eventos personalizado con React.
:pushpin: Funcionalidad desde un componente hijo hacia un componente padre.

```
import React, { Component } from "react";
import "./global.css";

class Hijo extends Component {
  manejadorCLick = () => {
    this.props.onSaluda("Nacho en React");
  };
  render() {
    return (
      <div className="box blue">
        <h2>Hijo</h2>
        <button onClick={this.manejadorCLick}>Saluda</button>
      </div>
    );
  }
}

class App extends Component {
  manejador = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div className="box red">
        <Hijo onSaluda={this.manejador} />
        <h1>Nombre: {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
```

###Renderizamos condicionales con React.
:point_right: Ejemplos de condicionales.

```
import React, { Component } from "react";

const Saludo = (props) => {
  return (
    <div>
        <div>
             { props.name && <strong>{ props.name }</strong>}
        </div>
      {props.saluda ? (
        <h1>Hola Nacho, eres un maquina</h1>
      ) : (
        <p>Ups, no hay saludos para ti</p>
      )}
    </div>
  );

  if (props.saluda) {
    return <h1>Hola Nacho, eres un maquina</h1>;
  }
  return <p>Ups, no hay saludos para ti</p>;
};

const App = () => (
  <div>
    <Saludo saluda name= 'Ali'/>
  </div>
);

export default App;
```

###Inyectando HTML en marcado de componente en React.

```
import React, { Component } from "react";

class App extends Component {
  state = {
    marcado: `
    <h1>Inyectando HTML con React</h1>
    <br/>
    <hr/>
    <a href="#">Algun Link</a>
    `,
  };
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.marcado }}></div>
      </div>
    );
  }
}

export default App;
```

###Introduciendo a la prop especial children.

```
import React, { Component } from "react";

const Title = (props) => {
  const styles = {
    padding: "0.3em",
    color: "#FFF",
    background: props.uiColor,
    borderRadius: "0.3em",
    textAlign: "center",
    fontSize: "50px",
  };

  console.log(props.children);

  return <h1 style={styles}> {props.children}</h1>;
};
class App extends Component {
  state = {
    uiColor: "purple",
  };
  render() {
    return (
      <div>
        <Title uiColor={this.state.uiColor}>
          Grande <em>Nacho</em>
        </Title>
      </div>
    );
  }
}

export default App;
```

###Destruturacion avanzada aplicada a componentes.

```
const user1 = {
  //   name: "Nacho Martin",
  username: "Margar",
  country: "España",
  social: {
    instagram: "nachomargar",
    facebook: "Nacho Martin Garcia",
  },
};

const saluda = (user) => {
  var {
    username: aliasCool,
    country,
    social: { instagram: inst },
  } = user;

  const orden = ["burger", "te rojo", "yogurt", 124, false];
  const [comida, bebida, postre, ...restantes] = orden;
  console.log(restantes);
  console.log(`Hola soy ${aliasCool}, y mi gusta la ${comida}`);
};

saluda(user1);
```

**`OTRO EJEMPLO`**

```
import React, { Component } from "react";

const Title = ({uiColor, children }) => {
  const styles = {
    padding: "0.3em",
    color: "#FFF",
    background: uiColor,
    borderRadius: "0.3em",
    textAlign: "center",
    fontSize: "50px",
  };

  return <h1 style={styles}>{children}</h1>;
};
class App extends Component {
  state = {
    uiColor: "tomato",
  };
  render() {

    const { uiColor } = this.state
    return (
      <div>
        <Title uiColor={uiColor}>
          Super <em>Nacho</em>
        </Title>
      </div>
    );
  }
}

export default App;
```
###Elementos con etiquetas con Fragment
```
<>
  <li>Camisetas</li>
  <li>Pantalones</li>
  <li>Tenis</li>
</>
```
###Entendiendo los portals de React
```
import React, { Component } from "react";
import ReactDOM from "react-dom";

class PortalModal extends Component {
  render() {
    if (!this.props.visible) {
      return null;
    }

    const styles = {
      widht: "100%",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      background: "linear-gradient(to top right, #667eea, #764ba2)",
      opacity: "0.95",
      color: "#FFF",
    };
    return ReactDOM.createPortal(
      <div style={styles}>{this.props.children}</div>,
      document.getElementById("modal-root")
    );
  }
}
class App extends Component {
  state = {
    visible: false,
    num: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({
        num: state.num + 1,
      }));
    }, 1000);
  }

  mostrar = () => {
    this.setState({ visible: true });
  };
  cerrar = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.mostrar}>Mostrar</button>
        <PortalModal visible={this.state.visible}>
          <button onClick={this.cerrar}>Cerrar</button>
          <h1>Hola desde un portal modal {this.state.num}</h1>
        </PortalModal>
      </div>
    );
  }
}

export default App;
```
###Controlar los datos de entrada con props-types.
```
import React, { Component } from "react";
import PropTypes from "prop-types";

class Profile extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number
  };
  render() {
    const { name, bio, email } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p>{bio}</p>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    );
  }
}

// Profile.propTypes = {}

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Profile
          name={777}
          bio="Developer in progress"
          email="nachomg93@..."
        />
      </div>
    );
  }
}

export default App;
```
###Iterando listas con React.
```
import React, { Component } from "react";

const motos = ["honda", "yamaha", "ducati", "bmw", "peugeot", "suzuki"];

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <ul>
          {motos.map((moto) => {
            return <li>{moto}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
```
###Iterando listas de Objetos.
```
import React, { Component } from "react";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Nichol",
        colors: ["#0408d8", "#9ef96d", "#5dbc01"],
        price: 636,
      },
      {
        id: 2,
        name: "Adrea",
        colors: ["#3eadc4", "#9ef96d", "#5dbc01", "#0408d8"],
        price: 83,
      },
      {
        id: 3,
        name: "Robby",
        colors: ["#5dbc01", "#0408d8", "#9ef96d"],
        price: 963,
      },
      {
        id: 4,
        name: "Desdemona",
        colors: ["#4c2a6c", "#5dbc01"],
        price: 183,
      },
      {
        id: 5,
        name: "Reinwald",
        colors: ["#9ef96d", "#9ef96d"],
        price: 173,
      },
    ],
  };

  render() {
    return (
      <div>
        <h3>Iterando listas de Objetos</h3>
        <div>
          {this.state.products.map((product) => {
            return (
              <div>
                {product.name} - ${product.price}
                <div>
                  {product.colors.map((color) => {
                    return (
                      <span
                        style={{
                          width: "13px",
                          height: "13px",
                          borderRadius: "0.1rem",
                          border: "1px solid gray",
                          display: "inline-block",
                          margin: "0.1em",
                          background: color,
                        }}
                      ></span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
```
###Iterando propiedades de Objetos.
```
import React, { Component } from "react";

class App extends Component {
  state = {
    user: {
      name: "Nacho Martin",
      username: "Margar",
      country: "España",
      instagram: "nachomargar",
      facebook: "Nacho Martin Garcia",
    },
  };

  render() {
    const { user } = this.state;
    const keys = Object.keys(user);
    return (
      <div>
        <h3>Iterando listas de Objetos</h3>
        <ul>
          {keys.map((key) => (
            <li>
              <strong>{key}:</strong> {user[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
```
###Prop key al iterar listas con React.
```
import React, { Component } from "react";

const users = [
  {
    id: 1,
    name: "Chelsea",
    country: "Vietnam",
  },
  {
    id: 2,
    name: "Ilsa",
    country: "China",
  },
  {
    id: 3,
    name: "Hymie",
    country: "Nicaragua",
  },
  {
    id: 4,
    name: "Malorie",
    country: "United States",
  },
  {
    id: 5,
    name: "Chantalle",
    country: "Pakistan",
  },
  {
    id: 6,
    name: "Elvin",
    country: "Philippines",
  },
];
class App extends Component {
  render() {
    return (
      <div>
        <h1>Iterando</h1>
        <ul>
          {users.map((user, index)=>(
            <li key={user.id}>
              {user.name} - {user.country}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
```
###Iteracion de Components.
```
import React, { Component } from "react";
import classes from "./App.module.css";

const images = [
  {
    id: 1,
    author: {
      name: "Erinna",
      avatar: "https://robohash.org/abaliquamnisi.png?size=50x50&set=set1",
    },
    source: "http://dummyimage.com/181x100.png/cc0000/ffffff",
    views: 1,
  },
  {
    id: 2,
    author: {
      name: "Bevon",
      avatar: "https://robohash.org/quoseteum.png?size=50x50&set=set1",
    },
    source: "http://dummyimage.com/169x100.png/5fa2dd/ffffff",
    views: 2,
  },
  {
    id: 3,
    author: {
      name: "Pooh",
      avatar: "https://robohash.org/eaquequasiest.png?size=50x50&set=set1",
    },
    source: "http://dummyimage.com/172x100.png/cc0000/ffffff",
    views: 3,
  },
  {
    id: 4,
    author: {
      name: "Georgette",
      avatar:
        "https://robohash.org/ipsanihilarchitecto.png?size=50x50&set=set1",
    },
    source: "http://dummyimage.com/225x100.png/cc0000/ffffff",
    views: 4,
  },
];

const Image = (props) => (
  <div className={classes.card}>
    <img src={props.image.source} alt="Imagen" className={classes.image} />
    <div className={classes.footer}>
      <img src={props.image.author.avatar} alt="Avatar" className={classes.avatar}/>
      <div>{props.image.author.name}</div>
      <div>{props.image.views}</div>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className={classes.images}>
        {images.map((image) => (
          <Image image={image} key={image.id}/>
        ))}
      </div>
    );
  }
}

export default App;
```
###PAsar datos al iterar listas con React.
```
import React, { Component } from "react";
// import classes from "./App.module.css";

class App extends Component {
  state = {
    autos: [
      {
        name: "Toyota",
        price: 87315,
      },
      {
        name: "Mazda",
        price: 10077,
      },
      {
        name: "Chevrolet",
        price: 37917,
      },
      {
        name: "Hyundai",
        price: 71100,
      },
      {
        name: "Bentley",
        price: 14111,
      },
      {
        name: "Toyota",
        price: 1563,
      },
      {
        name: "Dodge",
        price: 89664,
      },
      {
        name: "Mercedes-Benz",
        price: 66484,
      },
      {
        name: "Audi",
        price: 81870,
      },
      {
        name: "Pontiac",
        price: 68137,
      },
    ],
    autoSeleccionado: {},
  };

  select = (autoSeleccionado, e) => {
    this.setState({
      autoSeleccionado,
    });
  };
  render() {
    return (
      <ul>
        {this.state.autos.map(auto => (
          <li key={auto.name}
          onClick={this.select.bind(this, auto)}
          style={{
            color: this.state.autoSeleccionado.name === auto.name ? "red" : "black"
          }}
          >
            <strong>{auto.name}</strong> - $ {auto.price}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
```
###Que son los Refs.
```
import React, { Component } from "react";
// import classes from "./App.module.css";

class Entrada extends Component {

  entrada = React.createRef();

  //Hace focus al input cuando se monta el componente
  componentDidMount() { 
    this.focus();
  }

  focus = () => {
    this.entrada.current.focus();
  };

  blur = () => {
    this.entrada.current.blur();
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.entrada} />
        <button onClick={this.focus}>Focus</button>
        <button onClick={this.blur}>Blur</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Refs</h1>
        <Entrada />
      </div>
    );
  }
}

export default App;
```
###Reenvio de la prop especial ref con forwardref.
```
import React, { Component } from "react";
// import { Chart } from "chart.js";
// import classes from "./App.module.css";

const FancyInput = React.forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref} />
  </div>
));

class App extends Component {
  entrada = React.createRef();

  componentDidMount() {
    console.log(this.entrada);
  }

  render() {
    return (
      <div>
        <h1>React Refs</h1>
        <FancyInput ref={this.entrada} />
      </div>
    );
  }
}

export default App;
```
###Manejando Inputs  no controladoscon Refs.
```
import React, { Component } from "react";
// import { Chart } from "chart.js";
// import classes from "./App.module.css";

class InputNoControlado extends Component {
  nombre = React.createRef();
  email = React.createRef();
  handleClick = () => {
    const nombre = this.nombre.current.value;
    const email = this.email.current.value;

    //Manejo de datos
    this.props.onSend({ nombre, email });
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.nombre} placeholder="Nombre" />
        <input type="text" ref={this.email} placeholder="Email" />
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

class App extends Component {
  //Recibe los datos en el momento que se envia.
  send = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Inpusts No controlados Refs </h1>
        <InputNoControlado onSend={this.send} />
      </div>
    );
  }
}

export default App;
```
###Manejando Inputs No controlados en formularios.
```
import React, { Component } from "react";
// import { Chart } from "chart.js";
// import classes from "./App.module.css";

class InputNoControlado extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    //Para acceder a los datos de los inputs.
    const nombre = e.target[0].value;
    const email = e.target[1].value;

    //Manejo de datos
    this.props.onSend({ nombre, email });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Email" />
        <button>Enviar</button>
      </form>
    );
  }
}

class App extends Component {
  send = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Inpusts No controlados Refs </h1>
        <InputNoControlado onSend={this.send} />
      </div>
    );
  }
}

export default App;
```
###Manejando inputs controlados con React.
```
import React, { Component } from "react";
// import { Chart } from "chart.js";
// import classes from "./App.module.css";

class InputControlado extends Component {
  state = {
    text: "",
    tieneError: false,
    color: "E8E8E8",
  };

  actualizar = (event) => {
    const text = event.target.value;
    const tieneError = text !== "" && text.length < 5;
    let color = "green";
    if (text.trim() === "") {
      color = "E8E8E8";
    }
    if (text.trim() !== "" && text.length < 5) {
      color = "red";
    }
    this.setState({ text, color });
  };

  render() {
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: "0.3em 0.6em",
      outline: "none",
    };
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.actualizar}
        style={styles}
      />
    );
  }
}

class App extends Component {
  send = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Inpusts controlados</h1>
        <InputControlado />
      </div>
    );
  }
}

export default App;
```
###Propagacion de datos con Inputs controlados.
```
import React, { Component } from "react";
// import { Chart } from "chart.js";
// import classes from "./App.module.css";

class InputControlado extends Component {
  state = {
    text: "",
    tieneError: false,
    color: "E8E8E8",
  };

  actualizar = (event) => {
    const text = event.target.value;
    let color = "green";
    if (text.trim() === "") {
      color = "E8E8E8";
    }
    if (text.trim() !== "" && text.length < 5) {
      color = "red";
    }
    this.setState({ text, color });

    // Propagando datos al padre
    this.props.onChange(this.props.name, text);
  };

  render() {
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: "0.3em 0.6em",
      outline: "none",
    };
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.actualizar}
        style={styles}
        placeholder={this.props.placeholder}
      />
    );
  }
}

class App extends Component {
  state = {
    name: "",
    email: "",
  };

  actualizar = (name, text) => {
    //Notacion de corchetes para actualizar el estado.
    this.setState({
      [name]: text,
    });
  };

  render() {
    return (
      <div>
        <h1>Inpusts controlados</h1>
        <InputControlado
          onChange={this.actualizar}
          placeholder="Nombre Completo"
          name="name"
        />
        <InputControlado
          onChange={this.actualizar}
          placeholder="Tu Email"
          name="email"
        />
        <h2>Nombre: {this.state.name}</h2>
        <h2>Email: {this.state.email}</h2>
      </div>
    );
  }
}
export default App;
```
###Usando el atributo 'for' en formularios.
```
import React, { Component } from "react";
// import { Chart } from "chart.js";
// import classes from "./App.module.css";

class InputNoControlado extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="name">Nombre</label>
          <input type="text" placeholder="Nombre" id="name" />
        </p>
        <p>
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </p>
        <button>Enviar</button>
      </form>
    );
  }
}

class App extends Component {
  send = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Atributo Ref</h1>
        <InputNoControlado onSend={this.send} />
      </div>
    );
  }
}
export default App;
```
###Ejemplo de formularios con opciones de Seleccion Multiples.
```
import React, { Component } from "react";
// import { Chart } from "chart.js";
// import classes from "./App.module.css";

class InputNoControlado extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="name">Nombre</label>
          <input type="text" placeholder="Nombre" id="name" />
        </p>
        <p>
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </p>
        <button>Enviar</button>
      </form>
    );
  }
}

class App extends Component {
  state = {
    techs: ["Vue"],
  };

  handleChange = (event) => {
    //Array.from() convierte esta colaccion en un [].
    const techs = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    this.setState({ techs });
  };

  render() {
    return (
      <div>
        <h1>Etiqueta Select</h1>
        <form>
          <select
            value={this.state.techs}
            onChange={this.handleChange}
            multiple={true}
          >
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
        <ul>
          {this.state.techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
```
###Ejemplo de Input Checkbox.
```
import React, { Component } from "react";
// import { Chart } from "chart.js";
// import classes from "./App.module.css";

class InputNoControlado extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="name">Nombre</label>
          <input type="text" placeholder="Nombre" id="name" />
        </p>
        <p>
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </p>
        <button>Enviar</button>
      </form>
    );
  }
}

class App extends Component {
  state = {
    active: true,
  };

  handleChange = (e) => {
    this.setState({
      active: e.target.checked,
    });
  };
  render() {
    const { active } = this.state;
    return (
      <div>
        {active && <h1>Etiqueta Checkbox</h1>}
        <form>
          <input
            type="checkbox"
            checked={this.state.active}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
export default App;
```
###Manejo y limite de errores dentro de componentes.
```
import React, { Component } from "react";
// import classes from "./App.module.css";

class Boton extends Component {
  state = {
    dispatchError: false,
  };

  dispatchError = () => {
    this.setState({ dispatchError: true });
  };

  render() {
    if (this.state.dispatchError) {
      throw new Error("Lo siento he fallado!");
    }
    return <button onClick={this.dispatchError}>Boton con Bugg</button>;
  }
}

class LimiteErrores extends Component {
  state = {
    tieneError: false,
  };

  //Solo se dispara si el componente hijo tiene un error.
  componentDidCatch(error, errorInfo) {
    this.setState({
      tieneError: true,
      error,
    });
  }

  render() {
    if (this.state.tieneError) {
      return (
        <div>
          <h1>Algo ha ido mal</h1>
          <p>Por favor, recarga la página o intenta más tarde</p>
          <p style={{color:'orangered'}}>{this.state.error && this.state.error.toString()}</p>
        </div>
      );
    }
    //Renderiza el componente hijo
    return this.props.children;
  }
}

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
      </div>
    );
  }
}
export default App;
```
###Haciendo una llamada a una API Rest con React.
```
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
```
###Ejemplo de buscador de peliculas.
```
import React, { Component } from "react";
// import classes from "./App.module.css";

class App extends Component {
  state = {
    movies: {},
    isLoading: false,
  };
//Sin async await
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({ isLoading: true });
  //   const title = event.target[0].value;
  //   const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d9a3ddd0";
  //   fetch(URL + "&t=" + title)
  //     .then((res) => res.json())
  //     .then((movies) => this.setState({ movies, isLoading: false }));
  // };

//Con async await
handleSubmit = async (event) => {
  event.preventDefault();
  this.setState({ isLoading: true });
  const title = event.target[0].value;
  const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d9a3ddd0";
  const res = await fetch(URL + "&t=" + title)
  const movie = await res.json()
    this.setState({ movie, isLoading: false });
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
```
###Comunicacion de metodos de instancia (Padre e hijo).
```
import React, { Component } from "react";

// import classes from "./App.module.css";

const Header = () => {
  const subtitleStyles = {
    fontWeight: "bold",
  };

  const headerStyles = {
    margin: "0.6em",
    borderRadius: "0.3em",
    border: "1px solid #d2d2d2",
    padding: "2em 0.4em",
    fontFamily: "sans-serif",
    fontSize: "1.5em",
  };
  return (
    <header style={headerStyles}>
      <div>Comunicacion entre componentes</div>
      <div style={subtitleStyles}>Metodos de instancia</div>
    </header>
  );
};

class Hijo extends Component {
  state = {
    message: "****",
  };
  dispatchAlert = (e, message = "Alert desde el Hijo") => {
    alert(message);
    this.setState({ message });
  };

  render() {
    return (
      <div>
        <h2> {this.state.message} </h2>
        <button onClick={this.dispatchAlert}>Hijo</button>
      </div>
    );
  }
}

class App extends Component {
  hijo = React.createRef();

  handleClick = () => {
    this.hijo.current.dispatchAlert(null, "Hola desde el padre");
  };

  state = {};

  render() {
    return (
      <div>
        <Header />
        <Hijo ref={this.hijo} />
        <button onClick={this.handleClick}>Padre</button>
      </div>
    );
  }
}

export default App;
```
###Comunicacion Event Bubbling (Hijo a Padre).
```
import React, { Component } from "react";

// import classes from "./App.module.css";

const Header = () => {
  return (
    <header>
      <div>
        <h2>( Hijo a Padre )</h2>
        </div>
      <h3>
        <strong>Event Bubbling</strong>
      </h3>
    </header>
  );
};

class Hijo extends Component {
  handleClick = (e) => {
    // e.stopPropagation();
    e.saludo = 'Hola desde el hijo'
    console.log('Click en el <Hijo />');
  };
  render() {

    return (
      <div style={boxStyles}
      onClick={this.handleClick}>
        <p>Hijo</p>
      </div>
    );
  }
}

const boxStyles = {
  margin: "0.5em",
  borderRadius: "0.3em",
  border: "1px solid #d2d2d2",
  padding: "0.5em",
  textAlign: "center",
};

class App extends Component {
  state = {};

  handleClick = (e) => {
    console.log('Click en el <Padre /> ', e.saludo);
  };

  render() {
    return (
      <div style={boxStyles}
      onClick={this.handleClick}
      >
        <Header />
        <Hijo />
      </div>
    );
  }
}

export default App;
```
###Comunicacion Parent Componenet (Hermanos).
```
import React, { Component } from "react";

// import classes from "./App.module.css";

const Header = () => {
  return (
    <header>
      <div>
        <p>( Hermanos )</p>
      </div>
      <h3>
        <strong>Parent Component</strong>
      </h3>
    </header>
  );
};

class ComponentA extends Component {
  render() {
    const { num } = this.props;
    return (
      <div style={blueStyles}>
        <button onClick={this.props.onAdd}>Component A ( {num} )</button>
      </div>
    );
  }
}

class ComponentB extends Component {
  render() {
    const { num } = this.props;
    return (
      <div style={redStyles}>
        <button onClick={this.props.onAdd}>Component B ( {num} )</button>
      </div>
    );
  }
}

const boxStyles = {
  margin: "0.5em",
  borderRadius: "0.3em",
  border: "1px solid #d2d2d2",
  padding: "0.5em",
  textAlign: "center",
};

const blueStyles = {
  ...boxStyles,
  border: "1px solid blue",
};

const redStyles = {
  ...boxStyles,
  border: "1px solid red",
};

class App extends Component {
  state = {
    countA: 0,
    countB: 0,
  };

  handleAddA = () => {
    this.setState(state => ({
      countA: state.countA + 1
    }));
  };

  handleAddB = () => {
    this.setState(state => ({
      countB: state.countB + 2
    }));
  };

  render() {
    const { countA, countB } = this.state;
    return (
      <div style={boxStyles}>
        <Header />
        <ComponentA num={countA} onAdd={this.handleAddB}
         />
        <ComponentB num={countB} onAdd={this.handleAddA} />
      </div>
    );
  }
}

export default App;
```
###Observer pattern.
```
import React, { Component } from "react";
import PubSub from "pubsub-js";
// import classes from "./App.module.css";

const Header = () => {
  return (
    <header>
      <div>
        <p>( Cualquiera )</p>
      </div>
      <h3>
        <strong>Observer Pattern</strong>
      </h3>
    </header>
  );
};
const boxStyles = {
  margin: "0.5em",
  borderRadius: "0.3em",
  border: "1px solid gray",
  padding: "0.5em",
  textAlign: "center",
};

class Bisnieto extends Component {
  state = {
    message: "******",
  }

  handleClick = () => {
    PubSub.publish("saludo", "Hola desde el bisnieto");
  };

  componentDidMount() {
    PubSub.subscribe("otro evento", (e, data) => {
      this.setState({ message: data.title });
    });
  }

  render() {
    return (
      <div style={boxStyles}>
        <p>{ this.state.message }</p>
        <button onClick={this.handleClick}>Nieto</button>
      </div>
    );
  }
}

class Nieto extends Component {
  render() {
    return (
      <div style={boxStyles}>
        <Bisnieto />
      </div>
    );
  }
}

class Hijo extends Component {
  render() {
    return (
      <div style={boxStyles}>
        <Nieto />
      </div>
    );
  }
}

class App extends Component {
  componentDidMount() {
    PubSub.subscribe("saludo", (e, data) => {
      alert(data);
    });
  }

  handleClick = () => {
    PubSub.publish("otro avento", { title: "Hola desde <App />" });
  };
  render() {
    return (
      <div style={boxStyles}>
        <button onClick={this.handleClick}>Padre</button>
        <Header />
        <Hijo />
      </div>
    );
  }
}

export default App;
```
###Patron Render Prop(Hijo a padre).
```
import React, { Component } from "react";

// import classes from "./App.module.css";

// const { Provider, Consumer } = React.createContext();

const Header = () => {
  return (
    <header>
      <div>
        <p>( Hijo a PAdre )</p>
      </div>
      <h3>
        <strong>Renders Props</strong>
      </h3>
    </header>
  );
};
const boxStyles = {
  margin: "0.5em",
  borderRadius: "0.3em",
  border: "1px solid gray",
  padding: "0.5em",
  textAlign: "center",
};

class List extends Component {
  render() {
    const { list, render } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          if (render) {
            return render(item, index);
          }

          return <li key={item.name}>{item.name}</li>;
        })}
      </div>
    );
  }
}

class App extends Component {
  state = {
    fruits: [
      { name: "Fresa", price: 10 },
      { name: "Sandia", price: 16 },
      { name: "Mango", price: 22 },
      { name: "Manzana", price: 18 },
    ],
  };

  render() {
    const { fruits } = this.state;
    return (
      <div style={boxStyles}>
        <Header />
        <List 
          list={fruits} 
          render={(data, index) => (
            <div>
              {data.name} - ${data.price}
            </div>
          )} 
        />
      </div>
    );
  }
}

export default App;
```
###Ejemplo de patron(render props).
```
import React, { Component } from "react";
import PropTypes from "prop-types";

// import classes from "./App.module.css";

// const { Provider, Consumer } = React.createContext();

const Header = () => {
  return (
    <header>
      <div>
        <p>( Hijo a Padre )</p>
      </div>
      <h3>
        <strong>Ejemplo Renders Props</strong>
      </h3>
    </header>
  );
};
const boxStyles = {
  margin: "0.5em",
  borderRadius: "0.3em",
  border: "1px solid gray",
  padding: "0.5em",
  textAlign: "center",
};

class Resize extends Component {
  static propTypes = {
    render: this.propTypes.func.isRequired,
  };
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  render() {
    const { width, height } = this.state;
    const { render } = this.props;

    return render({ width, height });
  }
}

class App extends Component {
  state = {};

  render() {
    return (
      <div style={boxStyles}>
        <Header />
        <Resize
          render={({ width, height }) => {
            return (
              <div>
                <h1> Width: {data.width}</h1>
                <li>{height}</li>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
```
###Patrón HOC "High Order Component" (Hijo ←→ Padre).
```
import React, { Component } from "react";

const Header = () => {
  return (
    <header>
      <div>
        <p>( Hijo a Padre )</p>
      </div>
      <h3>
        <strong>HOC High Order Component</strong>
      </h3>
    </header>
  );
};
const boxStyles = {
  margin: "0.5em",
  borderRadius: "0.3em",
  border: "1px solid gray",
  padding: "0.5em",
  textAlign: "center",
};

const withCounter = (Comp) => {
  return class extends Component {
    state = {
      num: 0,
    };

    add = () => {
      this.setState((state) => ({ num: state.num + 1 }));
    };

    render() {
      return <Comp num={this.state.num} add={this.add} />;
    }
  };
};

class App extends Component {
  render() {
    const { num, add } = this.props;
    console.log(this.props);
    return (
      <div style={boxStyles}>
        <Header />
        <h1>{ num }</h1>
        <button onClick={ add }>ADD</button>
      </div>
    );
  }
}

export default withCounter(App);
```
###Ejemplo HOC con opciones de configuración.
```
import React, { Component } from "react";

const Header = () => {
  return (
    <header>
      <div>
        <p>( Hijo a Padre )</p>
      </div>
      <h3>
        <strong>HOC High Order Component</strong>
      </h3>
    </header>
  );
};
const boxStyles = {
  margin: "0.5em",
  borderRadius: "0.3em",
  border: "1px solid gray",
  padding: "0.5em",
  textAlign: "center",
};

const withCounter = (Comp) => {
  return (config) => class extends Component {
    state = {
      num: config.clicks,
    };

    add = () => {
      this.setState((state) => ({ num: state.num + config.sumClicks }));
    };

    render() {
      return <Comp num={this.state.num} add={this.add} />;
    }
  };
};

class App extends Component {
  render() {
    const { num, add } = this.props;
    console.log(this.props);
    return (
      <div style={boxStyles}>
        <Header />
        <h1>{num}</h1>
        <button onClick={add}>ADD</button>
      </div>
    );
  }
}

export default withCounter(App)({
  clicks: 5,
  sumClicks: 3,
});
```
### Ejempo HOC (withSizes).
```
import React, { Component } from "react";

const Header = () => {
  return (
    <header>
      <div>
        <p>( Hijo a Padre )</p>
      </div>
      <h3>
        <strong>HOC High Order Component</strong>
      </h3>
    </header>
  );
};
const boxStyles = {
  margin: "0.5em",
  borderRadius: "0.3em",
  border: "1px solid gray",
  padding: "0.5em",
  textAlign: "center",
};

const withSizes = (Comp) =>
  class extends Component {
    state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    render() {
      const { width, height } = this.state;

      return <Comp width={width} height={height} />;
    }
  };

class App extends Component {
  render() {
    const { width, height } = this.props;
    return (
      <div style={boxStyles}>
        <Header />
        <h1>
          {width} - {height}
        </h1>
      </div>
    );
  }
}

export default withSizes(App);
```
###Hooks useState.
```
import React, { Component, useState } from "react";

const Header = () => {
  return (
    <header>
      <div>Hook useState</div>
    </header>
  );
};
const boxStyles = {
  margin: "0.5em",
  borderRadius: "0.3em",
  border: "1px solid gray",
  padding: "0.5em",
  textAlign: "center",
};

const App = () => {
  const [clicks, setClicks] = useState(0);

  const addClicks = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <Header />
      <button onClick={addClicks}>Clicks ({clicks})</button>
    </div>
  );
};

export default App;
```
###Ejemplo de Hook useState con booleans
```
import React, { useState } from "react";

const Header = () => {
  return (
    <header>
      <div>Hook useState</div>
    </header>
  );
};

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      {isActive && <Header />}
      <button onClick={toggle}>{isActive ? "Desactive" : "Active"}</button>
    </div>
  );
};

export default App;
```
###Ejemplo de Hook useState con objetos.
```
import React, { useState } from "react";

const Header = () => {
  return (
    <header>
      <div>Hook useState</div>
    </header>
  );
};

const App = () => {
  const [clicks, setClicks] = useState(188);
  const [title, setTitle] = useState("Hooks useState");

  const addClicks = () => {
    setClicks(clicks + 1);
  };

  const handleInput = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  return (
    <div>
      <Header />
      <input type="text" onChange={handleInput} value={title} />
      <button onClick={addClicks}>Clicks ({clicks})</button>
      <h3> {title}</h3>
    </div>
  );
};

export default App;
```
###Hook useEffect.
```
import React, { useState, useEffect } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hook useEffect</div>
    </header>
  );
};

const App = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log("Dentro de useEffect", clicks);
    console.log('%c----------------------------', 'color: green');

    return () => {
      console.log("Dentro de useEffect - return", clicks);
    }
  });

  const add = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="container-center">
      <Header />
      <button onClick={add}>Clicks ({clicks})</button>
    </div>
  );
};

export default App;
```
###Ejemplos de use con useEffect.
```
import React, { useState, useEffect } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hook useEffect</div>
    </header>
  );
};

const App = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    }
  });
  return (
    <div className="container-center">
      <Header />
      <h1>
        X: {mouseX} Y: {mouseY}
      </h1>
    </div>
  );
};

export default App;
```
###Controlar la ejecución de useEffect().
```
import React, { useState, useEffect } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hook useEffect</div>
    </header>
  );
};

const App = () => {
  const [num, setNum] = useState(0);
  const [emoji, setEmoji] = useState("😀");

  const addNum = () => {
    setNum(num + 1);
  };

  const toggleEmoji = () => {
    const nextEmoji = emoji === "😀" ? "👻" : "😀";
    setEmoji(nextEmoji);
  };

  useEffect(() => {
    alert("useEffect 👻");
  },[num]);

  return (
    <div className="container-center">
      <Header />
      <button onClick={addNum}>
        ADD <span>({num})</span>
      </button>
      <button onClick={toggleEmoji}>Alternar Emoji</button>
      <h1>{emoji}</h1>
    </div>
  );
};

export default App;
```
###Ejemplo de solicitud HTTP con hook useEffect().
```
import React, { useState, useEffect } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hook useEffect</div>
    </header>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    //Fetch nos devuelve una promesa, y le pasamos el json para parcearla
      .then((response) => response.json())
      .then(users => {
        setUsers(users)
        setIsFetching(false);
      });
    //Se ejecuta en este caso solo una vez, ya que en la dependencia le hemos pasaso el [].
  }, []);

  return (
    <div className="container-center">
      <Header />
      {isFetching && <h1>Cargando...</h1>}
      <lu>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </lu>
    </div>
  );
};

export default App;
```
###Hook useLayoutEffect().
```
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
```
###Hook useContext().
```
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
```
###Hook useRef().
```
import React, { useState, useRef } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

const App = () => {
  // const [clicks, setClicks] = useState(0);
  // const add = () => setClicks(clicks + 1);
  
  const entrada =useRef()

  //Current lo utilizamos para acceder al elemento.
  const focus = () => entrada.current.focus()
  const blur = () => entrada.current.blur()

  return (
    <div className="container-center">
      <Header />
      {/* <button onClick={add} className="dBlue">
        Clicks ({clicks})
      </button> */}
      <input 
        type="text"
        placeholder="Ingresa tu texto"
        ref={entrada}
      />
      <button onClick={focus}>
        Focus
      </button>
      <button onClick={blur}>
        Blur
      </button>
    </div>
  );
};

export default App;
```
###Ejemplos con useState(), useEffect() y useRef().
```
import React, { useState, useRef, useEffect } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

const App = () => {
  const [name, setName] = useState("");

  const [products, setProducts] = useState([]);

  const handleInput = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const entrada = useRef();

  //Se produce este Effect cuando el componente es montado.
  useEffect(() => {
    setTimeout(() => {
      if (name === entrada.current.value) {
        // Solicitud FETCH
        fetch(
          "https://universidad-react-api-test.luxfenix.vercel.app/products?name=" +
            name
        )
          .then((res) => res.json())
          .then((data) => setProducts(data.products));
      }
    }, 600);
    //Queremos que se dispare este efecto cuando la propiedad name se haya actualizado.
  }, [name]);

  return (
    <div className="container-center">
      <Header />
      <input type="text" onChange={handleInput} ref={entrada} />

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```
###Ejemplo aplicando hooks de terceros de NPM.
```
import React, { useState, useRef, useEffect } from "react";
import { useDebounce } from "use-debounce";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

const App = () => {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [search] = useDebounce(name, 1000);

  const handleInput = (e) => {
    const name = e.target.value;
    setName(name);
  };

  //Se produce este Effect cuando el componente es montado.
  useEffect(() => {
    // Solicitud FETCH
    fetch(
      "https://universidad-react-api-test.luxfenix.vercel.app/products?name=" +
        name
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.products));

    //Queremos que se dispare este efecto cuando la propiedad name se haya actualizado.
  }, [search]);

  return (
    <div className="container-center">
      <Header />
      <input type="text" onChange={handleInput} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```
###Hook useReducer().
```
import React, { useState, useRef, useEffect, useReducer } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

const App = () => {
  //dispatch({ type: 'sumando', action: 'Lo que sea' })
  const reducer = (state, action) => {
    switch (action.type) {
      case "SUMANDO":
        return {
          ...state,
          count: state.count + 1,
        };
        break;
      case "RESTANDO":
        return {
          ...state,
          count: state.count - 1,
        };

      case "SET_INPUT":
        return {
          ...state,
          input: action.input,
        };
      default:
        return state;
    }
  };

  const initialState = {
    count: 0,
    input: "Nacho",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const sumando = () => {
    dispatch({ type: "SUMANDO" });
  };

  const restando = () => {
    dispatch({ type: "RESTANDO" });
  };

  const handleInput = (e) => {
    dispatch({ type: "SET_INPUT", input: e.target.value });
  };

  return (
    <div className="container-center">
      <Header />
      <input type="text" onChange={handleInput} value={state.input} />
      <button onClick={sumando}>Sumar</button>
      <button onClick={restando}>Restar</button>
      <h2>
        {state.count} - {state.input}
      </h2>
    </div>
  );
};

export default App;
```
###Hook useInperativeHanle().
```
import React, {
  useState,
  useRef,
  useEffect,
  useReducer,
  useImperativeHandle,
  forwardRef,
} from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

const FancyInput = forwardRef((props, ref) => {
  const [text, setTexto] = useState("***");
  const entrada = useRef();

  useImperativeHandle(ref, () => ({
    dispatchAlert: () => {
      alert("Hola");
    },
    setParragraph: (message) => {
      setTexto(message);
    },

    focusInput: () => {
      entrada.current.focus();
    },
  }));
  return (
    <div>
      <p>{text}</p>
      <input type="text" ref={entrada} />
    </div>
  );
});

const App = () => {
  const fancyInput = useRef();

  const handleClick = () => {
    fancyInput.current.focusInput()
  };

  return (
    <div className="container-center">
      <Header />
      <FancyInput ref={fancyInput} />
      <button onClick={handleClick}>Disparar</button>
    </div>
  );
};

export default App;
```
###React.memo() para rendimiento.
```
import React, { useState } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

//Tenemos que envolver el componente con React.memo para que cuando se renderize solo se actualize esto y no todos.
const Counter = React.memo(({ count }) => {
  console.log("%cRender <Counter />", "color:blue");

  return <h1>{count}</h1>;
});

const Title = React.memo(({ text }) => {
  console.log("%cRender <Title />", "color:orangered");

  return <h1>{text}</h1>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Grande Nacho!");

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  return (
    <div className="container-center">
      <Header />
      <input type="text" onChange={handleTitle} />
      <button onClick={handleClick}>Añadir</button>
      <Counter count={count} />
      <Title text={title} />
    </div>
  );
};

export default App;
```
###User React.memo() con diferenciacion manual.
```
import React, { useState } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

//Tenemos que envolver el componente con React.memo para que cuando se renderize solo se actualize esto y no todos.
const Counter = React.memo(({ count }) => {
  console.log("%cRender <Counter />", "color:blue");

  return <h1>{count}</h1>;
});

const Title = React.memo(({ text }) => {
  console.log("%cRender <Title />", "color:orangered");

  return <h1>{text}</h1>;
});

const TitleNested = React.memo(
  ({ info }) => {
    console.log("%cRender <TitleNested />", "color:purple");

    return <h1>{info.text}</h1>;
  },
  //Creamos el algoritmo de diferenciacion.
  (prevProps, nextProps) => {
    //Si retorna true esta no se va a renderizar
    //Si retorna false, si se va a renderizar
    // // console.log(prevProps, nextProps);
    return prevProps.info.text === nextProps.info.text;
  }
);

const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Grande Nacho!");

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  return (
    <div className="container-center">
      <Header />
      <input type="text" onChange={handleTitle} />
      <button onClick={handleClick}>Añadir</button>
      <Counter count={count} />
      <Title text={title} />
      <TitleNested
        info={{
          text: title,
        }}
      />
    </div>
  );
};

export default App;
```
###Hooks useCallback().
```
import React, { useState, useCallback } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

//REACT MEMO Y USECALLBACK NOS AYUDA A EVITAR EL RENDERIZADO QUE NO SE VAYAN A REQUERIR DENTRO
//DE LOS COMPONENTES CUANDO LAS PROPS DE LOS COMPONENTES NO HANYAN CAMBIADO.
const getRandomColor = () => "#" + Math.random().toString(16).slice(2, 8);

const Button = React.memo(({ callback, children }) => {
  const styles = {
    padding: "1em",
    fontSize: "20px",
    background: getRandomColor(),
  };
  return (
    <button style={styles} onClick={callback}>
      {children}
    </button>
  );
});

const App = () => {
  const [a, setA] = useState(0);

  const incrementA = useCallback(() => {
    setA((a) => a + 1);
  }, []);
  return (
    <div className="container-center">
      <Header />
      <Button callback={incrementA}>Increment A</Button>
      <h1>A: {a}</h1>
    </div>
  );
};

export default App;
```
###Hook useCallback con dependencias.
```
import React, { useState, useCallback } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

const getRandomColor = () => "#" + Math.random().toString(16).slice(2, 8);

const Button = React.memo(({ callback, children }) => {
  const styles = {
    padding: "1em",
    fontSize: "20px",
    background: getRandomColor(),
  };
  return (
    <button style={styles} onClick={callback}>
      {children}
    </button>
  );
});

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const incrementA = useCallback(() => {
    setA((a) => a + 1);
  }, []);

  //EL HOOK USECALLBACK ALMACENA EN MEMORIA ESTE CALLBACK Y EN CUANTO SE GUARDA
  //LA PROPIEDAD A VALE 0 Y 0 + 0 EN CERO Y NO ESTAMOS OBTENIENDO EL RESULT DESEADO.
  const incrementB = useCallback(() => {
    setB((b) => b + a);
  }, [ a ]);

  return (
    <div className="container-center">
      <Header />
      <Button callback={incrementA}>Increment A</Button>
      <Button callback={incrementB}>Increment B</Button>
      <h1>
        A: {a} - B: {b}
      </h1>
    </div>
  );
};

export default App;
```
###Hook useMemo para mejorar el renderizado.
```
import React, { useState, useMemo } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

const SuperList = ({ list, log }) => {
  console.log("%cRender <SuperList />" + log, "color: green");
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
const App = () => {
  const [clicks, setClicks] = useState(0);

  const increment = () => setClicks(clicks + 1);

  //VAMOS A GUARDAR EL VALOR DEL COMPONENTE QUE VA A ESTAR MEMORIZADO EN LA MEMORIA.
  //USEMEMO SE PUEDE UTILIZAR CUANDO RENDERIZAMOS LISTAS MUY GRANDES.
  const memoList = useMemo(() => {
    return <SuperList list={["Mustang", "GTO", "Dodge"]} log="Memorizado" />;
  }, []);

  return (
    <div className="container-center">
      <Header />
      <button onClick={increment}>Clicks ({clicks})</button>
      <SuperList list={["yamaha", "honda", "bmw", "kawa"]} log="Normal" />

      {memoList}
    </div>
  );
};

export default App;
```
###Hooks personalizados.
```
import React, { useState, useMemo } from "react";
import { useEffect } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

const useSizes = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const handleResize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, height };
};
const App = () => {
  const { width, height } = useSizes();
  return (
    <div className="container-center">
      <Header />

      <h1>
        Width: { width }px Height: { height }
      </h1>
    </div>
  );
};

export default App;
```
###Hook personalizados para hacer solicitudes HTTP.
```
import React, { useState, useMemo, useEffect } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setFetching(false);
      });
  }, [url]);

  return [data, isFetching];
};

const App = () => {
  const [users, isFetching] = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div className="container-center">
      <Header />
      {isFetching && <h1>Loading...</h1>}
      <ul>
        {users.map(user =>(
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```
###Hook personalizados para hacer solicitudes HTTP 2.
```
import React, { useState, useMemo, useEffect } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

const useFetch = (url, initialState = []) => {
  const [data, setData] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    setFetching(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setFetching(false);
      });
  }, [url]);

  return [data, isFetching];
};

const App = () => {
  const [clicks, setClicks] = useState(1);
  const [user, isFetching] = useFetch('https://jsonplaceholder.typicode.com/users/'+ clicks, {})

  const añadir = () => {
    setClicks(clicks + 1)
  }
  return (
    <div className="container-center">
      <Header />
      {isFetching && <h1>Loading...</h1>}
    <h1>{user.name}</h1>
    <p>{user.phone}</p>
    <button onClick={añadir}>
      Clicks ({clicks})
    </button>
      {/* <ul>
        {users.map(user =>(
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
```
###Entendiendo la prop children en profundidad.
```
import React, { useState, useMemo, useEffect, Component } from "react";
import "./App.css";
import "./Global.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

// const Parent = ({ children }) => {
//   return (
//     <div className="box">
//       <div className="box blue">{children}</div>
//       <div className="box red">{children}</div>
//     </div>
//   );
// };

class Parent extends Component {
  render() {
    const { children } = this.props;
    console.log(children);
    return (
      <div className="box">
        <div className="box blue">
          {/* {children} */}
        </div>
        <div className="box red">
          {/* {children} */}
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Parent>
          Hijo de texto
          <div>Elemento Contenedor</div>
          {()=> {}}
          {777}
          otro texto
          {`La sumas es : ${2 + 7}`}
        </Parent>
      </div>
    );
  }
}

export default App;
```
###Children con las utilidades de React.Children.
```
import React, { useState, useMemo, useEffect, Component } from "react";
import "./App.css";
import "./Global.css";

const Header = () => {
  return (
    <header>
      <div className="container">Hooks!!!</div>
    </header>
  );
};

class Parent extends Component {
  render() {
    const { children: ch } = this.props;
    const childrenArray = React.Children.toArray(ch)

    //SOLO FILTRA LOS CHILDREN QUE PUEDE RENDERIZAR.
    const children = childrenArray.map((child, index)=> (
      <li key={index}>
        {child}
      </li>
    ))

    return (
      <div className="box">
        <div className="box blue">{children}</div>
        <div className="box red">{/* {children} */}</div>
      </div>
    );
  }
}

//ES VALIDO PASAR FUNCIONES A LOS CHILDREN PERO NO ES VALIDO
//TRATAR DE RENDERIZAR UNA FUNCION.
class App extends Component {
  render() {
    return (
      <div>
        <Parent>
          <span>Yamaha</span>
      
        </Parent>
      </div>
    );
  }
}

export default App;
```
###Workshop de composicion esplicita con React Children.
```
import React, { useState, useMemo, useEffect, Component } from "react";
import "./App.css";
import { Button, Counter, Title } from "./components/Counter";

const Header = () => {
  return (
    <header>
      <div className="container">React Children!</div>
    </header>
  );
};

const App = () => (
  <div>
    <Header />
    <Counter>
      <Title />
      <Title>
        {(click) => (
          <div>
          <h1>{click}</h1>
          </div>
        )}
      </Title>
      <Button type='decrement' />
      <Button type='increment' />
    </Counter>
  </div>
);
export default App;
```
```
import React, { useState } from "react";

export const Button = ({ type, onIncrement, onDecrement }) => {
  const action = () => {
    return type === "increment" ? onIncrement() : onDecrement();
  };
  return (
    <button onClick={action}>
      {type === "increment" ? "Agregar" : "Quitar"}
    </button>
  );
};

export const Title = ({ clicks, children }) => {
  return typeof children === "function" ? (
    children(clicks)
  ) : (
    <span>{clicks}</span>
  );
};

export const Counter = ({ children }) => {
  const [clicks, setClicks] = useState(0);

  const increment = () => setClicks(clicks + 1);
  const decrement = () => setClicks(clicks - 1);

  if (!children) {
    const styles = {
      background: "#CC6040",
      borderRadius: ".3em",
      padding: ".3em 1em",
      color: "#FFF",
    };
    return (
      <div style={styles}>
        Wops! debes agregar componentes como {"<Button />"}
      </div>
    );
  }
  const _children = React.Children.map(children, (child) => {
    console.log(child);
    let props = {};

    if (child.type === Title) {
      props.clicks = clicks;
    }

    if (child.type === Button) {
      props.onIncrement = increment;
      props.onDecrement = decrement;
    }
    return React.cloneElement(child, props);
  });

  return _children;
};
```
###Ejemplo React.lazy y React.Suspense.
```
import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import { MoonLoader } from 'react-spinners'

// import Image from "./components/Image";

const Header = () => {
  return (
    <header>
      <div className="container">React Children!</div>
    </header>
  );
};

//Code Splitting - Importacion dinamica
const Image = lazy(() => import("./components/Image"));

const App = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'column'
  }

  return (
    <div style={styles}>
      <button onClick={toggle}>{show ? "Ocultar" : "Mostrar"}</button>
      {show && (
        <Suspense fallback={<MoonLoader />}>
          <Image />
        </Suspense>
      )}
    </div>
  );
};
export default App;

```
```
import React from "react";
import './Image.css'

const Image = () => {

    
    return (
      <div className='show'>
        <img src="https://images.pexels.com/photos/7465050/pexels-photo-7465050.jpeg" alt="Imagen" width='100%'
        />
      </div>
    )
  }

  export default Image;
```
###Instalacion de react router y montando primeras rutas.
```
import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">React Router!</div>
    </header>
  );
};

const Hola = () => {
  return <h1>Hola</h1>;
};

const Productos = () => {
  return <h1>Productos</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hola" element={<Hola />} />
        <section>
          <Route path="/productos" element={<Productos />} />
        </section>
        <div>
          <Route path="/productos" element={<Productos />} />
        </div>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
```
