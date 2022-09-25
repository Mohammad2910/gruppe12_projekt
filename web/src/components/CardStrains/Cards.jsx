import React from "react";
import CardStrain from "./CardStrain";
import './Cards.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function Cards() {
    return(
        <div className={"cards"}>
            <h1> Check out these epic strains</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__strains">
                        <Box sx={{ flexGrow:1}}>
                            <Grid container spacing = {2} >
                                <Grid item sm={12} md={6} lg={4}>
                                    <CardStrain
                                        strainTitle = 'AAAAAAAAAAAAAAAAAAA'
                                        src ={"./images.jpg"}
                                        strainInfo = 'this is the strain info'
                                    />
                                </Grid>
                                <Grid item sm={12} md={6} lg={4}>
                                    <CardStrain
                                        strainTitle = 'BBBBBBBBBBBBBBBBBBBB'
                                        src ={"./images.jpg"}
                                        strainInfo = 'this is the strain info'
                                    />
                                </Grid>
                                <Grid item sm={12} md={6} lg={4}>
                                    <CardStrain
                                        strainTitle = 'CCCCCCCCCCCCCCCCC CCCCCCCCCCCCCC CCCCCCCCC'
                                        src ={"./images.jpg"}
                                        strainInfo = 'this is the strain info'
                                    />
                                </Grid>
                                <Grid item sm={12} md={6} lg={4}>
                                    <CardStrain
                                        strainTitle = 'DDDDDDDDDDDDDDDDDDD'
                                        src ={"./images.jpg"}
                                        strainInfo = 'this is the strain infohis is the strain infohis is the strain infohis is the strain infohis is the strain info'
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </ul>
                </div>
            </div>

        </div>


    )
}


export default Cards