import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (

    <>

      <nav>
        <NavLink to="/">
          <h1>Ferrero</h1>
        </NavLink>
        <ul>
          <li><NavLink to="./categoria/manual">Productos Manuales</NavLink></li>
          <li><NavLink to="./categoria/electrico">Productos Eléctricos</NavLink></li>

        </ul>


        <CartWidget></CartWidget>
      </nav>




    </>
  )
}

export default NavBar 