import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home"
import "./styles/styles.scss"
import NavBar from "./components/NavBar";


const App = () =>{

    return(
        <>
            <Router>
                <NavBar/>
                <Routes>
                <Route path="/" element={<Home/>} />
                </Routes>
            </Router>
        </>
    )
} 

export default App