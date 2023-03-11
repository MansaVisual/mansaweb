import Banner from "../Components/Banner"
import calendar from "../assets/calendar.svg"
import TitlesHome from "../Components/TitlesHome"
import eagle from "../assets/eagle.svg"
import Accordion from "../Components/Accordion"
import Ourteam from "../Components/OurTeam"
import { useEffect, useState } from "react"
import { PopupModal } from "react-calendly"
import { useMediaQuery } from "@mui/material"
import logoFoot from "../assets/logo-footer.svg"

const Home = ({menuOpen,setMenuOpen}) =>{

    const [popUp,setPopUp]=useState(false)
    const [popUpBack,setPopUpBack]=useState(false)

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
        <div className={`home-container ${isDesktop?"desk":"mobile"}`}>
            <Banner/>

            <div className="button-calendly" onClick={() => {setPopUp(true);setPopUpBack(true)}}>
                <div>
                    <img style={{width:"30px",height:"30px"}} src={calendar} alt="BUTTON"/>
                </div>
            </div>

            <PopupModal
                url="https://calendly.com/mansastudio/15min"
                open={popUp}
                onModalClose={() => {setPopUp(false);setPopUpBack(false)}}
                rootElement={document.getElementById("root")}
            />

            {popUpBack && <div className="popUp-calendly"></div>}

            <div className="home-container-2">
                <div className={`first-box gradient-background ${isDesktop?"desk":""}`} onClick={()=>{setPopUp(true);setPopUpBack(true)}}>
                    <h2>Web Development & Design Agency</h2>
                    <p>We create experiences and build products all together. We make your business grow.</p>
                    <p className="link">Schedule a meeting here</p>
                </div>
                
                <TitlesHome titleClass={"services"} title={"Services"}/>

                <Accordion/>

                <TitlesHome titleClass={"clients"} title={"Clients"}/>

                <span className="button-schedule gradient-background" onClick={()=>{setPopUp(true);setPopUpBack(true)}}>
                    <img src={calendar} alt="CALENDAR" />
                    Schedule Meeting
                </span>

                <div className="ourTeam-eagle">
                    <img src={eagle} alt="EAGLE" id="OurTeam"/>
                </div>

                <TitlesHome titleClass={"team"} title={"Our Team"}/>
                <p className="ourTeam-description">
                    We have a global team mainly focused in Argentina, Italy and the USA. This allows us to improve productivity as well as creativity and service.
                </p>

                <Ourteam/>

            </div>
            {!isDesktop ?
                <div className="footer gradient-background">
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

export default Home