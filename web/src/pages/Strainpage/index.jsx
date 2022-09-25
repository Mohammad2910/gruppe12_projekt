import SideGrid from "../../components/SideGrid";
import Cards from "../../components/CardStrains/Cards";

import { strainStore } from '../../stores/StrainStore'

import './style.css';

const Strainpage = () => {
    return (
    <>
        <div className="strains">
            <SideGrid data={strainStore.strains}/>
            <Cards/>
        </div>
    </>
    )
}

export default Strainpage