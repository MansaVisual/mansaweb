import { TextField } from "@mui/material"
import { useEffect, useState } from "react"

export default function Form(){

    const [form,setForm]=useState({
        mail:"",
        name:"",
        phone:"",
        company:"",
        description:""
    })
    
    const arrayForm=[
        {
            title:"Mail",
            form:"mail",
            optional:false
        },
        {
            title:"Name",
            form:"name",
            optional:false
        },
        {
            title:"Phone",
            form:"phone",
            optional:true
        },
        {
            title:"Company Name",
            form:"company",
            optional:true
        },
        {
            title:"Describe Your Project",
            form:"description",
            optional:false
        },
    ]

    const [clickButton,setClickButton]=useState(false)

    const handleClick = ()=>{
        setClickButton(true)
        setTimeout(() => {
            setClickButton(false)
        }, 5000);
    }

    useEffect(() => {
        for(let i in arrayForm){
            if(document.getElementById(`${arrayForm[i].title}-label`).children.length!==0){
                document.getElementById(`${arrayForm[i].title}-label`).children[0].innerHTML=" (optional)"
            }
        }
    }, [])

    return(
        <div className="form-container">
            <p className="title">Contact Us</p>
            <p className="subtitle">Mail to <span>info@mansavisual</span> or book an appointment in the <span>www.app.com</span></p>

            <form className="form">
                {arrayForm.map((obj,i)=>{
                    return(
                        <TextField required={obj.optional} key={i} id={obj.title} variant="standard" label={obj.title} 
                            onChange={(e)=>setForm({...form,[obj.form]:e.target.value})}
                            multiline={true}
                        />
                    )
                })}
                <div className="button" onClick={()=>handleClick()}>
                    {!clickButton&&<button>SEND</button>}
                    {clickButton&&<div className="button-loader"></div>}
                </div>
            </form>
        </div>
    )
}