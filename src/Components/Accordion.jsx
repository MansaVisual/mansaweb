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

    const onClickAccordion=async(idParam)=>{
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

        // -------------------------------------------------------------------------------------------------------------

        if(objOpen===""){
            document.getElementById(`line${idParam}-1`).classList.add("line1-open")
            document.getElementById(`line${idParam}-2`).classList.add("line2-open")
    
            setTimeout(() => {
                document.getElementById(`line${idParam}-1`).style.display="none"
            }, 200);
        }else if(objOpen===idParam){
            if(document.getElementsByClassName("line2-open").length!==0){
                document.getElementById(`line${objOpen}-1`).classList.add("line1-close")
                document.getElementById(`line${objOpen}-2`).classList.add("line2-close")
                document.getElementById(`line${objOpen}-1`).classList.remove("line1-open")
                document.getElementById(`line${objOpen}-2`).classList.remove("line2-open")
                
                setTimeout(() => {
                    document.getElementById(`line${objOpen}-1`).style.display="block"
                }, 200);
            }else{
                document.getElementById(`line${objOpen}-1`).classList.add("line1-open")
                document.getElementById(`line${objOpen}-2`).classList.add("line2-open")
                document.getElementById(`line${objOpen}-1`).classList.remove("line1-close")
                document.getElementById(`line${objOpen}-2`).classList.remove("line2-close")
        
                setTimeout(() => {
                    document.getElementById(`line${objOpen}-1`).style.display="none"
                }, 200);
            }
        }else{
            document.getElementById(`line${objOpen}-1`).classList.add("line1-close")
            document.getElementById(`line${objOpen}-2`).classList.add("line2-close")
            document.getElementById(`line${objOpen}-1`).classList.remove("line1-open")
            document.getElementById(`line${objOpen}-2`).classList.remove("line2-open")
    
            setTimeout(() => {
                document.getElementById(`line${objOpen}-1`).style.display="block"
            }, 200);
            
            document.getElementById(`line${idParam}-1`).classList.add("line1-open")
            document.getElementById(`line${idParam}-2`).classList.add("line2-open")
            document.getElementById(`line${objOpen}-1`).classList.remove("line1-close")
            document.getElementById(`line${objOpen}-2`).classList.remove("line2-close")
    
            setTimeout(() => {
                document.getElementById(`line${idParam}-1`).style.display="none"
            }, 200);
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
                            <div className="line1" id={`line${i}-1`}></div>
                            <div className="line2" id={`line${i}-2`}></div>
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