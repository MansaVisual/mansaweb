import { useState } from "react"
import add from "../assets/add.svg"

export default function Accordion(){

    const arrayAccordion=[
        {
            title:"UX/UI Design",
            array:["Brand Strategy 1", "Brand, sdfsd 1", "Load generatoru 1"]        
        },
        {
            title:"Web Development",
            array:["Brand Strategy", "Brand, sdfsd", "Load generatoru"]        
        },
        {
            title:"App Development",
            array:["Brand Strategy", "Brand, sdfsd", "Load generatoru"]        
        },
        {
            title:"Branding",
            array:["Brand Strategy", "Brand, sdfsd", "Load generatoru"]        
        },
        {
            title:"Data, Analytics",
            array:["Brand Strategy", "Brand, sdfsd", "Load generatoru"]        
        },
        {
            title:"Marketing & Promotion",
            array:["Brand Strategy", "Brand, sdfsd", "Load generatoru"]        
        }
    ]

    const [objOpen,setObjOpen]=useState("")

    const onClickAccordion=(idParam)=>{
        if(objOpen!==""){
            if(idParam===objOpen){
                if(document.getElementById(`accordion${idParam}`).classList.value.indexOf("accordion-close")!==-1){
                    document.getElementById(`accordion${objOpen}`).classList.remove("accordion-close")
                    document.getElementById(`accordion${objOpen}`).classList.add("accordion-open")
                }else{
                    document.getElementById(`accordion${objOpen}`).classList.add("accordion-close")
                    document.getElementById(`accordion${objOpen}`).classList.remove("accordion-open")
                }
            }else{
                document.getElementById(`accordion${objOpen}`).classList.add("accordion-close")
                document.getElementById(`accordion${objOpen}`).classList.remove("accordion-open")
            }
        }
        if(idParam!==objOpen){
            setObjOpen(idParam)
            document.getElementById(`accordion${idParam}`).classList.remove("accordion-close")
            document.getElementById(`accordion${idParam}`).classList.add("accordion-open")
        }
        if(objOpen===""){
            document.getElementById(`logo${idParam}`).style.display="none"
        }else if(objOpen===idParam){
            if(document.getElementsByClassName("accordion-open").length!==0){
                document.getElementById(`logo${objOpen}`).style.display="none"
            }else{
                document.getElementById(`logo${objOpen}`).style.display="block"
            }
        }else{
            document.getElementById(`logo${objOpen}`).style.display="block"
            document.getElementById(`logo${idParam}`).style.display="none"
        }
    }

    return(
        <div className="accordion-container">
            {arrayAccordion.map((obj,i)=>{
                return(
                    <div key={i}>
                        {i!==0&&<div className="line-accordion"></div>}
                        <div className="card-accordion" onClick={()=>{onClickAccordion(i)}}>
                            <h2>{obj.title}</h2>
                            <img src={add} alt="ADD" id={`logo${i}`}/>
                        </div>
                        <div id={`accordion${i}`} className={`accordion${i} accordion-close`}>
                            {obj.array.map((obj,ii)=>{
                                return(
                                    <h3 key={ii}>{obj}</h3>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}