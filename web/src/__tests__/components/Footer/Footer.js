import { render, screen } from '@testing-library/react';
import Navbar from "../../../components/Navbar/Navbar";
import React from "react";
import {BrowserRouter} from "react-router-dom";

import '@testing-library/jest-dom'
import Footer from "../../../components/Footer/Footer";


test('Test Footer titles', () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    );


    const aboutElement = screen.getByText(/About us/i);
    expect(aboutElement).toBeInTheDocument();

    const contactElement = screen.getByText(/Contact/i);
    expect(contactElement).toBeInTheDocument();


});
