import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home"
import "./styles/styles.scss"


const App = () =>{

    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </Router>
        </>
    )
} 

export default App