import { TextField } from "@mui/material"
import { Fragment, useEffect, useState } from "react"
import emailjs from "@emailjs/browser";
import xRed from "../assets/x-red.svg"
import checkRed from "../assets/check-red.svg"
import arrowRed from "../assets/arrow-right-red.svg"

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
    
    const [mailSend,setMailSend]=useState(null)

    useEffect(() => {
        if(mailSend===null){
            for(let i in arrayForm){
                if(document.getElementById(`${arrayForm[i].title}-label`).children.length!==0){
                    document.getElementById(`${arrayForm[i].title}-label`).children[0].innerHTML=" (optional)"
                }
            }
        }
    }, [])


    const handleClick = async()=>{
        setClickButton(true)
        let focus=false
        let returnError=false

        setTimeout(() => {
            if(form.mail===""){
                setErrorMail(true)
                document.getElementById("Mail").focus()
                focus=true
                returnError=true
            }else{
                if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.mail))){
                    setErrorValidate(true)
                    document.getElementById("Mail").focus()
                    focus=true
                    returnError=true
                }
            }
            if(form.name===""){
                setErrorName(true)
                if(!focus){
                    document.getElementById("Name").focus()
                    focus=true
                }
                returnError=true
            }
            if(form.description===""){
                setErrorDescription(true)
                if(!focus){
                    document.getElementById("Describe Your Project").focus()
                }
                returnError=true
            }
    
            if(returnError){
                setClickButton(false)
                return
            }
            
            emailjs.send("service_83l1qlo", "template_rw1tsgv", {
                form_mail:form.mail,
                form_name:form.name,
                form_phone:form.phone,
                form_company:form.company,
                form_description:form.description
            },"w6YQHA8ldotv1sCU2").then(
                function () {
                    setClickButton(false)
                    setMailSend(true)
                },
                function () {
                    setClickButton(false)
                    setMailSend(false)
                }
            );
        }, 1500);
    }

    return(
        <div className="form-container">
            <p className="title">Contact Us</p>
            <p className="subtitle">Mail to <span>info@mansavisual</span> or book an appointment in the <span>www.app.com</span></p>

            <div className="form">
                {mailSend===null &&
                    <>
                        {arrayForm.map((obj,i)=>{
                            return(
                                <Fragment key={i}>
                                    <TextField required={obj.optional} id={obj.title} variant="standard" label={obj.title} 
                                        onChange={(e)=>{
                                            setForm({...form,[obj.form]:e.target.value})
                                            if(obj.title==="Mail"){
                                                setErrorValidate(false)
                                                setErrorMail(false)
                                            }else if(obj.title==="Name"){
                                                setErrorName(false)
                                            }else if(obj.title==="Describe Your Project"){
                                                setErrorDescription(false)
                                            }
                                        }}
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
                        <p className="text-form">By submitting this form I consent to having Mansa Studio collect and process my personal details and agree with Privacy policy</p>
                        <div className="button">
                            {!clickButton&&<button onClick={()=>handleClick()}>SEND</button>}
                            {clickButton&&<div className="button-loader"></div>}
                        </div>
                    </>
                }
                {mailSend===false && 
                    <div className="form-state">
                        <img src={xRed} alt="X" />
                        <p className="description">Sorry, for some reason your message has not been sent. Please try again</p>
                        <div className="button" onClick={()=>{
                            setClickButton(false)
                            setMailSend(null)
                        }}>
                            <p>Try Again</p>
                            <img src={arrowRed} alt="ARROW" />
                        </div>
                    </div>
                }
                {mailSend===true && 
                    <div className="form-state">
                        <img src={checkRed} alt="X" />
                        <p className="description">Thank you. We have received her message. We will try to respond in a few hours.</p>
                    </div>
                }
            </div>
        </div>
    )
}