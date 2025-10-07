import React, { useContext, useEffect, useState } from 'react'
import { db } from '../service/config'
import { CarritoContext } from '../../context/CarritoContext'
import { collection, addDoc } from 'firebase/firestore'
import "./Checkout.css"
import Swal from 'sweetalert2'

const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirm, setEmailConfirm] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const [mostrarCardFin, setMostrarCardFin] = useState(false)

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext)

    const errorDatosIncompletos = <div className='errorDatos'><p>Debes completar todos los datos</p></div>
    const errorDatosEmail = <div className='errorDatos'><p>Los Emails no coinciden</p></div>

    useEffect(() => {
        if (ordenId) {
            Swal.fire({
                title: `¡Compra realizada!`,
                text: `Gracias por tu compra, puedes seguir los pasos a continuación`,
                icon: "success",
                confirmButtonText: 'OK'
            }).then(() => {

                setMostrarCardFin(true)

                setError("")
            })
        }
    }, [ordenId])

    const manejadorForm = (event) => {
        event.preventDefault()


        setMostrarCardFin(false)

        if (!carrito || carrito.length === 0) {
            setError(<div className='errorDatos'><p>No hay productos en el carrito</p></div>)
            return
        }

        if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
            setError(errorDatosIncompletos)
            return
        }

        if (email !== emailConfirm) {
            setError(errorDatosEmail)
            return
        }


        const orden = {
            items: carrito.map(prod => ({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.cantidad
            })),
            total,
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
            .catch(() => {
                console.log("Error al crear la orden")
                setError("Hubo un error al crear la orden")
            })
    }

    return (
        <div>
            <h2 className='h2'>Checkout de compra:</h2>

            <form onSubmit={manejadorForm} className='formCheck'>
                <div className='formLabel'>
                    <label>Nombre: </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className='formLabel'>
                    <label>Apellido: </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className='formLabel'>
                    <label>Teléfono: </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className='formLabel'>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='formLabel'>
                    <label>Confirmar Email: </label>
                    <input type="email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} />
                </div>

                {error && <div style={{ marginTop: 20 }}>{error}</div>}

                
            </form>
<form onSubmit={manejadorForm}>

<button
                    type='submit'
                    className='btnFinCompra'
                    style={{ marginTop: 30 }}
                    disabled={!carrito || carrito.length === 0}
                >
                    {(!carrito || carrito.length === 0)
                        ? 'No hay productos en carrito'
                        : 'Confirmar Compra'}
                </button>



</form>

            {mostrarCardFin && (
                <div
                    className='cardFinCompra'
                >
                    <h3 style={{ fontSize: 30, color: 'white', margin: 5 }}>¡Gracias por tu compra!</h3>
                    <p style={{ fontSize: 20, color: 'white', textAlign: "center", margin: 5}}>Puedes contactarse al siguiente número con tu orden (<strong>{ordenId}</strong>), o con tu nombre (<strong>{nombre} {apellido}</strong>), 12345678. <br/><br/>¡Muchas gracias! </p>
                </div>
            )}
        </div>
    )
}

export default Checkout
