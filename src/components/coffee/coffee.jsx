import React from 'react';
import BannerTitle from '../bannerTitle/bannerTitle';
import CoffeeBanner from './coffeeBanner/coffeeBanner';
import NuestroCafe from '../../assets/img/nuestro_cafe.png';
import CurvaTostado from '../../assets/img/curva_tostado.jpg';
import MetodosCafe from '../../assets/img/metodos_cafe.png';


/**
*
* Datos de la sección de café
* @param {text} title -Representa el título de la sección
*@param {object} nrTitle -Contiene los datos de los párrafos para cada sección
* @param {text} firtsTextLine -Es el texto del primer párrafo
* @param {array} otherTextLines -Arreglo con los datos de los restantes párrafos
* @param {text} text -El texto para los otros párrafos que no sean el primero
* @param {text} classText -La clase que se aplicará a ese párrafo específico, exceptuando al primer párrafo
* @param {text} img -La imagen del banner para cada sección
* @param {boolean} Button -Si tiene o no botón
* @param {text} btnTitle -El texto que se mostrará en el botón
*/
const data=[
    {
        title:"",
        nrTextLine:{
            firtsTextLine:"El olor al café, a unos granos recién tostados, es la mejor bienvenida que cada día planificamos para brindarles cuando abrimos las puertas de nuestras tiendas. Pero eso es sólo el comienzo.",
            otherTextLines:[
                {text:"De cuerpo entero, un poco ahumado, con notas cítricas, con fuerte presencia de chocolate…el desafío que tenemos constantemente es que cada uno de nuestros clientes encuentre su mezcla favorita y a la vez, que explore nuestras amplias selecciones más singulares. ",
                classText:""},
                {text:"Para alcanzarlo nos abastecemos de los mejores granos de café arábicos siguiendo siempre estrictos principios éticos.",
                classText:""}
               
            ]
        },
        img:NuestroCafe
    },
    {
        title:"Nuestro tostado Starbucks",
        nrTextLine:{
            firstTextLine:"Cada café que ofrecemos exige un perfil de tostado único para crear una taza con el máximo aroma, acidez, cuerpo y sabor. Al trabajar en un delicado balance en calor, tiempo y arte, nuestros maestros en el tostado hacen resaltar estas únicas características de cada grano de café. ",
            otherTextLines:[
                {text:"Rubio",classText:"optionText"},
                {text: "El café Starbucks tostado rubio es tostado en menos tiempo, tiene un cuerpo ligero y sabores suaves.",
                classText:""},
                {text:"Medio",classText:"optionText"},
                {text:"El café Starbucks tostado rubio es tostado en menos tiempo, tiene un cuerpo ligero y sabores suaves.",
                classText:""},
                {text:"Oscuro",classText:"optionText"},
                {text:"Los cafés con tostado oscuro presentan un cuerpo completo y sabores fuertes y robustos. ",
                classText:""},
            ]
        },
        img:CurvaTostado
    },
    {
        title:"Descubre los métodos de preparación en Starbucks, ¿Cuál es el correcto para vos?",
        nrTextLine:{
            firstTextLine:"Desde el cultivo responsable hasta el tostado, cada detalle en la elaboración de manera artesanal es fundamental para poder disfrutar de una taza de café Starbucks. Y además de la esencia de los granos, sabemos que la forma en la que se prepara el café tiene un efecto sorprendente en el sabor de cada taza y define su cuerpo.",
            otherTextLines:[
                {text:"Es por eso que nuestros magníficos baristas se enfocan en crear diariamente rituales escogiendo diferentes métodos de preparación para que sean nuestros clientes quienes se sorprenden. Así, de la mano de las explicaciones de nuestros expertos, no sólo cultivarán la curiosidad sino que podrán seleccionar el mejor método para su experiencia Starbucks.",
                classText:""}
              
                
            ]
        },
        img:MetodosCafe,
        button:true,
        btnTitle:"Conocé nuestros métodos"
    }


];


/**
*
* Componente que permite mostrar la información de la sección de café
*  @return {jsx} Retorna un objeto jsx que contendrá todos los componentes para mostrar la información sobre café
*/
function Coffee(){
 return(
    <>
     <BannerTitle title={"Nuestro Café"} />
     <div className="d-flex justify-content-center">
        <div>
            { data.map((banner,index)=>{
                return(<CoffeeBanner data={banner} key={index} />);
            })}
        </div>
      
     </div>
    
    </>
 )
}

export default Coffee;