import React, {useState,useContext} from 'react';
import CategoryOption from './categoryOption/categoryOption';
import {AppContext} from '../../App';
//se instala con npm i react-hook-form
import {useForm} from 'react-hook-form';
import BannerTitle from '../bannerTitle/bannerTitle';


/**
*Función que permite dejar en blanco los inputs del formulario una vez creado el nuevo producto
* 
*/

function eraseInput(){
	const nameInput=document.getElementById("nomProd");
	const imgInput=document.getElementById("imgProd");
	nameInput.value="";
	imgInput.value=null;
	//Notas JH: No es recomendable acceder a las propiedades del DOM directamente
	//en React. Es mejor usar el estado para manejar los valores de los inputs.
	
}

/**
*
* Función que permite convertir una imagen a base64 para guardarla en formato de string
*  @param {file} file -Representa los datos del archivo para realizar la conversión
* @return {promise} -Retorna una promesa 
*/
async function encodeFileAsBase64URL(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
            resolve(reader.result);
        });
        reader.readAsDataURL(file);
    });
};


/**
*
* Función que permite agregar un nuevo producto a la lista de productos existentes. Es la función que se ejecutará dentro del 
* handleSubmit cuando se presione el botón para dar de alta el producto
*  @param {text} name -Representará al nombre del producto
*  @param {text} category -Representará si el producto es una bebida, una comida, etc.
*  @param {text} img -La imagen en base64 que se almacenará
*  @param {function} dispatch -La función dispatch asociada al useReduce que servirá para modificar el estado de los productos
*  y permitirá agregar al nuevo.
*
* 
*/
function addNewProduct(name,category,img,prodState,dispatch){
	let products=prodState;

	const newProduct={"img":img,"name":name}
	products.map((prod)=>{
		if(prod.title===category){
			prod.productList.push(newProduct);
		}
		return null;
	});
	eraseInput();
	dispatch({
		type: "ADD_PRODUCT",
		payload:products
	});

	//Notas JH: addNewProduct() junto a eraseInput() son funciones que modifican el estado
	//del componente Admin. Es mejor que esten dentro del componente Admin para que sea más
	//fácil de leer y entender.
}

/**
*
* Componente que permitirá mostrar el formulario para agregar un nuevo producto;
* @return {jsx} -Retorna los elementos para mostrar el formulario de alta de producto
*/
function Admin(){
document.title="Administrador"; //Notas JH: Es un muy buen detalle que no habia visto a la primera, 
								// investiga acerca de React Helmet, para modificar lo que tengamos en la etiqueta <head>
const [img,setImg]=useState("");
const {prodState,dispatch}=useContext(AppContext);
const products=prodState;

//Se ejecuta cuando se agrega una nueva imagen y la modifica a base64
 const onChange = (e) => {
	encodeFileAsBase64URL(e.target.files[0]).then((encodeImg)=>{
		setImg(encodeImg);
	});


 }
	
	

	/*
	register permite registrar cada input
	handleSubmit maneja el envío del formulario. Conviene crear una función que
	sea la encargada de ejecutar el handleSubmit y que quede más legible.
	formState tiene otros métodos para menejar el estado del formulario. Uno de
	ellos es errors el cual permite manejar los errores del formulario.
	*/
	const {register, 
		 handleSubmit, 
		 formState:{errors}
	}=useForm(); //Notas JH: Me gusto mucho que te animes a usar otros Hooks por tu cuenta

	//La función onSubmit es lo que se ejecutará cuando se presione el botón submit del formulario
	//handelSubmit es propio de React Hook Form y recuperará los datos del formulario para enviárselos a la función que
	//agregará los datos
	const onSubmit=handleSubmit((data)=>{
		const category=data.categoria;
		const name=data.nomProd;
		addNewProduct(name,category,img,prodState,dispatch);
	});

   return (
	 <>
	 <BannerTitle title="Administración Productos"/>

		<form className="container mt-5" onSubmit={onSubmit}>
		<div className="input-group mb-3">
		  <span class="input-group-text" id="inputGroup-sizing-sm">Nombre Producto</span>
		  <input type="text" class="form-control prodInput" 
		  {...register("nomProd",
		  	{required:{value:true, message:"El nombre del producto es requerido"},
		  	 minLength:{value:2, message:"Debe tener una longitud mínima de 2 caracteres"},
		  	 maxLength:{value:30, message:"Debe tener una longitud máxima 30 caracteres"}})}
			 id="nomProd"/>
		  {errors.nomProd && <div class="text-danger fs-7 input-group ">
		  	{errors.nomProd.message}
		  </div>}
		</div>

		<div className="input-group mb-3">
		  <span class="input-group-text" id="inputGroup-sizing-sm">Categoría</span>
		  <select class="form-select" 
		  {...register("categoria")}>
			{products.map((oneProd)=>{
				return <CategoryOption name={oneProd.title} value={oneProd.title} ></CategoryOption>
			})}
		</select>
		</div>


		<div class="mb-3">
		  <label for="formFileDisabled" class="form-label">Seleccione la imagen del producto</label>
		  <input  class="form-control prodInput" type="file"
		    {...register("img",
			{required:{value:true, message:"Debe seleccionar una imagen"}})}
			id="imgProd"
			onChange={onChange}/>
			 {errors.img && <div class="text-danger fs-7 input-group ">
		  	{errors.img.message}
		  </div>}
		</div>

		<button type="submit">Enviar</button>
		</form>
		
	  </>
	  )
}

export default Admin;