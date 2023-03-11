import { useMediaQuery } from "@mui/material"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Page404 = ({menuOpen,setMenuOpen}) =>{
    const navigate=useNavigate()

    useEffect(() => {
        if(menuOpen){
            setMenuOpen(!menuOpen)
        }
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
    }, [])

    const isDesktop = useMediaQuery("(min-width:1024px")


    return(
        <div className={`container-404 ${isDesktop?"desk":""}`}>
            <div>
                <p className="title">404</p>
                <p className="subtitle">Oops... Something went wrong. Please, check the page address or go to home page.</p>
            </div>
            <div className="button" onClick={()=>navigate("/")}>
                <p>Go to home page</p>
            </div>
        </div>
    )
}

export default Page404