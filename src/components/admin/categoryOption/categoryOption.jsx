import React from 'react';

function CategoryOption({value,name}){
    return(
        <option value={value}>
            {name}
        </option>
    )
}

export default CategoryOption;