import SideGrid from "../../components/SideGrid";
import './style.css';
import CategoryStrain from "../../components/CategoryStrain/CategoryStrain";
import {strainStore} from "../../stores/StrainStore";
import {singleStrainStore} from "../../stores/SingleStrainStore";

const CategoryStrainpage = () => {
    return (
        <>
            <div className="strains">
                <SideGrid strains={strainStore.strains} categories={singleStrainStore.singleStrain}/>
                <CategoryStrain/>
            </div>
        </>
    )
}

export default CategoryStrainpage