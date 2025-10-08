
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


/* const misProductos = [
    { nombre: "Amoladora", precio: 3700, img: "../public/amoladora.webp", idCat: "electrico", stock: 8, descripcion: "Una amoladora se utiliza para cortar, lijar, desbastar, pulir, cepillar y decapar una variedad de materiales gracias a su disco giratorio a altas revoluciones." },
] */
import { collection, doc, writeBatch } from "firebase/firestore";

/* const subirProductos = async () => {
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



/* import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";

const db = getFirestore();

async function actualizarRutas() {
  const productosRef = collection(db, "productos");
  const snapshot = await getDocs(productosRef);

  snapshot.forEach(async (prod) => {
    const data = prod.data();
    if (data.img && data.img.startsWith("../public")) {
      const nuevaRuta = data.img.replace("../public", "/img");
      await updateDoc(doc(db, "productos", prod.id), { img: nuevaRuta });
      console.log(`✅ Actualizado: ${prod.id} -> ${nuevaRuta}`);
    }
  });
}

actualizarRutas();
 */