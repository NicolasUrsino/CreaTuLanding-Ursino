import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import "./CartItem.css"
import "../Item/Item.jsx"


const CartItem = ({item, cantidad}) => {

    const { eliminarProducto } = useContext(CarritoContext)



    return (
        <div >
       
        <div className='CartCard'>
            <h4 className='itemLetter' style={{fontSize: 25, margin: 15}}>{item.nombre}</h4>
            <img src={item.img} alt="Imagen del producto" />
            <p className='itemLetter' style={{fontSize: 20, margin: 10}}> Cantidad: {cantidad}</p>
            <p className='itemLetter' style={{fontSize: 20, marginTop: 5}}>Precio: ${item.precio} (c/u)</p>
            <button className='btnCompra' style={{fontSize: 17}} onClick={() => eliminarProducto(item.id)}>Eliminar Producto</button>
        </div>
        </div>
    )
}

export default CartItem