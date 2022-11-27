import React from "react";
import '@testing-library/jest-dom'
import {MapContainer} from "../../../components/Map/map";
import {render, queryByAttribute} from "@testing-library/react";

test('Test to see if map exists',() => {
   // Map container requires a list of distributors to render
   const distributors = [
      {
         title: 'Distributor1',
         lat: 55.731455,
         lng: 12.395287
      },
      {
         title: 'Distributor2',
         lat: 55.727790,
         lng: 12.395014
      }
   ]

   const getById = queryByAttribute.bind(null, 'id');

   const dom = render(<MapContainer distributors={distributors}/>);
   const linkElement = getById(dom.container,'map');
   expect(linkElement).toBeInTheDocument();
});
