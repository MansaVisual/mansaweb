import Banner from "../Components/Banner"
import calendar from "../assets/calendar.svg"
import TitlesHome from "../Components/TitlesHome"
import eagle from "../assets/eagle.svg"
import Accordion from "../Components/Accordion"
import Ourteam from "../Components/OurTeam"
import { useEffect } from "react"

const Home = ({menuOpen,setMenuOpen}) =>{

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
        <div className="home-container">
            <Banner/>

            <div className="home-container-2">
                <div className="first-box gradient-background" onClick={()=>window.open("https://calendly.com/mansavisual/15min")}>
                    <h2>Web Development & Design Agency</h2>
                    <p>We create experiences and build products all together. We make your business grow</p>
                    <p className="link">Schedule a meeting here</p>
                </div>
                
                <TitlesHome titleClass={"services"} title={"Services"}/>

                <Accordion/>

                <TitlesHome titleClass={"clients"} title={"Clients"}/>

                <span className="button-schedule gradient-background" onClick={()=>window.open("https://calendly.com/mansavisual/15min")}>
                    <img src={calendar} alt="CALENDAR" />
                    Schedule Meeting
                </span>

                <div className="ourTeam-eagle">
                    <img src={eagle} alt="EAGLE" />
                </div>

                <TitlesHome titleClass={"team"} title={"Our Team"}/>
                <p className="ourTeam-description">
                    We have a global team mainly focused in Argentina, Italy and the USA. This allows us to improve productivity as well as creativity and  service.
                </p>

                <Ourteam/>

            </div>
            <div className="home-footer gradient-background">
                <p>2023 Mansa Visual. All Rights Reserved.</p>
                <p>
                    Terms Of Use. Privacy Policy
                </p>
            </div>
        </div>
    )
}

export default Home