import { useNavigate } from "react-router-dom"
import logo1 from "../assets/logo1.svg"
import logo2 from "../assets/logo2.svg"
import logo3 from "../assets/logo3.svg"
import logo1desk from "../assets/logo1-desk.svg"
import logo2desk from "../assets/logo2-desk.svg"
import subLogo1 from "../assets/linkedinWhite.svg"
import subLogo2 from "../assets/envelope.svg"
import subLogo3 from "../assets/calendar.svg"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@mui/material"

import backArrow from "../assets/back-arrow.svg"

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

    const isDesktop = useMediaQuery("(min-width:1024px")
    
    return(
        <>
            <div className={`navbar-container ${isDesktop&&"navbar-desk"} ${menuOpen ? "menuOpen" : "menuClose"}`}>
                <div alt="LOGO"
                    onClick={()=>{
                        if(window.location.pathname==="/Contact"){
                            setMenuBar(false)
                        }
                        navigate("/")
                    }}className={`${menuOpen?"logo-menu-open":"logo-menu-close"}`}
                >
                    {isDesktop && !menuOpen &&
                        <img src={window.location.pathname==="/Contact" ? logo2desk : logo1desk} alt="LOGO" />
                    }
                    {!isDesktop &&
                         <img src={!menuOpen && window.location.pathname==="/Contact" ? logo2 : menuOpen ? logo3:logo1} alt="LOGO" />
                    }
                </div>
                <button className={`hamburger hamburger--stack ${menuOpen&&"active"} ${isDesktop&&"inner-desk"}`} type="button"
                    onClick={()=>{
                        window.scrollTo({
                            top: 0,
                            behavior: "auto",
                        });
                        setMenuOpen(!menuOpen)
                    }}
                >
                    <div className={`inner ${isDesktop&&"inner-desk"}`}
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
            <div className={`menu ${isDesktop&&"menu-desk"} ${menuOpen?isDesktop?"menu-open-desk":"menu-open-mobile":isDesktop?"menu-close-desk":"menu-close-mobile"}`}>
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
                <div className={`navbar-logos ${isDesktop&&"desk"}`}>
                        <img src={subLogo1} alt="LINKEDIN"/>
                        <img src={subLogo3} alt="CALENDAR" onClick={()=>window.open("https://calendly.com/mansastudio/15min")}/>
                        <img src={subLogo2} alt="ENVELOPE" />
                </div>
                {isDesktop &&
                    <div className="back-arrow" onClick={()=>setMenuOpen(!menuOpen)}>
                        <img src={backArrow} alt="BACK" />
                    </div>
                }
            </div>
            {isDesktop && menuOpen &&
                <div className="fonto-navbar-desk" onClick={()=>setMenuOpen(!menuOpen)}></div>
            }
        </>
    )
}