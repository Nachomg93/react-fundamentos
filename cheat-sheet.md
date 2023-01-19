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