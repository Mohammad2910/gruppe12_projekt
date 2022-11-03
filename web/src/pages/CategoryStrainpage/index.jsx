import SideGrid from "../../components/SideGrid";
import './style.css';
import CategoryStrain from "../../components/CategoryStrain/CategoryStrain";
import {strainStore} from "../../stores/StrainStore";
import {singleStrainStore} from "../../stores/SingleStrainStore";
import { observer } from "mobx-react-lite";

const CategoryStrainpage = observer(() => {
    return (
        <>
            <div className="strains">
                <SideGrid strains={strainStore.strains} categories={singleStrainStore.singleStrains}/>
                <CategoryStrain/>
            </div>
        </>
    )
})

export default CategoryStrainpage