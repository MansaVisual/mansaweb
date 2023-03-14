import { TextField } from "@mui/material"

export default function FormInputs({last,i,obj,setForm,setErrorValidate,setErrorMail,setErrorName,setErrorDescription,errorValidate,errorName,errorMail,errorDescription,form}){
    return(
        <div key={i} style={{width:last?"855px":"421px"}}>
            <TextField id={obj.title} type={obj.form==="number"?"number":"text"} variant="standard" label={`${obj.title}${!obj.optional?"*":""}`} 
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
}