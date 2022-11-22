import { render, screen } from '@testing-library/react';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import '@testing-library/jest-dom'
import LoginForm from "../../../components/SignIn/LoginForm";


test('Test login ref and name', () => {
    render(
        <BrowserRouter>
            <LoginForm />
        </BrowserRouter>
    );


    const linkElement = screen.getByText(/Create user?/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/signup')

});
