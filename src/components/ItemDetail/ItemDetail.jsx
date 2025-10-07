import React from 'react'
import ItemContador from '../ItemContador/ItemContador'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { toast } from 'react-toastify'
import "./ItemDetail.css"

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
      <h2 className='itemName'>Información de {nombre}</h2>
      <div className='detailConteiner'>

      
   

<div><h3 className='itemPrice'>El precio es: ${precio} (c/u) </h3>
<div className='cardCounter'>
{

agregarCantidad > 0 ? (
  <>
    <Link to="/cart"><button className='btnCompra'> Terminar Compra <br></br> - <br></br>Ir al carrito </button></Link>
    <Link to="/" ><button className='btnCompra'>Seguir comprando<br></br> - <br></br>Ir al inicio </button></Link>
  </>
) : (
  <ItemContador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
)

}
</div>
</div>
   <img className='itemImg' src={img} alt={nombre} />
<div className='itemDescription'><p >{descripcion}</p></div>
</div>





     
    </div>
  )
}

export default ItemDetail