import SideGrid from "../../components/SideGrid";
import Cards from "../../components/CardStrains/Cards";

import './style.css';

const Strainpage = () => {
    const categories = [ // sample test categories (mock of api)
    {
      id: 1,
      link: "/strain1",
      title: "Strain1"
    },
    {
      id: 2,
      link: "/strain2",
      title: "Strain2"
    },
    {
      id: 3,
      link: "/strain3",
      title: "Strain3"
    },
    {
      id: 4,
      link: "/strain4",
      title: "Strain4"
    },
    {
      id: 5,
      link: "/strain5",
      title: "Strain5"
    }
]
    return (
    <>
        <div className="strains">
            <SideGrid data={categories}/>
            <Cards/>
        </div>
    </>
    )
}

export default Strainpage