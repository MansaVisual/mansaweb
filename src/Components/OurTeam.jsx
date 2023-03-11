import {useEffect,useState} from 'react'
import foto1 from "../assets/abel.svg"
import foto2 from "../assets/lucas.svg"
import foto3 from "../assets/timoteo.svg"
import foto4 from "../assets/denise.svg"
import foto_1 from "../assets/abel2.svg"
import foto_2 from "../assets/lucas2.svg"
import foto_3 from "../assets/timoteo2.svg"
import foto_4 from "../assets/denise2.svg"
import linkedin from "../assets/linkedin.svg"
import { useMediaQuery } from '@mui/material'

export default function Ourteam() {

    const [changePh,setChangePh]=useState(false)
    const [changePhN,setChangePhN]=useState("obj2")

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
            if(!changePh){
                setChangePh(true)
            }
        }, 4000);
    }, [changePh]);

    useEffect(() => {
        setTimeout(() => {
            if(changePhN==="obj2"){
                setChangePhN("obj3")
            }else if(changePhN==="obj3"){
                setChangePhN("obj1")
            }else if(changePhN==="obj1"){
                setChangePhN("obj4")
            }else{
                setChangePhN("obj2")
            }
        }, 2000);
    }, [changePhN]);

    const isDesktop = useMediaQuery("(min-width:1024px")

    return(
        <div className={`ourTeam-container ${isDesktop?"desk":"mobile"}`}>
            {ourTeamArray.map((obj,i)=>{
                return(
                    <div className="card-team" key={i}>
                        <div>
                            {changePhN===`obj${i+1}` &&<>
                                <div className='glitch'></div>
                                <div className='div-flicker d1'></div>
                                <div className='div-flicker d2'></div>
                                <div className='div-flicker d3'></div>
                                <div className='div-flicker d4'></div>
                                <div className='div-flicker d5'></div>
                                <div className='div-flicker d6'></div>
                                <div className='div-flicker d7'></div>
                                <div className='div-box-flicker'></div>
                                <div className='div-box-flicker-2'></div>
                                <div className='div-box-flicker-3'></div>
                            </>}
                            <img src={changePhN===`obj${i+1}`?changePh?[obj.foto2]:[obj.foto]:[obj.foto]} className={`${changePhN===`obj${i+1}`?"flicker":""}`} alt="FOTO" />
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