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
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
