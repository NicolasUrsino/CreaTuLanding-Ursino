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
            {
                carrito.map(prod=><CartItem key={prod.id} {...prod}/> )
            }

    <h3>Total: ${total}</h3>
    <h3>Cantidad total: {cantidadTotal}</h3>
<button onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
<Link to="/checkout">Finalizar Compra</Link>

        </div>
    )
}

export default Cart