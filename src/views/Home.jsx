import Banner from "../Components/Banner"

const Home = () =>{

    return(
        <div className="home-container">
            <Banner/>

             <div className="first-box gradient-background">
                <h2>Web Development & Design Agency</h2>
                <p>We create experiences and build products together, that make business grow..</p>
                <p className="link">Schedule a meeting here</p>
            </div>
            
        </div>
    )
}

export default Home