import SideGrid from "../../components/SideGrid";
import MapContainer from "../../components/map/map";

import { distributorStore } from '../../stores/DistributorStore'

import './style.css';
import {Link} from "react-router-dom";
import React from "react";

const Distributor = () => {
    // En kommentar til test af deploy speed
    return (
        <>
        <div className="distributors">
            <div className='wrapper'>
                <div className='container'>
                    {distributorStore.distributors.map((data) => {
                        return (
                            <div className='item'>
                                <Link underline='hover' to=''>
                                    {data.title}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
                <MapContainer/>
        </div>
        </>
    )
}

export default Distributor
