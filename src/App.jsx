import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MenuPage from "./routes/menuRoute";
import HomePage from "./routes/homeRoute";
import ExperienciaPage from "./routes/experienciaRoute";
import Wrapper from "./components/wrapper"
//import Body from "./components/body/body";
//import Menu from "./components/menu/menu";

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
  {alert(width)}
  return (
    
    <Router>
      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
      <Header width={width} />
      <Wrapper>
        <Routes>
            {/* DEFINIMOS LAS RUTAS QUE VAMOS A USAR EN ROUTES*/}
            <Route path="/" element={<HomePage width={width}/>}/>
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/experiencia" element={<ExperienciaPage width={width} />} />
        </Routes>
      </Wrapper>
       <Footer width={width}/>
      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
    </Router>
    
  );
}

export default App;
