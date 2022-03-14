import React from 'react'
import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail';

const productoInicial = {
        id: 1,
        nombre: "Producto 1",
        img:"https://picsum.photos/1250/300",
        info:"Datos del producto: Lorem ipsum dolor sit amet. Eum soluta placeat 33 nostrum nemo est suscipit fugit sed possimus soluta sed deserunt aliquam sit blanditiis quasi? Et quam repellat est enim molestiae nam sint delectus ea repellendus dolores! Id nisi voluptatem qui tempore consequatur qui ducimus galisum ab quibusdam quisquam eos vitae minima.",
        precio: 100
    }


function ItemListContainer() {
  const [producto, setProducto] = useState({})
  const [cargado, setIsCargado] = useState(false);

    useEffect(() => {
        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productoInicial)
            },2000)
        })

        pedido
        .then((datos)=>{
            setProducto(datos)
            setIsCargado(true)
        })
        .catch((error)=>{
            setIsCargado(false)
        })
    },[])
  return (
    <section>
        {cargado ? <ItemDetail producto={producto}/>: <section className='box'>Cargando...</section>}
    </section>
  )
}

export default ItemListContainer