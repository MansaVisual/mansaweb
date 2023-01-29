import { useState } from "react"

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
                    <div >
                        
                    </div>
                )
            })}
        </div>
    )
}