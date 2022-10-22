import SideGrid from "../../components/SideGrid";
import Cards from "../../components/CardStrains/Cards";
import { strainStore } from '../../stores/StrainStore'
import './style.css';
import {singleStrainStore} from "../../stores/SingleStrainStore";

const Strainpage = () => {
    return (
    <>
        <div className="strains">
            <SideGrid strains={strainStore.strains} categories={singleStrainStore.singleStrain}/>
            <Cards/>
        </div>
    </>
    )
}

export default Strainpage