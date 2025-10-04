import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './components/Cart/Cart'
import Cheackout from './components/Checkout/Cheackout'
 import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>



      <BrowserRouter>
      <CarritoProvider>
          <NavBar />

          <Routes>

            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/checkout' element={<Cheackout/>}/>
          </Routes>
        </CarritoProvider>
        <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App
