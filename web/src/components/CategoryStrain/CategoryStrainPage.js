import React from "react";
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import './CategoryStrainPage.css';
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";
import {useParams} from "react-router";


import {categoryStrainStore} from "../../stores/CategoryStrainStore";

function CategoryStrainPage(props) {

    const { id } = useParams();
    const data = categoryStrainStore.categoryStrain.find((obj => {return obj.title ===id}))

    return(

        <div className={"Strain"} >
            hello
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn
            </p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn
            </p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn
            </p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn
            </p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn
            </p>

        </div>

    )
}

export default CategoryStrainPage