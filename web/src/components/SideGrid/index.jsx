import React from 'react';
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

//Why not just reference directly to the strains store instead of props?
    return (
        <div className='wrapper'>
            <div className='container'>
                {props.strains.map((data) => {
                    return (
                        <div className='item'>
                            <Link underline='hover' to={`/strains/category/${data.title}`}>
                                {data.title}
                            </Link>

                            {props.categories.map((categoryStrain) => {
                                if (categoryStrain.type === data.title)
                                    return (
                                        <Link underline='hover' to={`/strains/${categoryStrain.title}`}>
                                            <li>{categoryStrain.title}</li>
                                        </Link>
                                    )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SideGrid