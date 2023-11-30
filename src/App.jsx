/*-----Importación de librerías-----*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState, useReducer } from "react";
import './App.css';
/*-----Importación de componentes-----*/
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MenuPage from "./routes/menuRoute";
import HomePage from "./routes/homeRoute";
import ExperienciaPage from "./routes/experienciaRoute";
import CoffeePage from "./routes/coffeeRoute.jsx";
import AdminPage from "./routes/adminRoute";
import LocationPage from "./routes/locationRoute.jsx";
import Wrapper from "./components/wrapper";

/*-----Imagenes Iniciales-----*/
import Bagel from './assets/Bagel-Sandwich.png';
import Moneda from './assets/Moneda.png';
import Croissant from './assets/Croissant-Relleno-Avellana.png';
import Chocolate from './assets/Chocolate Caliente.png';
import DulceLeche from './assets/Dulce de leche Frapp.png';
import ICM from './assets/Iced Caramel Macchiato.png';

/*-----Hook particular para controlar el tamaño de la ventana-----*/
import useScreenSize from './hooks/useScreenSize.js';

/*-----Contextos-----*/
export const WindowSizeContext = createContext(null);
export const ThemeContext = createContext(null);
export const AppContext = createContext(null);



/**
*
* Reducer para controlar el agregado de nuevos productos al menú
* 
*/
function reducer(state,action){
  switch(action.type){
    case "ADD_PRODUCT":
      state=action.payload;
      localStorage.setItem("products",JSON.stringify(state));
      alert("Nuevo Producto Agregado Exitosamente");
      return state;
    default:
      return state;
  }
}
/**
*
* Función que permite establecer el valor inicial para los productos. Si no hay algo en el localStorage, se dará al useReduce el
*valor indicado en la variable initialState. En caso contrario, se recupera la información del localStorage y se retornan esos datos
*para que el useReduce inicie con esos valores.
*
* @return {array} initialState -Representa los datos iniciales de los productos del menù
* 
*/

function setInitialState(){
  let initialState=[

    {
    "title":"Comida",
    "productList":[
    {img:Bagel,name:"Sandiwichs y Preparados"},
     {img:Moneda,name:"Snacks"},
     {img:Croissant,name:"Bakery"}
    ]},
    {"title":"Bebidas",
    "productList":[
    {img:Chocolate,name:"Chocolate Caliente"},
     {img:DulceLeche,name:"Frapuccino"},
     {img:ICM,name:"Cafés Helados"}
     ]
    
      },
      {"title":"En Casa",
      "productList":[
       ]
      
        }
  ];
  if(localStorage.getItem("products")!==null){
    initialState=JSON.parse(localStorage.getItem("products"));
  };

  return initialState;
}


/**
*
* Componente principal de la aplicaciòn
*  @return {jsx} Retorna un objeto jsx que contendrá todos los componentes, rutas, y proveedores necesarios para hacer funcionar la
* aplicación.
*/
function App() {
  const initialState=setInitialState();
	const {width} = useScreenSize();
  const [theme, setTheme] = useState("dark");
  const [prodState,dispatch]=useReducer(reducer,initialState);
   
  return (
    <AppContext.Provider value={{prodState,dispatch}}>
    <WindowSizeContext.Provider value={width}>
    <ThemeContext.Provider value={{theme,setTheme}}>
    <Router>
      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
      <Header/>
      <Wrapper>
        <Routes>
            {/* DEFINIMOS LAS RUTAS QUE VAMOS A USAR EN ROUTES*/}
            <Route path="/" element={<HomePage />}/>
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/experiencia" element={<ExperienciaPage/>} />
            <Route path="/coffee" element={<CoffeePage/>} />
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/localizar" element={<LocationPage/>} />

            {/* Nota JH: Evitaria la redundancia en las rutas solo para una mayor
            legibilidad, ya que cuando quiero ir a ver la ruta por ejemplo
            <MenuPage/> me encuentro que devuelve <Menu/>, puede quedar raro a la lectura,
            pero no afecta en nada a la web*/}
        </Routes>
      </Wrapper>
       <Footer/>
      {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
    </Router>
    </ThemeContext.Provider>
    </WindowSizeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;

//Nota JH: Notas adicionales que no se donde meter
// - No es necesario importar React en cada componente, ya que no lo estas usando
// - Mejoraria el naming de algunos componentes. Sea por mayusculas o por buscar un nombre mas descriptivo
// - El nombre de los assets buscaria simplificarlos, a poder ser un solo nombre, sin espacios, y en minusculas