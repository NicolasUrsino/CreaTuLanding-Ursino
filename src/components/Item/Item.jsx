import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'




const Item = ({id, nombre, precio, img}) => {


  return (
    <div className="cardProducto">
<img src={img} alt={nombre}/>
<h3>Producto: {nombre}</h3>
<p>Precio: {precio}</p>
<Link to={`/item/${id}`}><button> Ver detalles</button></Link>

    </div>
  )
  
}

export default Item