import React, { useState } from 'react'

const ItemCount = (btn) => {
    const {stock, inicial} = btn
    const [estado, setEstado] = useState(inicial)

   const sumar = () => {
       if(estado < stock){
       setEstado( estado + 1)}
   }
   const restar = () => {
    if(estado > inicial)
    setEstado( estado - 1)
    }
    const onAdd = () => {
        alert(`Cantidad seleccionada: ${estado}`)
        setEstado(inicial)
    }

  return (
    <fieldset className='box'>
        <h3>Producto 1</h3>
        <fieldset className='box__btn'>
            <button onClick={sumar}><span class="material-icons">add</span></button>
            <text>{estado}</text>
            <button onClick={restar}><span class="material-icons">remove</span></button>
        </fieldset>
        <button onClick={onAdd}>Agregar</button>
    </fieldset>
  )
}

export default ItemCount