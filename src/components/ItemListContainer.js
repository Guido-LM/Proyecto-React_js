import React from 'react'

function ItemListContainer(greeting) {
    const { titulo, items } = greeting
  return (
    <main>
        <h2>{titulo}</h2>
        <p>Aqui podra ver nuestros {items}</p>
    </main>
  )
}

export default ItemListContainer