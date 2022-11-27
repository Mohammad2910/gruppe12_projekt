/**
 * @author David Lukas Mikkelsen (s147197)
 */

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";


function CreateUserForm() {
    return (
        <div className="createuser-form">
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="flex-end"
            >
                <Box
                    width={500}
                    height={800}
                    marginTop={10}
                    bgcolor="#f2f2f2"
                    alignItems="center"
                    justifyContent="center"
                    sx={{boxShadow: 5, p: 5}}
                >
                    <FormTitle title="Sign Up"/>
                    <SignUpForm/>
                </Box>
            </Grid>
        </div>
    )
}


const SignUpForm = () => {
    return (
        <div className="SignUp-form">

            <FormControl sx={{m: 2, width: '20ch'}}>
                <InputField id="firstName-outlined" label="First Name" variant="outlined"/>
            </FormControl>
            <FormControl sx={{m: 2, width: '20ch'}}>
                <InputField id="lastName-outlined" label="Last Name" variant="outlined"/>
            </FormControl>
            <FormControl fullWidth sx={{m: 2}}>
                <InputField id="email-outlined" label="Email" variant="outlined"/>
            </FormControl>
            <FormControl fullWidth sx={{m: 2}}>
                <RadioGroup row name="radio-row-buttons">

                    <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="Male" control={<Radio/>} label="Male"/>
                    <FormControlLabel value="Gender fluid" control={<Radio/>} label="Gender fluid"/>
                    <FormControlLabel value="Transgender" control={<Radio/>} label="Transgender"/>
                    <FormControlLabel value="Transgender man" control={<Radio/>} label="Transgender man"/>
                    <FormControlLabel value="Transgender woman" control={<Radio/>} label="Transgender woman"/>
                    <FormControlLabel value="Non-Binary" control={<Radio/>} label="Non-Binary"/>
                    <FormControlLabel value="Bigender" control={<Radio/>} label="Bigender"/>
                    <FormControlLabel value="Agender" control={<Radio/>} label="Agender"/>
                    <FormControlLabel value="Other" control={<Radio/>} label="Other"/>

                </RadioGroup>
            </FormControl>
            <FormControl sx={{m: 2, width: '20ch'}}>
                <InputField id="Username-outlined" label="User Name" variant="outlined"/>
            </FormControl>
            <FormControl sx={{m: 2, width: '20ch'}}>
                <InputField id="password-outlined" label="Password" type="password"/>
            </FormControl>
            <FormControl sx={{m: 4, width: '20ch'}}>
                <SubmitButton color="success" variant="contained" buttonText="Submit" size="large"/>
            </FormControl>
            <FormControl sx={{m: 1, width: '20ch'}}>
                <Link to='/home'>Back to home</Link>
            </FormControl>


        </div>
    );
}


const InputField = (props) => {
    return (
        <TextField
            id={props.id}
            label={props.label}
            variant={props.variant}
            helperText={props.helperText}
            type={props.type}
        />
    );
}


const FormTitle = (props) => {
    return (
        <Typography component="h1" variant="h5" sx={{m: 1}}>
            {props.title}
        </Typography>
    )
}

const SubmitButton = (props) => {
    return (
        <Button
            color={props.color}
            variant={props.variant}
            size={props.size}
        >
            {props.buttonText}
        </Button>
    )
}


export default CreateUserForm;
