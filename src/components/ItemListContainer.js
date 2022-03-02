import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(greeting) {
  const { titulo, items } = greeting 
  return (
    <main>
        <h2>{titulo}</h2>
        <p>Aqui podra ver nuestros {items}</p>
        <ItemCount stock={10} inicial={1}/>
    </main>
  )
}

export default ItemListContainer