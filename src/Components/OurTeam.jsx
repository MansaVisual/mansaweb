import foto1 from "../assets/timoteo.jpg"
import foto2 from "../assets/BLzUH5GCIAAMGVe.jfif"
import foto3 from "../assets/timoteo.jpg"
import foto4 from "../assets/denise.jpeg"
import linkedin from "../assets/linkedin.svg"

export default function Ourteam() {

    const ourTeamArray=[
        {
            name:"Abel Palavecino",
            rol:"CHIEF OPERATING OFFICER",
            mail:"abelp@mansastudio.com",
            linkedin:"https://www.linkedin.com/in/abelpalavecino/",
            foto:foto1
        },
        {
            name:"Luc Rossi",
            rol:"HEAD UX/UI DESIGNER",
            mail:"lucr@mansastudio.com",
            linkedin:"https://www.linkedin.com/in/lucasrossiux/",
            foto:foto2
        },
        {
            name:"Timo Gambella",
            rol:"SOFTWARE ENGINEER",
            mail:"timog@mansastudio.com",
            linkedin:"https://www.linkedin.com/in/timoteo-gambella-4b6418210/",
            foto:foto3
        },
        {
            name:"Denise Viola",
            rol:"CHIEF MARKETING OFFICE",
            mail:"denisev@mansastudio.com",
            linkedin:"https://www.linkedin.com/in/denisereddyeco/",
            foto:foto4
        },
    ]

    return(
        <div className="ourTeam-container">
            {ourTeamArray.map((obj,i)=>{
                return(
                    <div className="card-team" key={i}>
                        <img src={obj.foto} alt="FOTO" />
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