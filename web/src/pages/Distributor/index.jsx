import SideGrid from "../../components/SideGrid";
import MapContainer from "../../components/map/map";

import { distributorStore } from '../../stores/DistributorStore'

import './style.css';

const Distributor = () => {
    return (
        <>
        <div className="distributors">
            {/*<Grid container spacing={0.5}>*/}
            <SideGrid data={distributorStore.distributors}/>
                <MapContainer/>
            {/*</Grid>*/}
        </div>
        </>
    )
}

export default Distributor
