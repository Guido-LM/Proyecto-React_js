import React from 'react'

const Item = ({productos}) => {
  
  return (
    <article className='box__productos--item'>
      <h3 className='titulo__item'>{productos.nombre}</h3>
      <img src='#' alt='img producto'></img>
      <p>{productos.info}</p>
      <p>${productos.precio}</p>
      <button>Ver detalles del producto</button>
    </article>
  )
}

export default Item