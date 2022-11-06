import React from "react";
import CardStrain from "./CardStrain";
import './Cards.css';
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";


const Cards = (props)  => {

    return(
        <div className="row">
            {props.strains.map((strain) => {
                return (
                    <div className="col-lg-4">
                        <Box sx={{p: 1}}>
                            <Link to={`/strains/category/${strain.id}`}>
                                <CardStrain
                                    strainTitle={strain.title}
                                    src={strain.src}
                                    origin={strain.origin}
                                    description={strain.description}
                                    ratio={strain.ratio}
                                    effects={strain.effects}
                                />
                            </Link>
                        </Box>
                    </div>
                )
            })}
        </div>
    )
}




export default Cards