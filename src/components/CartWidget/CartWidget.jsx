import React, { useContext } from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'


const CartWidget = () => {




  const { cantidadTotal } = useContext(CarritoContext)

  return (
  <>
    <Link to="/cart" className="cart-container"> 
<<<<<<< HEAD
      <img className='cartW' src="../../../public/img/carritocompras.jpg" alt="Carrito de compras" />
=======
      <img className='cartW' src="../../public/img/carritocompras.jpg" alt="Carrito de compras" />
>>>>>>> 3cbcf8be57f5f9aaed3455e91f237611e2f5031d
      
      {
        cantidadTotal > 0 && <strong className='cartNumNav'>{cantidadTotal}</strong>
      }
    </Link>
  </>
)
}
export default CartWidget
