import React from 'react'
import { useState } from 'react'
import "./ItemContador.css"

const ItemContador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const incrementar = () =>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador - 1)
        }
    }

    

  return (
    <>
        <div className='contador'>
            <button className='btnContador' onClick={incrementar}> + </button>
            <p> {contador} </p>
            <button className='btnContador' onClick={decrementar}> - </button>
        </div>
        <button className='btnAgregarCarrito' onClick={()=> funcionAgregar(contador)}>Agregar al carrito</button>
    </>
    )
}

export default ItemContador