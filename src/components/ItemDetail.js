import React from 'react'
const ItemDetail = ({producto}) => {
  return (
    <article className='box__producto'>
      <section>
        <div>
          <h3 className='titulo__item--info'>{producto.nombre}</h3>
          <img src={producto.img} className={producto.id} alt='img producto'></img>
        </div>
        <div className='box__producto--item'>
          <p>{producto.info}</p>
          <p>Precio: ${producto.precio}</p>
        </div>
      </section>
    </article>
  )
}

export default ItemDetail