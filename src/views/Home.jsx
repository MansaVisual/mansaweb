import Banner from "../Components/Banner"
import calendar from "../assets/calendar.svg"
import TitlesHome from "../Components/TitlesHome"
import eagle from "../assets/eagle.svg"
import Accordion from "../Components/Accordion"
import Ourteam from "../Components/OurTeam"
import { useEffect, useState } from "react"
import { PopupModal, PopupWidget } from "react-calendly"

const Home = ({menuOpen,setMenuOpen}) =>{

    const [popUp,setPopUp]=useState(false)

    useEffect(() => {
        if(menuOpen){
            setMenuOpen(!menuOpen)
        }
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });

        document.querySelectorAll(".calendly-badge-content")[0].innerHTML=`<img style=width:30px;height:30px src=${calendar} alt="BUTTON"/>`
        document.querySelectorAll(".calendly-badge-content")[0].style.padding="0px 11px"
        document.querySelectorAll(".calendly-badge-content")[0].style.width="52px"
        document.querySelectorAll(".calendly-badge-content")[0].style.height="52px"
    }, [])

    return(
        <div className="home-container">
            <Banner/>

            <PopupWidget
                url="https://calendly.com/mansastudio/15min"
                rootElement={document.getElementById("root")}
            />

            <div className="home-container-2">
                <div className="first-box gradient-background" onClick={()=>setPopUp(true)}>
                    <h2>Web Development & Design Agency</h2>
                    <p>We create experiences and build products all together. We make your business grow</p>
                    <p className="link">Schedule a meeting here</p>
                </div>
                
                <TitlesHome titleClass={"services"} title={"Services"}/>

                <Accordion/>

                <TitlesHome titleClass={"clients"} title={"Clients"}/>

                <span className="button-schedule gradient-background" onClick={()=>setPopUp(true)}>
                    <img src={calendar} alt="CALENDAR" />
                    Schedule Meeting
                </span>

                <PopupModal
                    url="https://calendly.com/mansastudio/15min"
                    open={popUp}
                    onModalClose={() => {setPopUp(false)}}
                    rootElement={document.getElementById("root")}
                />

                <div className="ourTeam-eagle">
                    <img src={eagle} alt="EAGLE" id="OurTeam"/>
                </div>

                <TitlesHome titleClass={"team"} title={"Our Team"}/>
                <p className="ourTeam-description">
                    We have a global team mainly focused in Argentina, Italy and the USA. This allows us to improve productivity as well as creativity and service.
                </p>

                <Ourteam/>

            </div>
            <div className="footer gradient-background">
                <p>2023 Mansa Visual. All Rights Reserved.</p>
                <p>
                    Terms Of Use. Privacy Policy
                </p>
            </div>
        </div>
    )
}

export default Home