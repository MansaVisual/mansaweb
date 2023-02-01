import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home"
import "./styles/styles.scss"
import Navbar from "./Components/Navbar";
import Contact from "./views/Contact";
import { useState } from "react";


const App = () =>{
    const [menuOpen,setMenuOpen]=useState(false)

    return(
        <>
            <Router>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Routes>
                    <Route path="/" element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>} />
                    <Route path="/Contact" element={<Contact menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>} />
                </Routes>
            </Router>
        </>
    )
} 

export default App