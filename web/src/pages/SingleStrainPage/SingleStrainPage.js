import React from "react";
import '../../components/SingleStrain/SingleStrain.css';
import {useParams} from "react-router";
import { singleStrainStore } from '../../stores/SingleStrainStore'
import { observer } from "mobx-react-lite";
import Cards from "../../components/CardStrains/Cards";
import SingleStrain from "../../components/SingleStrain/SingleStrain";
import { strainStore } from "../../stores/StrainStore";

const SingleStrainPage = observer(() => {

    //TODO change this into a page that only calls a copompnent giving the data as a prop
    const { id } = useParams();
    const data = singleStrainStore.singleStrains.find(obj => obj.id.toString() === id)

    return(
        <>
            <div className="strain">
                <SingleStrain strains={data}/>
                <Cards strains={strainStore.strains}/>
            </div>
        </>
    )
})

export default SingleStrainPage