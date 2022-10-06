import {useEffect, useState}from 'react'
import { peticion } from '../helpers/CargarImages'

export const useFetchGif = (category) => {
  

  const [hooks, funcionHooks] = useState({

       data: [],

       loading: true

  })


  useEffect(()=>{
      
    peticion(category)
    
    .then(gifs =>{
        funcionHooks({
            data: gifs,
            loading: false
       });

    })


  }, [category])
//  setTimeout(() => {
    
//     funcionHooks({
//     data: [1,2,3,4,5,6,7],
//     loading: false


//     })


//  }, 3000)

 return hooks;
}
