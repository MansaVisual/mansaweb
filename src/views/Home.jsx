import Banner from "../Components/Banner"
import calendar from "../assets/calendar.svg"
import TitlesHome from "../Components/TitlesHome"
import eagle from "../assets/eagle.svg"
import Accordion from "../Components/Accordion"

const Home = () =>{

    return(
        <div className="home-container">
            <Banner/>

            <div className="home-container-2">
                <div className="first-box gradient-background">
                    <h2>Web Development & Design Agency</h2>
                    <p>We create experiences and build products together, that make business grow..</p>
                    <p className="link">Schedule a meeting here</p>
                </div>
                
                <TitlesHome titleClass={"services"} title={"Services"}/>

                {/* <div style={{width:"100%",height:"448px",backgroundColor:"#5D5D5D", marginTop:"30px"}}></div> */}
                <Accordion/>

                <TitlesHome titleClass={"clients"} title={"Clients"}/>

                <span className="button-schedule gradient-background">
                    <img src={calendar} alt="CALENDAR" />
                    Schedule Meeting
                </span>

                <div className="ourTeam-eagle">
                    <img src={eagle} alt="EAGLE" />
                </div>

                <TitlesHome titleClass={"team"} title={"Our Team"}/>
                <p className="ourTeam-description">
                    Our team is based in Buenos Aires, but we work with clients all over the world. We ensure smooth planning and communication across different time zones.
                </p>

            </div>
        </div>
    )
}

export default Home