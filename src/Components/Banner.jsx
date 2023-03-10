import { useMediaQuery } from "@mui/material"

export default function Banner(){
    const isDesktop = useMediaQuery("(min-width:1024px")

    return(
        <div className={`banner-container ${isDesktop?"desk":"mobile"}`}>
            <div className="title">
                <h1>Your allies</h1>
                <h1>to give flight</h1>
                <h1>to your business</h1>
            </div>
            <p className="subtitle">
                At Mansa Visual we work toward your goals through the design and marketing solutions your business needs.
            </p>
            <div className="mouse-container">
                <div className={`mouse ${isDesktop?"desk":"mobile"}`}></div>
            </div>
        </div>
    )
}