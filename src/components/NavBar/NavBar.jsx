import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {
  return (

<>
    
 <nav>
    <h1>Cursos Ferrero</h1>
<ul>
    <li>Cursos</li>
    <li>Sobre mi</li>
    <li>Próximos talleres</li>
</ul>  


<CartWidget></CartWidget>
 </nav>


    

    </>
  )
}

export default NavBar 