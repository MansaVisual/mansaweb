import { useNavigate } from "react-router-dom"
import logo1 from "../assets/logo1.svg"
import logo2 from "../assets/logo2.svg"
import logo3 from "../assets/logo3.svg"
import subLogo1 from "../assets/linkedin.svg"
import subLogo2 from "../assets/envelope.svg"
import subLogo3 from "../assets/calendar.svg"
import { useEffect, useState } from "react"

export default function Navbar({menuOpen,setMenuOpen}) {
    const navigate=useNavigate()

    const [menuBar,setMenuBar]=useState(false)

    useEffect(() => {
        if(window.location.pathname==="/Contact"){
            setMenuBar(true)
        }else{
            setMenuBar(false)
        }
    }, []);
    
    return(
        <>
            <div className={`navbar-container-mobile ${menuOpen && "menuOpen"}`}>
                <div style={{backgroundImage:!menuOpen && window.location.pathname==="/Contact" ? `url(${logo2}` : menuOpen ? `url(${logo3}`:`url(${logo1}`}} alt="LOGO"
                    onClick={()=>{
                        if(window.location.pathname==="/Contact"){
                            setMenuBar(false)
                        }
                        navigate("/")
                    }}className={`${menuOpen?"logo-menu-open":"logo-menu-close"}`}
                />
                <button className={`hamburger hamburger--stack ${menuOpen&&"active"}`} type="button"
                    onClick={()=>{
                        window.scrollTo({
                            top: 0,
                            behavior: "auto",
                        });
                        setMenuOpen(!menuOpen)
                    }}
                >
                    <div className="inner"
                        onClick={()=>{
                            if(window.location.pathname==="/Contact" && menuBar){
                                setMenuBar(false)
                            }else if(window.location.pathname==="/Contact" && !menuBar){
                                setMenuBar(true)
                            }
                        }}
                    >
                        <span className={`bar ${menuBar&&"bar2"}`}></span>
                        <span className={`bar ${menuBar&&"bar2"} ${menuBar&&"bar2-background"}`}></span>
                        <span className={`bar ${menuBar&&"bar2"}`}></span>
                    </div>
                </button>
            </div>
            <div className={`${menuOpen?"menu-open":"menu-close"}`}>
                <div className="navbar-bar">
                    <h4 
                        onClick={()=>{
                            if(window.location.pathname!=="/"){
                                setMenuBar(false)
                                navigate("/")
                            }
                        }}
                    >Home</h4>
                    <h4 
                        onClick={()=>{
                            if(window.location.pathname!=="/Contact"){
                                setMenuBar(true)
                                navigate("/Contact")
                            }
                        }}
                    >Contact</h4>
                    <h4 onClick={window.location.pathname==="/" ?
                            ()=>{
                                setMenuOpen(false)
                                setTimeout(() => {
                                    window.scrollTo({
                                        top: document.getElementById("OurTeam").getBoundingClientRect().y + 140,
                                        behavior: "smooth",
                                    })
                                }, 500);
                            }
                        :
                            ()=>{
                                navigate("/")
                                setMenuOpen(false)
                                setTimeout(() => {
                                    window.scrollTo({
                                        top: document.getElementById("OurTeam").getBoundingClientRect().y + 140,
                                        behavior: "smooth",
                                    })
                                }, 500);
                            }
                        }
                    >
                        Our Team
                    </h4>
                </div>
                <div className="navbar-logos">
                        <img src={subLogo1} alt="LINKEDIN"/>
                        <img src={subLogo3} alt="CALENDAR" onClick={()=>window.open("https://calendly.com/mansastudio/15min")}/>
                        <img src={subLogo2} alt="ENVELOPE" />
                </div>
            </div>
        </>
    )
}