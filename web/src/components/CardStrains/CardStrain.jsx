import React from "react";
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

function CardStrain(props) {

    return(

      <div className={"Strain"} >

            <Typography  className={"StrainTitle" } sx={{ cursor: 'pointer' }}>
                {props.strainTitle}
            </Typography >
            <div className={"Body1"}>
                <img className={"PicStrain"} src ={props.src} alt={"I"}  height={100}/>
                <p className={"InfoStrain"}>{props.strainInfo}</p>
            </div>

        </div>

    )
}

export default CardStrain

