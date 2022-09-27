import React from "react";
import {Link} from "react-router-dom";
import Typography from '@mui/material/Typography';

function CardStrain(props) {
    return(
        <div className={"Strain"}>
            <Typography  className={"StrainTitle" } sx={{ cursor: 'pointer' }}>
                {props.strainTitle} </Typography >
            <div className={"Body1"}>
                <img className={"PicStrain"} src ={props.src} alt={"I"} width={100} height={100}/>
                <p className={"InfoStrain"}>{props.strainInfo}</p>
            </div>
        </div>
    )
}

export default CardStrain

