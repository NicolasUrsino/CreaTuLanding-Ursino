import React from 'react'
import Item from '../Item/Item'
import "./Itemlist.css"



const Itemlist = ({productos}) => {
  return (
    <div className='cardsProductos'>
{productos.map(item=> <Item {...item} />)}
    </div>
  )
}

export default Itemlist