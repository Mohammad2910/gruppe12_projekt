import React from "react";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import './SingleStrain.css';
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";


function SingleStrainPage(props){

    return(
        <div className={"Strain"} >
            <Grid container spacing ={2}>
                <Grid item sm={12} md={6}>
                    <Typography  className={"StrainTitle" } variant ={"h3"} sx={{ cursor: 'pointer' }}>
                        {props.title}
                    </Typography >
                    <img className={"PicStrain"} src ={props.src} alt={""} width={350}  class={"center"}/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Typography component="legend">User Rating</Typography>
                    <Rating name="read-only" value={props.rating} readOnly />

                    <Grid container>
                        <Grid item xs={6}>
                            <p align={"left"}>Calming</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p align={"right"}>Energizing</p>
                        </Grid>
                    </Grid>
                    <LinearProgress variant="determinate" value={props.energy} />
                    <br></br>
                    <b>About:</b>
                    <p>
                        {props.description}
                    </p>
                    <br></br>
                    <b>Medical Benefits:</b>
                    <p>
                        {props.medical}
                    </p>
                </Grid>
            </Grid>
        </div>

    )
}

export default SingleStrainPage