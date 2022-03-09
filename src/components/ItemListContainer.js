import React from 'react'
//import ItemCount from './ItemCount'
import { useEffect, useState } from "react"
import ItemList from './ItemList'

const productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        info:"Datos del producto",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        info:"Datos del producto",
        precio: 200
    },
    {
        id: 3,
        nombre: "Producto 3",
        info:"Datos del producto",
        precio: 300
    }
]

function ItemListContainer(greeting) {
  const { titulo, items } = greeting 
  const [productos, setProductos] = useState([])
  const [cargado, setIsCargado] = useState(false);

    useEffect(() => {
        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })

        pedido
        .then((lista)=>{
            setProductos(lista)
            setIsCargado(true)
        })
        .catch((error)=>{
            setIsCargado(false)
        })
    },[])
  return (
    <main>
        <h2 className='titulo__main'>{titulo}</h2>
        {cargado ? <ItemList productos={productos}/>: <div className='box'>Cargando...</div>}
    </main>
  )
}
//<ItemCount stock={10} inicial={1}/>
export default ItemListContainer