import { useState } from "react"

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
        const helper1=(param,class1,class2)=>{
            document.getElementById(param).classList.remove(class1)
            document.getElementById(param).classList.add(class2)
        }
        if(objOpen!==""){
            if(idParam===objOpen){
                if(document.getElementById(`accordion${idParam}`).classList.value.indexOf("accordion-close")!==-1){
                    helper1(`accordion${objOpen}`,"accordion-close","accordion-open")
                }else{
                    helper1(`accordion${objOpen}`,"accordion-open","accordion-close")
                }
            }else{
                helper1(`accordion${objOpen}`,"accordion-open","accordion-close")
            }
        }
        if(idParam!==objOpen){
            setObjOpen(idParam)
            helper1(`accordion${idParam}`,"accordion-close","accordion-open")
        }

        // -------------------------------------------------------------------------------------------------------------
        const helper2=(param1,param2,class1,class2,action)=>{
            if(action){
                document.getElementById(param1).classList.add(class1)
                document.getElementById(param2).classList.add(class2)
            }else{
                document.getElementById(param1).classList.remove(class1)
                document.getElementById(param2).classList.remove(class2)
            }
        }
        if(objOpen===""){
            helper2(`line${idParam}-1`,`line${idParam}-2`,"line1-open","line2-open",true)
    
            setTimeout(() => {
                document.getElementById(`line${idParam}-1`).style.display="none"
            }, 200);
        }else if(objOpen===idParam){
            if(document.getElementsByClassName("line2-open").length!==0){
                helper2(`line${objOpen}-1`,`line${objOpen}-2`,"line1-close","line2-close",true)
                helper2(`line${objOpen}-1`,`line${objOpen}-2`,"line1-open","line2-open",false)
                
                setTimeout(() => {
                    document.getElementById(`line${objOpen}-1`).style.display="block"
                }, 200);
            }else{
                helper2(`line${objOpen}-1`,`line${objOpen}-2`,"line1-open","line2-open",true)
                helper2(`line${objOpen}-1`,`line${objOpen}-2`,"line1-close","line2-close",false)
        
                setTimeout(() => {
                    document.getElementById(`line${objOpen}-1`).style.display="none"
                }, 200);
            }
        }else{
            helper2(`line${objOpen}-1`,`line${objOpen}-2`,"line1-close","line2-close",true)
            helper2(`line${objOpen}-1`,`line${objOpen}-2`,"line1-open","line2-open",false)
    
            setTimeout(() => {
                document.getElementById(`line${objOpen}-1`).style.display="block"
            }, 200);


            helper2(`line${idParam}-1`,`line${idParam}-2`,"line1-open","line2-open",true)
            helper2(`line${objOpen}-1`,`line${objOpen}-2`,"line1-close","line2-close",false)
    
            setTimeout(() => {
                document.getElementById(`line${idParam}-1`).style.display="none"
            }, 200);
        }
    }


    return(
        <div className="accordion-container">
            {arrayAccordion.map((obj,i)=>{
                return(
                    <div key={i} style={{borderBottom:i+1!==arrayAccordion.length&&"1px solid #FFF0D9"}}>
                        {/* {i!==0&&<div className="line-accordion"></div>} */}
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