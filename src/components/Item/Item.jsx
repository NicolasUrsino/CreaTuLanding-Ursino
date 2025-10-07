import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'




const Item = ({id, nombre, precio, img, stock}) => {


  return (
    <div className="cardProducto">
<img src={img} alt={nombre}/>
<h3 className='itemLetter'>{nombre}</h3>
<p className='itemLetter'>Precio: {precio}</p>
<p className='itemLetter'>Stock: {stock}</p>
<Link to={`/item/${id}`} ><button className='btnItem'> Detalles / Comprar</button></Link>

    </div>
  )
  
}

export default Item