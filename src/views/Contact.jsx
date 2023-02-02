import { useEffect } from "react"
import arg from "../assets/argentina.svg"
import ita from "../assets/italy.svg"
import eua from "../assets/united-states.svg"
import Form from "../Components/Form"

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

    const mails = [
        {
            pais:"Argentina",
            provincia:"Buenos Aires",
            mail:"bsas@mansavisual.com",
            telefono:"(+54) 11 63001724",
            bandera:arg
        },
        {
            pais:"United States",
            provincia:"California",
            mail:"usa@mansavisual.com",
            telefono:"(+1) 646 4040026",
            bandera:eua
        },
        {
            pais:"Italy",
            provincia:"Roma",
            mail:"italy@mansavisual.com",
            telefono:"+6 51 4043130",
            bandera:ita
        },
    ]

    return(
        <div className="contact-container">
            <div className="contact-container-2">
                <p className="description">Our team is based in Buenos Aires, but we work with clients all over the world. We ensure smooth planning and communication across different time zones.</p>
                <p className="description description-2">To discuss a new project or find out more about us, do not hesitate to contact info@mansavisual.com or call our offices:</p>

                <div className="contacts">
                    {mails.map((obj,i)=>{
                        return(
                            <div>
                                <h3>{obj.provincia}</h3>
                                <div>
                                    <img src={obj.bandera} alt="BANDERA" />
                                    <h3>{obj.pais}</h3>
                                </div>
                                <h4>{obj.mail}</h4>
                                <h4>{obj.telefono}</h4>
                            </div>
                        )
                    })}
                </div>

                <Form/>


                <p className="footer">2023 Mansa Visual. All Right Reserved. Terms Of Use. Privacy Policy</p>
            </div>
        </div>
    )
}

export default Contact