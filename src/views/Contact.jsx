import { useEffect } from "react"
import arg from "../assets/argentina.svg"
// import ita from "../assets/italy.svg"
import eua from "../assets/united-states.svg"
import Form from "../Components/Form"
import con1 from "../assets/contact-1.svg"
import con2 from "../assets/contact-2.svg"
import { useMediaQuery } from "@mui/material"
import logoFoot from "../assets/logo-footer.svg"

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
            pais:"ARGENTINA",
            provincia:"Buenos Aires",
            mail:"infoar@mansastudio.com",
            telefono:"(+54) 11 63001724",
            bandera:arg
        },
        {
            pais:"UNITED STATES",
            provincia:"California",
            mail:"infous@mansastudio.com",
            telefono:"(+1) 646 4040026",
            bandera:eua
        },
        // {
        //     pais:"ITALY",
        //     provincia:"Roma",
        //     mail:"infoit@mansastudio.com",
        //     telefono:"+6 51 4043130",
        //     bandera:ita
        // },
    ]

    const isDesktop = useMediaQuery("(min-width:1024px")

    return(
        <div className={`contact-container ${isDesktop?"desk":"mobile"}`}>
            <div className="contact-container-2">
                <h2>Contact us</h2>
                <p className="description">
                    Our team is based in Buenos Aires, but we work with clients all over the world.
                    We ensure smooth planning and communication across different time zones.
                </p>

                <div className="contacts">
                    {mails.map((obj,i)=>{
                        return(
                            <div key={i}>
                                <h3>{obj.provincia}</h3>
                                <div>
                                    <img src={obj.bandera} alt="BANDERA" />
                                    <h3>{obj.pais}</h3>
                                </div>
                                <div>
                                    <img src={con2} alt="MAIL" />
                                    <h4 className="mail" onClick={()=>window.location=`mailto:${obj.mail}`}>{obj.mail}</h4>
                                </div>
                                <div>
                                    <img src={con1} alt="TEL" />
                                    <h4>{obj.telefono}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <Form/>
            {!isDesktop ? 
                <div className="footer footer-contact gradient-background">
                    <p>2023 Mansa Visual. All Rights Reserved.</p>
                    <p>
                        Terms Of Use. Privacy Policy
                    </p>
                </div>
            :
                <div className="footer">
                    <p onClick={()=>window.location=`mailto:info@mansa-studio.com`} className="mail-footer">info@mansa-studio.com</p>
                    <img src={logoFoot} alt="LOGO" onClick={()=>{
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                    }/>
                    <p>© 2023 Mansa. All Rights Reserved</p>
                </div>
            }
        </div>
    )
}

export default Contact