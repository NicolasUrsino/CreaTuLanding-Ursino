import React, { useEffect, useState } from 'react'
import { traerUnProducto } from '../../Asycmocks'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailConteiner = () => {

  const [producto, setProducto] = useState(null)

  const{idItem} = useParams()

  useEffect(() => {

    traerUnProducto(idItem)
      .then(respuesta => setProducto(respuesta))

  }, [idItem])

  return (
    <div>

      <ItemDetail {...producto} />

    </div>

  )
}

export default ItemDetailConteiner