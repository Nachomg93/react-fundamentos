import React, { Component } from "react";
import "./App.css";

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
  <div className="card">
    <img src={props.image.source} alt="Imagen" className="image" />
    <div className="footer">
<img src={props.image.author.avatar} alt="Avatar" />
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="images">
        {images.map((image) => (
          <Image image={image} />
        ))}
      </div>
    );
  }
}

export default App;
