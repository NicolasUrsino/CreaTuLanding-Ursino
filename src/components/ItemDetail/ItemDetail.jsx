import React from 'react'
import ItemContador from '../ItemContador/ItemContador'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const [agregarCantidad, setCantidad] = useState(0)

  const manejadorCantidad = (cantidad) => {
    setCantidad(cantidad);
  }


  return (


    <div>
      <h2>Nombre= {nombre}</h2>
      <h3>Precio= {precio} </h3>
      <img src={img} alt={nombre} />

{

agregarCantidad > 0 ? (<Link to={"/cart"}>Terminar Compra</Link>) : ( <ItemContador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)

}



     
    </div>
  )
}

export default ItemDetail