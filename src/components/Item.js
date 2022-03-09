import React from 'react'

const Item = ({productos}) => {
  
  return (
    <div className='box__productos--item'>
      <h3 className='titulo__item'>{productos.nombre}</h3>
      <img src='#' alt='img producto'></img>
      <p>{productos.info}</p>
      <p>${productos.precio}</p>
      <button>Ver detalles del producto</button>
    </div>
  )
}

export default Item