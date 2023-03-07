import foto1 from "../assets/abel.svg"
import foto2 from "../assets/lucas.svg"
import foto3 from "../assets/timoteo.svg"
import foto4 from "../assets/denise.svg"
import foto_1 from "../assets/abel2.svg"
import foto_2 from "../assets/lucas2.svg"
import foto_3 from "../assets/timoteo2.svg"
import foto_4 from "../assets/denise2.svg"
import linkedin from "../assets/linkedin.svg"
import { useState } from "react"
import { useEffect } from "react"

export default function Ourteam() {

    const [animation,setAnimation]=useState(true)
    const [changePhoto,setChangePhoto]=useState(true)

    const ourTeamArray=[
        {
            name:"Abel Palavecino",
            rol:"CHIEF OPERATING OFFICER",
            mail:"abelp@mansastudio.com",
            linkedin:"https://www.linkedin.com/in/abelpalavecino/",
            foto:foto1,
            foto2:foto_1
        },
        {
            name:"Luc Rossi",
            rol:"HEAD UX/UI DESIGNER",
            mail:"lucr@mansastudio.com",
            linkedin:"https://www.linkedin.com/in/lucasrossiux/",
            foto:foto2,
            foto2:foto_2
        },
        {
            name:"Timo Gambella",
            rol:"SOFTWARE ENGINEER",
            mail:"timog@mansastudio.com",
            linkedin:"https://www.linkedin.com/in/timoteo-gambella-4b6418210/",
            foto:foto3,
            foto2:foto_3
        },
        {
            name:"Denise Viola",
            rol:"CHIEF MARKETING OFFICE",
            mail:"denisev@mansastudio.com",
            linkedin:"https://www.linkedin.com/in/denisereddyeco/",
            foto:foto4,
            foto2:foto_4
        },
    ]

    useEffect(() => {
        setTimeout(() => {
            if(animation){
                setAnimation(false)
            }else{
                setAnimation(true)
            }
        }, 4000);
    }, [animation]);

    useEffect(() => {
        setTimeout(() => {
            if(changePhoto){
                setChangePhoto(false)
            }else{
                setChangePhoto(true)
            }
        }, 8000);
    }, [changePhoto]);

    return(
        <div className="ourTeam-container">
            {ourTeamArray.map((obj,i)=>{
                return(
                    <div className="card-team" key={i}>
                        <div>
                            <img className={`${!animation?"img-animation":"animation2"}`} src={changePhoto?[obj.foto]:[obj.foto2]} alt="FOTO" />
                        </div>
                        <img src={linkedin} alt="LINKEDIN" className="linkedin" onClick={()=>window.open(obj.linkedin)}/>
                        <h4 className="name">{obj.name}</h4>
                        <h4 className="rol">{obj.rol}</h4>
                        <h4 className="mail" id={`card-mail-${i}`} onClick={()=>{
                            window.location=`mailto:${obj.mail}`
                        }}>{obj.mail}</h4>
                    </div>
                )
            })}
        </div>
    )
}