import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./Cart.css"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className='CartNoProd'>No hay productos en el carrito</h2>
                <Link to="/"><button className='btnNoProd'>Ver productos</button> </Link>

            </>
        )
    }


    return (
        <div>
             <h2 className='h2'>Productos en el carrito</h2>
             <div className='cardsProductos'>
            {
                carrito.map(prod=><CartItem key={prod.id} {...prod}/> )
            }
</div>
<button onClick={()=>vaciarCarrito()} className='btnCompra' style={{fontSize: 23}}>Vaciar Carrito</button>
<div className='detailConteiner'>
    <h3 className='h2'>Total a pagar: ${total}</h3>
    <h3 className='h2'>Cantidad de productos: {cantidadTotal}</h3>
</div>

<Link to="/checkout" className='btnFinCompra'>
  Finalizar Compra
</Link>

        </div>
    )
}

export default Cart