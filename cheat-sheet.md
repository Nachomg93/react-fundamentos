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
###Integrar librerias de terceros usando las Refs de React.
```

```