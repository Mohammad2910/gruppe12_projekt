import React from "react";
import Typography from '@mui/material/Typography';

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import CardHeader from "@mui/material/CardHeader";
import Rating from "@mui/material/Rating/Rating";

function CardCategory(props) {

    return(

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea >
            <CardHeader
                title={props.title}

            />
            <Rating name="read-only" value={props.rating} readOnly />
            <CardMedia
                component="img"
                height="194"
                image={props.src}
            />
            </CardActionArea>
        </Card>


    )
}

export default CardCategory

