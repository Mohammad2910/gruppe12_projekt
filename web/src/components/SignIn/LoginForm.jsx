/**
 * @author David Lukas Mikkelsen (s147197)
 */


import React from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://grp12.servecounterstrike.com/api/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "username": e.target.username.value,
            "password": e.target.password.value
        })
    });

    if (response.status === 200) {
        const token = await response.text();
        localStorage.setItem("grp12-jwt", token)
        window.location.href = "/home";
    } else {
        alert('Wrong credentials!')
    }
} 


/**
 * Function component for a login-form consisting of a title, two input fields and a
 * submit button.
 * @returns  LoginForm element 
 */
function LoginForm() {
    return(
        <div className="login-form">
            <FormTitle title="Sign In" />
            <form onSubmit={handleSubmit}>
                <InputField label="Username" type="text" name="username"/>
                <InputField label="Password" type="password" name="password"/>                    
                {/* <SubmitButton /> */}
                <SubmitButton/>
            </form>
            <Link to='/signup'>Create user?</Link>
        </div>
    )
}

/**
 * Function component for a Input field. Its type and label is specified via props
 * @param {} props specifing the label and type values
 * @returns InputField element
 */
const InputField = (props) => {
    return(
        <div className="input-container">
        <label>{props.label}</label>
        <input type={props.type} name={props.name} />
    </div>
    );
}

/**
 * Function component for the submit button
 * @returns SubmitButton element with type submit
 */
const SubmitButton = () => {
    return(
        <div className="button-container">
            <input type="submit" value='Login'/>
        </div>
    );
}

/**
 * Function component for the title of the form. The text to be displayed is specified
 * via props
 * @param {} props specifing the title text to display 
 * @returns FormTitle element
 */
const FormTitle = (props) => {
    return(
        <div className="title">{props.title}</div>
    )
}

export default LoginForm;
