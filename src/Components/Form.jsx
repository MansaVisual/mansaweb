import { TextField } from "@mui/material"
import { useState } from "react"

export default function Form(){
    const [form,setForm]=useState({
        mail:"",
        name:"",
        phone:"",
        company:"",
        description:""
    })

    return(
        <div className="form-container">
            <p className="title">Contact Us</p>
            <p className="subtitle">Mail to <span>info@mansavisual</span> or book an appointment in the <span>www.app.com</span></p>

            <div className="form">
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>
    )
}