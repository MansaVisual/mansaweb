import { TextField } from "@mui/material"
import { Fragment, useEffect, useState } from "react"

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

    const [errorMail,setErrorMail]=useState(false)
    const [errorName,setErrorName]=useState(false)
    const [errorDescription,setErrorDescription]=useState(false)

    const [errorValidate,setErrorValidate]=useState(false)


    const handleClick = ()=>{
        setClickButton(true)
        let returnError=false

        if(form.mail===""){
            setErrorMail(true)
            returnError=true
        }else{
            if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.mail))){
                setErrorValidate(true)
                returnError=true
            }
        }
        if(form.name===""){
            setErrorName(true)
            returnError=true
        }
        if(form.description===""){
            setErrorDescription(true)
            returnError=true
        }

        if(returnError){
            setClickButton(false)
            return
        }

        setClickButton(false)
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

            <div className="form">
                {arrayForm.map((obj,i)=>{
                    return(
                        <Fragment key={i}>
                            <TextField required={obj.optional} id={obj.title} variant="standard" label={obj.title} 
                                onChange={(e)=>setForm({...form,[obj.form]:e.target.value})}
                                multiline={true}
                                className={`
                                    ${obj.title==="Mail" && errorValidate ? "MuiInputBase-inputMultiline-error" : ""}
                                    ${obj.title==="Mail" && errorMail ? "MuiInputBase-inputMultiline-error" : ""}
                                    ${obj.title==="Name" && errorName ? "MuiInputBase-inputMultiline-error" : ""}
                                    ${obj.title==="Describe Your Project" && errorDescription ? "MuiInputBase-inputMultiline-error" : ""}
                                `}
                            />
                            {obj.title==="Mail" && errorValidate ? <span className="label-error">Incorrect email</span> : null}
                            {obj.title==="Mail" && errorMail ? <span className="label-error">Please enter your email</span> : null}
                            {obj.title==="Name" && errorName ? <span className="label-error">Please enter your name</span> : null}
                            {obj.title==="Describe Your Project" && errorDescription ? <span className="label-error">Please enter a project's description</span> : null}
                        </Fragment>
                    )
                })}
                <div className="button">
                    {!clickButton&&<button onClick={()=>handleClick()}>SEND</button>}
                    {clickButton&&<div className="button-loader"></div>}
                </div>
            </div>
        </div>
    )
}