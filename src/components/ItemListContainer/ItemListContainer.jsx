import React from 'react'
import { useEffect, useState } from 'react'
import { traerProductos, traerProductosCat } from '../../Asycmocks'
import Itemlist from '../Itemlist/Itemlist'
import { useParams } from 'react-router-dom'







const ItemListContainer = ({ }) => {

  const [productos, setProductos] = useState([])

  const { idCategoria } = useParams()




  useEffect(() => {

    const funcionProductos = idCategoria ? traerProductosCat : traerProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))




  }, [idCategoria])


  return (
    <>
      <h2>Mis Productos</h2>
      <Itemlist productos={productos} />
    </>
  )
}

export default ItemListContainer 