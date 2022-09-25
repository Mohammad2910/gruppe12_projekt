import React from 'react';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const SideGrid = (props) => { // remove props later

    // const [categories, setCategories] = useState([])

    // useEffect(async () => {
    //     fetch('http://localhost/api/categories')
    //     .then((response) => response.json())
    //     .then((data) => setCategories(data))
    //     .catch((err) => {
    //         console.error(err);
    //     })
    // },[])

    return (
        <div className='wrapper'>
            <div className='container'>
                {props.data.map((data) => {
                    return (
                        <div className='item'>
                            <Link underline='hover' to={data.link}>
                                {data.title}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SideGrid