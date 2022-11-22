import React from "react";
import {Link} from "react-router-dom";
import './CategoryStrain.css';
import {useParams} from "react-router";

import CardCategory from "./CardCategory";
import Box from "@mui/material/Box";


const CategoryStrain = (props) => {

    const { id } = useParams();

    return(
        <div className="row">
            {props.strains.map((categoryStrain) =>  {
                if(categoryStrain.type.id.toString() === id) {
                    return (
                    <div className="col-lg-4">
                        <Box sx={{p: 1}}>

                            <Link to={`/strains/${categoryStrain.title}`}>
                                <CardCategory
                                        title={categoryStrain.title}
                                        src={categoryStrain.src}
                                        rating={categoryStrain.rating}
                                    />
                                </Link>
                            </Box>
                        </div>
                    )
                }
                return <></>
            } )}
        </div>
    )
}

export default CategoryStrain