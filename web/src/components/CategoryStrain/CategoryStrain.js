import React from "react";
import {Link} from "react-router-dom";
import './CategoryStrain.css';
import {useParams} from "react-router";
import {singleStrainStore} from "../../stores/SingleStrainStore";
import CardCategory from "./CardCategory";
import Box from "@mui/material/Box";

function CategoryStrain() {

    const { id } = useParams();
    //const data = singleStrainStore.singleStrain.find((obj => {return obj.title ===id}))

    return(
        <div className="row">
            {singleStrainStore.singleStrain.map((categoryStrain) =>  {
                if(categoryStrain.type === id)
                return (
                    <div className="col-lg-4">
                        <Box sx={{p: 1}}>

                            <Link to={`/strains/${categoryStrain.title}`}>
                                <CardCategory
                                    title={categoryStrain.title}
                                    src={categoryStrain.src2}
                                    rating={categoryStrain.rating}
                                    strainInfo={categoryStrain.strainInfo}
                                />
                            </Link>
                        </Box>
                    </div>
                )
            } )}
        </div>
    )
}

export default CategoryStrain