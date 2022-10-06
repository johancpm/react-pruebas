import React, { useState } from 'react'
import  PropTypes from 'prop-types'
export const AggCategoria = ({FunCategory}) => {

 const [inputValue, funcionInput] = useState('');

 const EscribirNewValor = (e) =>{

 return funcionInput(e.target.value);

 }

 const accionForm = (e) =>{
    e.preventDefault();

    if(inputValue.trim().length > 2){
     FunCategory(categ => [ inputValue]  );
     funcionInput('') 

    }
 }

  return (
    
    <form onSubmit={accionForm}>
       <input
        placeholder='Agregar Nueva Serie '
        type='text'
        value={inputValue}
        onChange={EscribirNewValor}
       />
    </form>

    
  )
}
AggCategoria.prototype={
    FunCategory: PropTypes.func.isRequired
  
  }
