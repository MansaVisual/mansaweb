import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home"
import "./styles/styles.scss"
import Navbar from "./Components/Navbar";
import Contact from "./views/Contact";
import { useEffect, useState } from "react";


const App = () =>{
    const [menuOpen,setMenuOpen]=useState(false)

    const [banner,setBanner]=useState(true)
    const [blurNumber,setBlurNumber]=useState(0)

    useEffect(()=>{
        setTimeout(() => {
            setBanner(false)
        }, 1500);

        
        let load=0
        const blurring = ()=>{

            load++
    
            if (load > 99) {
                clearInterval(int)
                document.getElementById("bg").classList.add("banner-loading-close")
            }

            setBlurNumber(load)

            document.getElementById("bg").style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
        }

        let int = setInterval(blurring,15)
    },[])

    
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }

    return(
        <Router>
            {!banner&&<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}
            <div className="banner-loading" id="bg"></div>
            <Routes>
                <Route path="/" element={<Home banner={banner} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>} />
                <Route path="/Contact" element={<Contact menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>} />
            </Routes>
        </Router>
    )
} 

export default App