import React, { useContext } from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'


const CartWidget = () => {




  const { cantidadTotal } = useContext(CarritoContext)

  return (
  <>
    <Link to="/cart" className="cart-container"> 
      <img className='cartW' src="../../../public/img/carritocompras.jpg" alt="Carrito de compras" />
      
      {
        cantidadTotal > 0 && <strong className='cartNumNav'>{cantidadTotal}</strong>
      }
    </Link>
  </>
)
}
export default CartWidget