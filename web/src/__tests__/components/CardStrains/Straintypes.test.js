import { render, screen } from '@testing-library/react';
import CardStrain from "../../../components/CardStrains/CardStrain";
import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import {getByLabelText} from '@testing-library/react'
import '@testing-library/jest-dom'


test('Test Strain ref and name', () => {
    const title = 'TestTitle'
    const src = "TestSrc"
    const origin = "TestOrigin"
    const description = "TestDescription"
    const ratio = "TestRatio"
    const effects = "TestEffects"
    render(
    <BrowserRouter>
        <CardStrain
            strainTitle={title}
            src={src}
            origin={origin}
            description={description}
            ratio={ratio}
            effects={effects}
        />
    </BrowserRouter>
    );


    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();


});


// test('has login button',()=>{
//     render(<Navbar/>);
// });