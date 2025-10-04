import React from 'react'
import ItemContador from '../ItemContador/ItemContador'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { toast } from 'react-toastify'


const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

  const [agregarCantidad, setCantidad] = useState(0)


const{agregarAlCarrito} = useContext(CarritoContext);


  const manejadorCantidad = (cantidad) => {
    setCantidad(cantidad);

    const item={id, nombre, precio};
    agregarAlCarrito(item, cantidad);
    toast.success("Producto agregado al carrito", {
position: "top-right",
autoClose: 2500,
theme: "light",
});






  }


  return (


    <div>
      <h2>Nombre= {nombre}</h2>
      <h3>Precio= {precio} </h3>
      <img src={img} alt={nombre} />
<p>{descripcion}</p>
{

agregarCantidad > 0 ? (
  <>
    <Link to="/cart">Terminar Compra</Link>
    <Link to="/">Seguir comprando</Link>
  </>
) : (
  <ItemContador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
)

}







     
    </div>
  )
}

export default ItemDetail