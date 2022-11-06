import { render, screen } from '@testing-library/react';
import Navbar from "../../../components/Navbar/Navbar";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {getByLabelText} from '@testing-library/react'
import '@testing-library/jest-dom'


test('Test Strain ref and name', () => {
    render(
    <BrowserRouter>
        <Navbar />
    </BrowserRouter>
    );


    const linkElement = screen.getByText(/Strains/i);
    expect(linkElement).toBeInTheDocument();


    expect(linkElement).toHaveAttribute('href', '/strains')

});


// test('has login button',()=>{
//     render(<Navbar/>);
// });