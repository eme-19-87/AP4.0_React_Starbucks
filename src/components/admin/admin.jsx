import React from 'react';
//se instala con npm i react-hook-form
import {useForm} from 'react-hook-form';
import BannerTitle from '../bannerTitle/bannerTitle';


function Admin(){
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
	}=useForm();
	const onSubmit=handleSubmit((data)=>{
		alert(data);
	});
   return (
	 <>
	 <BannerTitle title="Administración Productos" bgColor="green"/>

		<form className="container mt-5" onSubmit={onSubmit}>
		<div className="input-group mb-3">
		  <span class="input-group-text" id="inputGroup-sizing-sm">Nombre Producto</span>
		  <input type="text" class="form-control" 
		  {...register("nomProd",
		  	{required:{value:true, message:"El nombre del producto es requerido"},
		  	 minLength:{value:2, message:"Debe tener una longitud mínima de 2 caracteres"},
		  	 maxLength:{value:30, message:"Debe tener una longitud máxima 30 caracteres"}})}/>
		  {errors.nomProd && <div class="text-danger fs-7 input-group ">
		  	{errors.nomProd.message}
		  </div>}
		</div>

		<div className="input-group mb-3">
		  <span class="input-group-text" id="inputGroup-sizing-sm">Categoría</span>
		  <select class="form-select" 
		  {...register("categoria")}>
			  <option value="1">One</option>
			  <option value="2">Two</option>
			  <option value="3">Three</option>
		</select>
		</div>

		<div className="input-group mb-3">
		  <span class="input-group-text" id="inputGroup-sizing-sm">Subcategoría</span>
		  <select class="form-select" 
		  {...register("subcategoria")}>
			  <option value="1">One</option>
			  <option value="2">Two</option>
			  <option value="3">Three</option>
		</select>
		</div>

		<div class="mb-3">
		  <label for="formFileDisabled" class="form-label">Seleccione la imagen del producto</label>
		  <input class="form-control" type="file" {...register("img")} />
		</div>

		<button type="submit">Enviar</button>
		</form>
		
	  </>
	  )
}

export default Admin;