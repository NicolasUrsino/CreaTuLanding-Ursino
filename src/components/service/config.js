
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmtP6nJYMK9UUyu0KZuivXhwYYv40_H8w",
  authDomain: "coderhouse-react-ferreteria.firebaseapp.com",
  projectId: "coderhouse-react-ferreteria",
  storageBucket: "coderhouse-react-ferreteria.firebasestorage.app",
  messagingSenderId: "154775486405",
  appId: "1:154775486405:web:d7bbdd425900e53ce855ac"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)















// Funcion para agregar productos a firebase


const misProductos = [
    { id: "1", nombre: "Taladro", precio: 3000, img: "../public/taladro.webp", idCat: "electrico", stock: 10 },
    { id: "2", nombre: "Martillo", precio: 1500, img: "../public/martillo.jpg", idCat: "manual", stock: 8 },
    { id: "3", nombre: "Destornillador", precio: 600, img: "../public/destornillador.webp", idCat: "manual", stock: 3 },
    { id: "4", nombre: "Sierra", precio: 2760, img: "../public/sierra.jpg", idCat: "manual", stock: 5 }
]
import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async () => {
  const batch = writeBatch(db); 
  const productosRef = collection(db, "productos"); 

 
  misProductos.forEach((producto) => {
    const nuevoDoc = doc(productosRef); 
    batch.set(nuevoDoc, producto); 
  });


  try {
    await batch.commit();
    console.log("Productos subidos exitosamente");
  } catch (error) {
    console.error("Error subiendo productos: ", error);
  }
};
/* subirProductos() */