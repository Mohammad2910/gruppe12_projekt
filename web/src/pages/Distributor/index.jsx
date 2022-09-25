import SideGrid from "../../components/SideGrid";
import MapContainer from "../../components/map/map";

import './style.css';

const distributors = [
    {
      id: 1,
      link: "/distributor1",
      title: "Distributor1"
    },
    {
      id: 2,
      link: "/distributor2",
      title: "Distributor2"
    },
    {
      id: 3,
      link: "/distributor3",
      title: "Distributor3"
    }
  ]

const Distributor = () => {
    return (
        <>
        <div className="distributors">
            {/*<Grid container spacing={0.5}>*/}
            <SideGrid data={distributors}/>
                <MapContainer/>
            {/*</Grid>*/}
        </div>
            
        </>
    )
}

export default Distributor
