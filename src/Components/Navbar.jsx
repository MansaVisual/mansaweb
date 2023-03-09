import { useNavigate } from "react-router-dom"
import logo1 from "../assets/logo1.svg"
import logo2 from "../assets/logo2.svg"
import logo3 from "../assets/logo3.svg"
import subLogo1 from "../assets/linkedinWhite.svg"
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

    const array = [
        {
            title:"Home",
            url:"/",
            menuBar:false,
        },
        {
            title:"Contact",
            url:"Contact",
            menuBar:true,
        },
        {
            title:"Our Team",
            url:"/",
            menuBar:false,
        },
    ]
    
    return(
        <>
            <div className={`navbar-container-mobile ${menuOpen ? "menuOpen" : "menuClose"}`}>
                <div alt="LOGO"
                    onClick={()=>{
                        if(window.location.pathname==="/Contact"){
                            setMenuBar(false)
                        }
                        navigate("/")
                    }}className={`${menuOpen?"logo-menu-open":"logo-menu-close"}`}
                >
                    <img src={!menuOpen && window.location.pathname==="/Contact" ? logo2 : menuOpen ? logo3:logo1} alt="LOGO" />
                </div>
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
                    {array.map((obj,i)=>{
                        return(
                            <h4 
                                onClick={(e)=>{
                                    e.target.style.transition="1s"
                                    if(window.location.pathname!==`${obj.url}`){
                                        setMenuBar(obj.menuBar)
                                        navigate(`${obj.url}`)
                                    }
                                    if(obj.title==="Our Team"){
                                        setMenuOpen(false)
                                        setTimeout(() => {
                                            window.scrollTo({
                                                top: document.getElementById("OurTeam").getBoundingClientRect().y + 140,
                                                behavior: "smooth",
                                            })
                                        }, 500);
                                    }
                                }}
                                onMouseEnter={(e)=>{e.target.style.opacity="0.5";e.target.style.transition="0s"}}
                                onMouseLeave={(e)=>{e.target.style.opacity="1";e.target.style.transition="1s"}}
                            >{obj.title}</h4>
                        )
                    })}
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