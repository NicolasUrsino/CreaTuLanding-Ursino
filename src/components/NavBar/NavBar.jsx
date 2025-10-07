import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (

    <>

      <nav>
        <NavLink to="/" className="tittles li">
          <h1  style={{fontSize : "40px"}}>Inicio</h1>
        </NavLink>
        <ul className="ultittle">
          <li className="li"><NavLink to="./categoria/manual" className="tittles li">Productos Manuales</NavLink></li>
          <li className="li"><NavLink to="./categoria/electrico" className="tittles li">Productos Eléctricos</NavLink></li>

        </ul>


        <CartWidget></CartWidget>
      </nav>




    </>
  )
}

export default NavBar 