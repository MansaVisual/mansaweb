import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import arrow from "../assets/arrow-right.svg"

const Page404 = () =>{
    const navigate=useNavigate()

    return(
        <div className="container-404">
            <p className="title">404</p>
            <p className="subtitle">Oops... Something went wrong. Please, check the page address or go to home page.</p>
            <div className="button" onClick={()=>navigate("/")}>
                <p>Go to home page</p>
                <img src={arrow} alt="ARROW" />
            </div>
        </div>
    )
}

export default Page404