import React from "react";
import CardStrain from "./CardStrain";
import './Cards.css';


import { strainStore } from '../../stores/StrainStore'
import {Link} from "react-router-dom";

function Cards() {
    return(
        <div className="row">
                        {strainStore.strains.map((strain) =>  {
                            return (

                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <Link to={`/strains/${strain.title}`}>
                                                <CardStrain
                                                    strainTitle = {strain.title}
                                                    src = {strain.src}
                                                    strainInfo = {strain.strainInfo}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                )
                        } )}
        </div>
    )
}


// function Cards() {
//     return(
//         <div className={"cards"}>
//             <h1>Strains</h1>
//             <div className="cards__container">
//                 <div className="cards__wrapper">
//                     <ul className="cards__strains">
//                         <Box sx={{ flexGrow:1}}>
//                             <Grid container spacing = {2} >
//                                 {strainStore.strains.map((strain) => {
//                                     return (
//                                     <Grid item sm={12} md={6} lg={4}>
//                                     <CardStrain
//                                         strainTitle = {strain.title}
//                                         src = {strain.src}
//                                         strainInfo = {strain.strainInfo}
//                                     />
//                                     </Grid>)
//                                 })}
//                             </Grid>
//                         </Box>
//                     </ul>
//                 </div>
//             </div>
//
//         </div>
//
//
//     )
//}


export default Cards