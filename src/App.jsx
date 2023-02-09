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
