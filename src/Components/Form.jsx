import { useMediaQuery } from "@mui/material"
import { Fragment, useEffect, useState } from "react"
import emailjs from "@emailjs/browser";
import FormMobile from "./FormMobile";
import FormDesk from "./FormDesk";

export default function Form(){

    const [form,setForm]=useState({
        mail:"",
        name:"",
        phone:"",
        company:"",
        description:""
    })
    
    const arrayFormMobile=[
        {
            title:"Name",
            form:"name",
            optional:false
        },
        {
            title:"Email",
            form:"mail",
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
            title:"Describe your project in short",
            form:"description",
            optional:false
        },
    ]

    const arrayFormDesk=[
        {
            title:"Name",
            form:"name",
            optional:false
        },
        {
            title:"Company Name",
            form:"company",
            optional:true
        },
        {
            title:"Email",
            form:"mail",
            optional:false
        },
        {
            title:"Phone",
            form:"phone",
            optional:true
        },
        {
            title:"Describe your project in short",
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


    const handleClick = async()=>{
        setClickButton(true)
        let focus=false
        let returnError=false

        setTimeout(() => {
            if(form.name===""){
                setErrorName(true)
                document.getElementById("Name").focus()
                focus=true
                returnError=true
            }
            if(form.mail===""){
                setErrorMail(true)
                if(!focus){
                    document.getElementById("Email").focus()
                    focus=true
                }
                returnError=true
            }else{
                if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.mail))){
                    setErrorValidate(true)
                    if(!focus){
                        document.getElementById("Email").focus()
                        focus=true
                    }
                    returnError=true
                }
            }
            if(form.description===""){
                setErrorDescription(true)
                if(!focus){
                    document.getElementById("Describe your project in short").focus()
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
                    if(form.description==="1"){
                        setMailSend(true)
                    }else{
                        setMailSend(false)
                    }
                },
                function () {
                    setClickButton(false)
                    setMailSend(false)
                }
            );
        }, 1500);
    }

    const isDesktop = useMediaQuery("(min-width:1024px")

    return(
        <div className={`form-container ${isDesktop?"desk":"mobile"}`}>
            {mailSend===null &&
                <>
                    {!isDesktop&&<p className="title">Contact Us</p>}
                    <p className="subtitle">To discuss a new project or find out more about us, do not hesitate to contact info@mansastudio.com or call our offices:</p>
                </>
            }
            {!isDesktop ?
                <FormMobile 
                    mailSend={mailSend} arrayFormMobile={arrayFormMobile} setForm={setForm} form={form} setErrorDescription={setErrorDescription} setErrorMail={setErrorMail}
                    setErrorValidate={setErrorValidate} setErrorName={setErrorName} errorName={errorName} errorValidate={errorValidate} errorMail={errorMail} errorDescription={errorDescription}
                    clickButton={clickButton} handleClick={handleClick} setClickButton={setClickButton} setMailSend={setMailSend} arrayFormDesk={arrayFormDesk}
                />
            :
                <FormDesk 
                    mailSend={mailSend} setForm={setForm} form={form} setErrorDescription={setErrorDescription} setErrorMail={setErrorMail}
                    setErrorValidate={setErrorValidate} setErrorName={setErrorName} errorName={errorName} errorValidate={errorValidate} errorMail={errorMail} errorDescription={errorDescription}
                    clickButton={clickButton} handleClick={handleClick} setClickButton={setClickButton} setMailSend={setMailSend} arrayFormDesk={arrayFormDesk}
                />
            }
        </div>
    )
}