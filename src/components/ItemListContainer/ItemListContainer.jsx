import React from 'react'
import { useEffect, useState } from 'react'
import Itemlist from '../Itemlist/Itemlist'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/config'





const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const { idCategoria } = useParams()




  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos")
    getDocs(misProductos)
    .then(res => {
       const nuevosProductos = res.docs.map(doc => {
       const data = doc.data()
       return { id: doc.id, ...data } })
      setProductos(nuevosProductos)
      })
      .catch(error=>console.log(error))
  }, [idCategoria])


/*   useEffect(() => {

    const funcionProductos = idCategoria ? traerProductosCat : traerProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))




  }, [idCategoria])
 */

  return (
    <>
      <h2>Mis Productos</h2>
      <Itemlist productos={productos} />
    </>
  )
}

export default ItemListContainer 