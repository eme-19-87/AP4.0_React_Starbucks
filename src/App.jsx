import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState, useReducer } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MenuPage from "./routes/menuRoute";
import HomePage from "./routes/homeRoute";
import ExperienciaPage from "./routes/experienciaRoute";
import AdminPage from "./routes/adminRoute";
import Wrapper from "./components/wrapper"

import useScreenSize from './hooks/useScreenSize.js';
export const WindowSizeContext = createContext(null);
export const ThemeContext = createContext(null);
export const AppContext = createContext(null);

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
	const {width} = useScreenSize();
  alert(width);
  const [theme, setTheme] = useState("ligth");
  return (
    <WindowSizeContext.Provider value={width}>
    <ThemeContext.Provider value="ligth">
    <Router>
      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
      <Header/>
      <Wrapper>
        <Routes>
            {/* DEFINIMOS LAS RUTAS QUE VAMOS A USAR EN ROUTES*/}
            <Route path="/" element={<HomePage />}/>
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/experiencia" element={<ExperienciaPage/>} />
            <Route path="/admin" element={<AdminPage/>} />
        </Routes>
      </Wrapper>
       <Footer/>
      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
    </Router>
    </ThemeContext.Provider>
    </WindowSizeContext.Provider>
  );
}

export default App;
