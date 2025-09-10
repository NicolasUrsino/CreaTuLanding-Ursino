const misProductos = [
    { id: "1", nombre: "Taladro", precio: 3000, img: "../public/taladro.webp", idCat: "electrico", stock: 10 },
    { id: "2", nombre: "Martillo", precio: 1500, img: "../public/martillo.jpg", idCat: "manual", stock: 8 },
    { id: "3", nombre: "Destornillador", precio: 600, img: "../public/destornillador.webp", idCat: "manual", stock: 3 },
    { id: "4", nombre: "Sierra", precio: 2760, img: "../public/sierra.jpg", idCat: "manual", stock: 5 }
]

export const traerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 100)
    })
}

export const traerUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })
}

export const traerProductosCat = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCat = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCat)
        }, 100)
        
    })
}