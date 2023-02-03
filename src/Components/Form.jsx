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
            form:"mail"
        },
        {
            title:"Name",
            form:"name"
        },
        {
            title:"Phone",
            form:"phone"
        },
        {
            title:"Company Name",
            form:"company"
        },
        {
            title:"Describe Your Project",
            form:"description"
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
        console.log(form)
    }, [form])

    return(
        <div className="form-container">
            <p className="title">Contact Us</p>
            <p className="subtitle">Mail to <span>info@mansavisual</span> or book an appointment in the <span>www.app.com</span></p>

            <div className="form">
                {arrayForm.map((obj,i)=>{
                    return(
                        <TextField key={i} id={obj.title} variant="standard" label={obj.title} 
                            onChange={(e)=>setForm({...form,[obj.form]:e.target.value})}
                            multiline={true}
                        />
                    )
                })}
                <div className="button" onClick={()=>handleClick()}>
                    {!clickButton&&<p>SEND</p>}
                    {clickButton&&<div className="button-loader"></div>}
                </div>
            </div>
        </div>
    )
}