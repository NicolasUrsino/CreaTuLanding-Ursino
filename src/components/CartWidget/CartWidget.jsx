import React from 'react'
import "./CartWidget.css"


const CartWidget = () => {


    const carrito = "https://i.pinimg.com/1200x/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg"
  return (
    <img src={carrito} alt="Carrito de compras"/>
  )
}

export default CartWidget