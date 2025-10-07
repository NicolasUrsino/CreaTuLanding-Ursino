import React from 'react'
import { useEffect, useState } from 'react'
import Itemlist from '../Itemlist/Itemlist'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/config'
import "./ItemListContainer.css"




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




  return (
   <div >
     <div className='cardWelcome'> <h2 className='h2'>Bienvenidos a Ferrero </h2></div>
      <Itemlist productos={productos} />
    </div>
  )
}

export default ItemListContainer 