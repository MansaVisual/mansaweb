import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home"
import "./styles/styles.scss"
import Navbar from "./Components/Navbar";
import Contact from "./views/Contact";
import { useEffect, useState } from "react";
import Page404 from "./views/404page";
import logo1 from "./assets/animation1.svg"
import logo2 from "./assets/animation2.svg"

const App = () =>{
    const [menuOpen,setMenuOpen]=useState(false)
    const [initWeb,setInitWeb]=useState(true)

    const [animation1,setAnimation1] = useState(false) 
    const [animation2,setAnimation2] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setInitWeb(false)
        }, 2800);
        setTimeout(() => {
            setAnimation1(true)
            setTimeout(() => {
                setAnimation2(true)
                setTimeout(() => {
                    setAnimation2(false)
                    setTimeout(() => {
                        setAnimation1(false)
                    }, 800);
                }, 800);
            }, 800);
        }, 200);
    }, [])
    
    useEffect(() => {
        if(initWeb){
            window.addEventListener('scroll', disableScroll);
            setTimeout(() => {
                window.removeEventListener('scroll', disableScroll);  
            }, 3400);
        }
    }, [initWeb])

    function disableScroll(){  
        window.scrollTo(0, 0);
    }

    return(
        <Router>
            <div className={`banner-loading ${!initWeb && "banner-loading-close"}`}>
                <div>
                    <img src={logo1} alt="LOGO1" className={`foto1 ${animation1 && "foto1-appear"}`}/>
                    <img src={logo2} alt="LOGO2" className={`foto2 ${animation2 && "foto2-appear"}`}/>
                </div>
            </div>
            <div className={`main-container`}>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Routes>
                    <Route path="/" element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>} />
                    <Route path="/Contact" element={<Contact menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>} />
                    <Route path="/*" element={<Page404/>} />
                </Routes>
            </div>
        </Router>
    )
} 

export default App