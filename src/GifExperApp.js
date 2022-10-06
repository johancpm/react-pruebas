import React, { useState } from "react";
import { AggGif } from "./AggGif";
import { AggCategoria } from "./components/AggCategoria";


export const Titulo = () => {
  
  const [categorias, FunCategory] = useState(['true detective']);

//   const agregarMas = () =>{
//     FunCategory([...categorias, 'WestWord'] )       
//   }

    return (
       <>
         <h2>GifExpertApp</h2>
         <AggCategoria FunCategory={FunCategory}/>

         <hr></hr>
            
         <ol>

            {
               categorias.map(category =>
                 <AggGif
                 key={category}  
                 category ={category}
                 
                 />

               )
            }

         </ol>
       </>


    )
   
}

