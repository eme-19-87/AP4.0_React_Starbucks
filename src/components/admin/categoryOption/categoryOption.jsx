import React from 'react';
/**
*
* Permite obtener las opciones de las categorías de los productos
* @return {jsx} -Retorna los elementos para las opciones de una lista desplegable
*/
function CategoryOption({value,name}){
    return(
        <option value={value}>
            {name}
        </option>
    )
}

export default CategoryOption;