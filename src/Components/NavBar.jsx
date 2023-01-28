import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo1 from "../assets/logo1.svg"
import logo3 from "../assets/logo3.svg"

const NavBar = () => {
    const navigate=useNavigate()

    const [menuOpen,setMenuOpen]=useState(false)

    return(
        <>
            <div className={`navbar-container-mobile ${menuOpen && "menuOpen"}`}>
                <div style={{backgroundImage:menuOpen?`url(${logo3}`:`url(${logo1}`}} alt="LOGO" onClick={()=>navigate("/")} className={`${menuOpen?"logo-menu-open":"logo-menu-close"}`}/>
                <button class={`hamburger hamburger--stack ${menuOpen&&"active"}`} type="button" onClick={()=>setMenuOpen(!menuOpen)}>
                    <div class="inner">
                        <span class="bar"></span>
                        <span class="bar"></span> 
                        <span class="bar"></span>
                    </div>
                </button>
            </div>
            <div className={`${menuOpen?"menu-open":"menu-close"}`}>

            </div>
        </>
    )
}
    
export default NavBar