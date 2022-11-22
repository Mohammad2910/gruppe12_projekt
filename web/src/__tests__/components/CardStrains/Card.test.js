import { render, screen } from '@testing-library/react';
import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import '@testing-library/jest-dom'
import Cards from "../../../components/CardStrains/Cards";
import CardStrain from "../../../components/CardStrains/CardStrain";



test('Test card', () => {

    const dataStrain = [{
        strainTitle : "TestTitle",
        id : "TestId",
        src : "TestSrc",
        origin : "TestOrigin",
        description : "testDescription",
        ratio : "TestRatio",
        effects : "TestEffects"}]


    render(
        <BrowserRouter>
            <Cards strains = {dataStrain}/>
        </BrowserRouter>
    );


    const linkElement = screen.getByText('TestOrigin');
    expect(linkElement).toBeInTheDocument();







});
