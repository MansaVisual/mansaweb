import { useNavigate } from "react-router-dom"
import logo1 from "../assets/logo1.svg"
import menu from "../assets/menu.svg"

const NavBar = () => {
    const navigate=useNavigate()
    return(
        <>
            <div className="navbar-container-mobile">
                <img src={logo1} alt="LOGO" onClick={()=>navigate("/")}/>
                <img src={menu} className="menu" id="menu" alt="MENU" />
            </div>
        </>
    )
}
    
export default NavBar