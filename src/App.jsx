import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";
import Menu from "./components/menu/menu";
import useScreenSize from './hooks/useScreenSize.js';

/*
function App() {
	let {width} = useScreenSize();
  return <>
    <Header ancho={width} />
    <Menu />
    <hr/>
    <Footer />
  </>
}*/


function App() {
	let {width} = useScreenSize();
  return (
    <Router>
      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
      <Header ancho={width} />

      <Routes>
        {/* DEFINIMOS LAS RUTAS QUE VAMOS A USAR EN ROUTES*/}
        <Route path="/" element={<Body/>} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

       <Footer />
      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
    </Router>
  );
}

export default App;
