import tick from "../assets/form-tick.svg"
import cross from "../assets/form-cross.svg"
import eagle from "../assets/eagle-form.svg"
import FormInputs from "./FormInputs"
import { Fragment } from "react"

export default function FormDesk({mailSend,arrayFormDesk,setForm,form,setErrorValidate,setErrorMail,setErrorName,setErrorDescription,errorName,errorValidate,errorDescription,errorMail,clickButton,handleClick,setClickButton,setMailSend}){
    
    
    return(
        <div className="form desk">
            {mailSend===null &&
                <>
                    <div className="line-form">
                        {arrayFormDesk.map((obj,i)=>{
                            return(
                                <Fragment key={i}>
                                    {i<2 &&
                                        <FormInputs i={i} obj={obj} setErrorDescription={setErrorDescription} setErrorMail={setErrorMail} setErrorName={setErrorName}
                                            setErrorValidate={setErrorValidate} setForm={setForm} form={form} errorDescription={errorDescription} errorMail={errorMail}
                                            errorName={errorName} errorValidate={errorValidate}
                                        />
                                    }
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className="line-form">
                        {arrayFormDesk.map((obj,i)=>{
                            return(
                                <Fragment key={i}>
                                    {i>1 && i<4 &&
                                        <FormInputs i={i} obj={obj} setErrorDescription={setErrorDescription} setErrorMail={setErrorMail} setErrorName={setErrorName}
                                            setErrorValidate={setErrorValidate} setForm={setForm} form={form} errorDescription={errorDescription} errorMail={errorMail}
                                            errorName={errorName} errorValidate={errorValidate}
                                        />
                                    }
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className="line-form">
                        {arrayFormDesk.map((obj,i)=>{
                            return(
                                <Fragment key={i}>
                                    {i===4 &&
                                        <FormInputs i={i} obj={obj} setErrorDescription={setErrorDescription} setErrorMail={setErrorMail} setErrorName={setErrorName}
                                            setErrorValidate={setErrorValidate} setForm={setForm} form={form} errorDescription={errorDescription} errorMail={errorMail}
                                            errorName={errorName} errorValidate={errorValidate} last={true}
                                        />
                                    }
                                </Fragment>
                            )
                        })}
                    </div>
                    <p className="text-form">By submitting this form I consent to having Mansa Studio collect and process my personal details and agree with <span style={{color:"#E9696A"}}>Privacy policy.</span></p>
                    <button className="button" onClick={()=>!clickButton&&handleClick()}>
                        {!clickButton&&<p>Send</p>}
                        {clickButton&&<div className="button-loader"></div>}
                    </button>
                </>
            }
            {mailSend===false && 
                <div className="form-state">
                    <img src={cross} alt="X" />
                    <p className="problem">Oops... Something went wrong.</p>
                    <p>Please <span className="try-again" onClick={()=>{
                        setClickButton(false)
                        setMailSend(null)
                        setForm({
                            mail:"",
                            name:"",
                            phone:"",
                            company:"",
                            description:""
                        })
                    }}>try again</span></p>
                    <button className="button" onClick={()=>{
                        setClickButton(false)
                        setMailSend(null)
                        setForm({
                            mail:"",
                            name:"",
                            phone:"",
                            company:"",
                            description:""
                        })
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