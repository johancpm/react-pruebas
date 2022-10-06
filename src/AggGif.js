import React, { useState, useEffect } from 'react'
import { AgregarImg } from './AgregarImg'
import { peticion } from './helpers/CargarImages'
import { useFetchGif } from './hooks/useFetchGif'

export const AggGif = ({category}) => {
   
   //const [imagenes, funimagenes] = useState([])

    // useEffect(()=>{

    //   peticion(category)
      
    //   .then(funimagenes);

    // }, [category])

     const  {data, loading} = useFetchGif(category);

     

    
  return (
    <>
        <h3 className=" animate__animated animate__bounceInLeft">{category}</h3>

        {loading && <p className=" animate__animated animate__flash">Loading...</p> }
        <div className='conten_card  '>
          {
            data.map(images =>(
                < AgregarImg
                key = {images.id} 
                {...images}
                
                />
                
            ))
            
          }
        
        </div>
      
        
        
    </>
  )
}
