import React from 'react'

export const AgregarImg = (props) => {

  

  return (
    <div className="cuadro_img animate__animated animate__bounceInLeft">
        <img src={props.url}/>
        <p>{props.titulo}</p>
    </div>
  )
}
