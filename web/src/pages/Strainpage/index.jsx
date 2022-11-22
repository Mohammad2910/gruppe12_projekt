import SideGrid from "../../components/SideGrid";
import Cards from "../../components/CardStrains/Cards";
import { strainStore } from '../../stores/StrainStore'
import './style.css';
import {singleStrainStore} from "../../stores/SingleStrainStore";
import { observer } from "mobx-react-lite";

const Strainpage = observer(() => {
    return (
    <>
        <div className="strains">
            <SideGrid strains={strainStore.strains} categories={singleStrainStore.singleStrains}/>
            <Cards strains={strainStore.strains}/>
        </div>
    </>
    )
})

export default Strainpage