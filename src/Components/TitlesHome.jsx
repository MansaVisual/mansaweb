import { useMediaQuery } from "@mui/material"

export default function TitlesHome({titleClass,title}) {

    const isDesktop = useMediaQuery("(min-width:1024px")
    
    return(
        <h2 className={`title ${titleClass} ${isDesktop?"desk":""}`}>{title}</h2>
    )
}