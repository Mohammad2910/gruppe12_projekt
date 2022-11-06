import { render, screen } from '@testing-library/react';
import SideGrid from "../../../components/SideGrid/index";
import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import {getByLabelText} from '@testing-library/react'
import '@testing-library/jest-dom'


test('Test Strain ref and name', () => {

    const dataStrain = [{
        title : "TestTitle",
        id : "Test1"}]
    const dataCategories = [{
        title : "CatTestTitle2",
        id : "Test1",
        type: {
            id : "Test1"
        }}]


    render(
        <BrowserRouter>
            <SideGrid strains = {dataStrain} categories = {dataCategories}/>
        </BrowserRouter>
    );



    const linkElement = screen.getByText('TestTitle');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/strains/category/Test1')

    const linkElement2 = screen.getByText('CatTestTitle2');
    expect(linkElement2).toBeInTheDocument();





});
