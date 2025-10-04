import React, { useContext } from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'


const CartWidget = () => {


    const carrito = "https://i.pinimg.com/1200x/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg"
const {cantidadTotal}=useContext(CarritoContext)
  
  return (
    <>

<Link to="/cart">
    <img src={carrito} alt="Carrito de compras"/>
{
  cantidadTotal>0&&<strong>{cantidadTotal}</strong>
}


</Link>



    </>

  )

}

export default CartWidget