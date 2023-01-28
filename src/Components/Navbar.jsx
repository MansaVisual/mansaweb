import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo1 from "../assets/logo1.svg"
import logo3 from "../assets/logo3.svg"

export default function Navbar() {
    const navigate=useNavigate()

    const [menuOpen,setMenuOpen]=useState(false)

    return(
        <>
            <div className={`navbar-container-mobile ${menuOpen && "menuOpen"}`}>
                <div style={{backgroundImage:menuOpen?`url(${logo3}`:`url(${logo1}`}} alt="LOGO" onClick={()=>navigate("/")} className={`${menuOpen?"logo-menu-open":"logo-menu-close"}`}/>
                <button className={`hamburger hamburger--stack ${menuOpen&&"active"}`} type="button" onClick={()=>setMenuOpen(!menuOpen)}>
                    <div className="inner">
                        <span className="bar"></span>
                        <span className="bar"></span> 
                        <span className="bar"></span>
                    </div>
                </button>
            </div>
            <div className={`${menuOpen?"menu-open":"menu-close"}`}>

            </div>
        </>
    )
}