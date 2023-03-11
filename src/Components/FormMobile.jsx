import { TextField } from "@mui/material"
import tick from "../assets/form-tick.svg"
import cross from "../assets/form-cross.svg"
import eagle from "../assets/eagle-form.svg"

export default function FormMobile({mailSend,arrayFormMobile,setForm,form,setErrorValidate,setErrorMail,setErrorName,setErrorDescription,errorName,errorValidate,errorDescription,errorMail,clickButton,handleClick,setClickButton,setMailSend}){
    return(
        <div className="form mobile">
            {mailSend===null &&
                <>
                    <div className="line-form">
                        {arrayFormMobile.map((obj,i)=>{
                            return(
                                <div key={i}>
                                    <TextField id={obj.title} variant="standard" label={`${obj.title}${!obj.optional?"*":""}`} 
                                        onChange={(e)=>{
                                            setForm({...form,[obj.form]:e.target.value})
                                            if(obj.title==="Email"){
                                                setErrorValidate(false)
                                                setErrorMail(false)
                                            }else if(obj.title==="Name"){
                                                setErrorName(false)
                                            }else if(obj.title==="Describe your project in short"){
                                                setErrorDescription(false)
                                            }
                                        }}
                                        multiline={true}
                                        className={`
                                            ${obj.title==="Email" && errorValidate ? "MuiInputBase-inputMultiline-error" : ""}
                                            ${obj.title==="Email" && errorMail ? "MuiInputBase-inputMultiline-error" : ""}
                                            ${obj.title==="Name" && errorName ? "MuiInputBase-inputMultiline-error" : ""}
                                            ${obj.title==="Describe your project in short" && errorDescription ? "MuiInputBase-inputMultiline-error" : ""}
                                        `}
                                    />
                                    {obj.title==="Email" && errorValidate && <span className="label-error">Incorrect email</span>}
                                    {obj.title==="Email" && errorMail && <span className="label-error">Please enter your email</span>}
                                    {obj.title==="Email" && !errorMail && !errorValidate && <div className="label-error"></div>}
                                    {obj.title==="Name" && errorName && <span className="label-error">Please enter your name</span>}
                                    {obj.title==="Name" && !errorName && <div className="label-error"></div>}
                                    {obj.title==="Describe your project in short" && errorDescription && <span className="label-error">Please enter a project's description</span>}
                                    {obj.title==="Describe your project in short" && !errorDescription && <div className="label-error"></div>}

                                    {obj.title==="Phone" && <div className="label-error"></div>}
                                    {obj.title==="Company Name" && <div className="label-error"></div>}
                                </div>
                            )
                        })}
                    </div>
                    <button className="button">
                        {!clickButton&&<p onClick={()=>handleClick()}>Send</p>}
                        {clickButton&&<div className="button-loader"></div>}
                    </button>
                    <p className="text-form">By submitting this form I consent to having Mansa Studio collect and process my personal details and agree with Privacy policy.</p>
                </>
            }
            {mailSend===false && 
                <div className="form-state">
                    <img src={cross} alt="X" />
                    <p className="problem">Oops... Something went wrong.</p>
                    <p>Please <span className="try-again" onClick={()=>{
                        setClickButton(false)
                        setMailSend(null)
                    }}>try again</span></p>
                    <button className="button" onClick={()=>{
                        setClickButton(false)
                        setMailSend(null)
                    }}>
                        Try again
                    </button>
                </div>
            }
            {mailSend===true && 
                <div className="form-state">
                    <img src={tick} alt="X" />
                    <p className="description-thank">Thank you!</p>
                    <p className="description">We have received her message. We will try to respond in a few hours.</p>
                    <img src={eagle} alt="EAGLE" className="eagle"/>
                </div>
            }
        </div>
    )
}