import React from "react";
import '../../components/SingleStrain/SingleStrain.css';
import {useParams} from "react-router";
import { singleStrainStore } from '../../stores/SingleStrainStore'
import { observer } from "mobx-react-lite";
import SingleStrain from "../../components/SingleStrain/SingleStrain";

const SingleStrainPage = observer(() => {

    //TODO change this into a page that only calls a copompnent giving the data as a prop
    const { id } = useParams();
    const data = singleStrainStore.singleStrains.find(obj => obj.id.toString() === id)

    return(
        <>
            <div className="strain">
                <SingleStrain strain={data}/>
            </div>
        </>
    )
})

export default SingleStrainPage