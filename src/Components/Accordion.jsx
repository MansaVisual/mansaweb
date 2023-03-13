import { useMediaQuery } from "@mui/material"
import { useState } from "react"

export default function Accordion(){

    const arrayAccordion=[
        {
            title:"UX/UI Design",
            array:["Strategy workshop","Defining user person","Empathy mapping","Analyting competitor","Mind mapping & card sorting",
                "Architecting information","Low difelity sketches","High fidelity wireframing","Defining UI guidelines"
            ],
            info:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            title:"Web Development",
            array:["Front-end development","Back-end development","UI/UX design","MVP development","QA testing","Maintenance & support"],
            info:"We offer you a combination of deep knowledge of flagship frameworks and expertise in creating pixel-perfect designs for top-notch user experiences. Build an outstanding application that’s perfectly compatible with any desktop device."
        },
        {
            title:"App Development",
            array:["iOs App development","Android app development","React Native App development","Launch & deployment"],
            info:"We will take your project through a comprehensive app development process that comprises the following phases."
        },
        {
            title:"Branding",
            array:["Design Logo", "Visual Design", "Tone of voice", "Identity manual"],
            info:""
        },
        // {
        //     title:"Data & Analytics",
        //     array:["Brand Strategy", "Brand, sdfsd", "Load generatoru"],
        //     info:""
        // },
        {
            title:"Marketing & Promotion",
            array:["Google & Facebook Ads", "Social Media Strategy", "Content Design", "Marketing Planification"],
            info:""
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
                if(!isDesktop){
                    if(document.getElementById(`accordion${idParam}`).classList.value.indexOf("accordion-close")!==-1){
                        helper1(`accordion${objOpen}`,"accordion-close","accordion-open")
                    }else{
                        helper1(`accordion${objOpen}`,"accordion-open","accordion-close")
                    }
                }else{
                    if(document.getElementById(`accordion-info-${idParam}`).classList.value.indexOf("accordion-close")!==-1){
                        helper1(`accordion-info-${objOpen}`,"accordion-close","accordion-open")
                    }else{
                        helper1(`accordion-info-${objOpen}`,"accordion-open","accordion-close")
                    }
                }
            }else{
                if(!isDesktop){
                    helper1(`accordion${objOpen}`,"accordion-open","accordion-close")
                }else{
                    helper1(`accordion-info-${objOpen}`,"accordion-open","accordion-close")
                }
            }
        }
        if(!isDesktop){
            if(idParam!==objOpen){
                setObjOpen(idParam)
                helper1(`accordion${idParam}`,"accordion-close","accordion-open")
            }
        }else{
            if(idParam!==objOpen){
                setObjOpen(idParam)
                helper1(`accordion-info-${idParam}`,"accordion-close","accordion-open")
            }
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

    const isDesktop = useMediaQuery("(min-width:1024px")

    return(
        <div className={`accordion-container ${isDesktop?"desk":"mobile"}`}>
            {arrayAccordion.map((obj,i)=>{
                return(
                    <div key={i} style={{borderBottom:i+1!==arrayAccordion.length&&"1px solid #FFF0D9"}}>
                        <div className="card-accordion" onClick={()=>{obj.array.length!==0 && onClickAccordion(i)}}>
                            <h2>{obj.title}</h2>
                            {obj.array.length!==0&&
                                <>
                                    <div className="line1" id={`line${i}-1`}></div>
                                    <div className="line2" id={`line${i}-2`}></div>
                                </>
                            }
                        </div>
                        {!isDesktop ? 
                            <div id={`accordion${i}`} className={`accordion${i} accordion-close`}>
                                {obj.array.map((obj,ii)=>{
                                    return(
                                        <h3 key={ii}>{obj}</h3>
                                    )
                                })}
                            </div>
                        :
                            <div id={`accordion-info-${i}`} className="accordion-info accordion-close">
                                <div id={`accordion${i}`} className="accordion">
                                    {obj.array.map((obj,ii)=>{
                                        return(
                                            <h3 key={ii}>{obj}</h3>
                                        )
                                    })}
                                </div>
                                <div className="info">
                                    <p>{obj.info}</p>
                                </div>
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}