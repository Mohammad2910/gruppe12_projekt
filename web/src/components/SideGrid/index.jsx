import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const SideGrid = (props) => {


    return (
        <div className='wrapper'>
            <div className='container'>
                {props.strains.map((data) => {
                    return (
                        <div className='item'>
                            <h5>
                                <Link underline='hover' to={`/strains/category/${data.id}`}>
                                    {data.title}
                                </Link>
                            </h5>
                            <ul>
                                {props.categories.map((categoryStrain) => {
                                    if (categoryStrain.type.id === data.id) {
                                        return (
                                            <Link underline='hover' to={`/strains/${categoryStrain.id}`}>
                                                <li>{categoryStrain.title}</li>
                                            </Link>
                                        )
                                    }
                                    return ""
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SideGrid