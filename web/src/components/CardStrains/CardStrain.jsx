import React from "react";
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";



function CardStrain(props) {

    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.src}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.strainTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <ul>
                            <li key={props.id}>{props.origin}</li>
                            <li key={props.id}>{props.description}</li>
                            <li key={props.id}>{props.ratio}</li>
                            <li key={props.id}>{props.effects}</li>
                        </ul>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}

export default CardStrain

