import logo from './logo.svg';

import './App.css';
import {useState} from "react";
import Cards from "./components/Cards";


const Greeting = ({username}) => {
  return (<h1>Hello, {username}</h1>)
}




// function Strains(props) {
//     return(
//     <div className={"Strain"}>
//         <div className={"StrainTitle"}>{props.strainTitle} </div>
//         <div className={"Body1"}>
//             <img className={"PicStrain"} src ={"./images.jpg"} alt={"I"} width={100} height={100}/>
//             <p className={"InfoStrain"}>{props.strainInfo}</p>
//         </div>
//     </div>
//     )
// }


const indicaInfo = "this is the information about the indica strain"
function App() {
    //const strainInformation = {strainTitle: "indica", info: indicaInfo};
    //const strainInformation2 = {strainTitle: "sativa", info: "more information"};
  return (

      <Cards/>
      /*<div className="App">
        <Strains strainTitle={strainInformation.strainTitle} strainInfo ={strainInformation.info}/>
        <Strains strainTitle={strainInformation2.strainTitle} strainInfo ={strainInformation2.info}/>
    </div>
       */
  );
}

export default App;
