import React from 'react'
import CartWidget from './CartWidget'
//rafce short-cut
const NavBar = () => {
  return (
    <header>
        <h1 className='titulo'>E-commerce</h1>
        <a href='#'>Inicio</a><a href='#'>Tienda</a><a href='#'>Nosotros</a><a href='#'>FAQ</a>
        <CartWidget/>
    </header>
  )
}

export default NavBar