import { useState } from "react"
import add from "../assets/add.svg"

export default function Accordion(){

    const arrayAccordion=[
        "UX/UI Design",
        "Web Development",
        "App Development",
        "Branding",
        "Data, Analytics",
        "Marketing & Promotion"
    ]

    const [objOpen,setObjOpen]=useState("")

    return(
        <div className="accordion-container">
            {arrayAccordion.map((obj,i)=>{
                return(
                    <div className="card-accordion">
                        <h2>{obj}</h2>
                        <img src={add} alt="ADD" />
                    </div>
                )
            })}
        </div>
    )
}