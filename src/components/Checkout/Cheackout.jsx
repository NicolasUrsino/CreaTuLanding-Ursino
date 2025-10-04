import React, { useContext } from 'react'
import { useState } from 'react'
import { db } from '../service/config'
import { CarritoContext } from '../../context/CarritoContext'
import { collection, addDoc } from 'firebase/firestore'




const Cheackout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirm, setEmailConfirm] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")


    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)



    const manejadorForm = (event) => {
        event.preventDefault();


        if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
            setError("Completá todos los datos")
            return
        }
    

    if (email !== emailConfirm) {
        setError("Los email no coinciden")
        return
    }



    const orden = {
        items: carrito.map(prod => ({
            id: prod.item.id,
            nombre: prod.item.nombre,
            cantidad: prod.cantidad
        })),

        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        email
    }


    addDoc(collection(db, "ordenes"), orden)
        .then(docRef => {
            setOrdenId(docRef.id)
            vaciarCarrito()
        })
        .catch(error => {
            console.log("Error al crear la orden")
            setError("Hubo un Error al crear la orden")
        })

    }

    
    return (
        <div>

            <h2>Cheackout:</h2>


            <form onSubmit={manejadorForm}>

                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Teléfono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Confirmar Email</label>
                    <input type="email" onChange={(e) => setEmailConfirm(e.target.value)} />
                </div>

                {error && <p>{error}</p>}
                <button type='submit'>Confirmar Compra</button>
{ordenId && (<strong>Gracias por tu compra, tu orden es: {ordenId}</strong>)}

            </form>


        </div>
    )
}

export default Cheackout