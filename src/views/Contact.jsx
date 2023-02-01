import { useEffect } from "react"

const Contact = ({menuOpen,setMenuOpen}) =>{

    useEffect(() => {
        if(menuOpen){
            setMenuOpen(!menuOpen)
        }
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
    }, [])

    return(
        <div className="contact-container">

        </div>
    )
}

export default Contact