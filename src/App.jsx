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
