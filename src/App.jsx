import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>



      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:idCategoria"  element={<ItemListContainer/>}  />
          <Route path="/item/:idItem"  element={<ItemDetailConteiner/>}  />
          
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
