import MapContainer from "../../components/map/map";
import { distributorStore } from '../../stores/DistributorStore'
import './style.css';
import {Link} from "react-router-dom";
import React from "react";

const Distributor = () => {
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
            <MapContainer distributors={distributorStore.distributors}/>
        </div>
        </>
    )
}

export default Distributor
