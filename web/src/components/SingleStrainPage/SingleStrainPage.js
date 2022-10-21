import React from "react";
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import './SingleStrainPage.css';
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";
import {useParams} from "react-router";

import { singleStrainStore } from '../../stores/SingleStrainStore'

function SingleStrainPage(props) {


    return(

        <div className={"Strain"} >
            <Grid container spacing ={2}>
                <Grid item sm={12} md={6}>
                    <Typography  className={"StrainTitle" } variant ={"h3"} sx={{ cursor: 'pointer' }}>
                        Purple kush
                    </Typography >
                    <img className={"PicStrain"} src ={"../images.webp"} alt={""} width={300} height={300}  class={"center"}/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Typography component="legend">User Rating</Typography>
                    <Rating name="read-only" value={2} readOnly />

                    <Grid container>
                        <Grid item xs={6}>
                            <p align={"left"}>Calming</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p align={"right"}>Energizing</p>
                        </Grid>
                    </Grid>
                    <LinearProgress variant="determinate" value={80} />
                    <br></br>
                    <b>About:</b>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <br></br>
                    <b>Medical Benefits:</b>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn
                    </p>
                </Grid>
            </Grid>
        </div>

    )
}

export default SingleStrainPage