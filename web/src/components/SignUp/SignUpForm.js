
/**
 * @author David Lukas Mikkelsen (s147197)
 */

 import React from "react";
 import { useState } from "react";
 import Box from "@mui/material/Box";
 import Grid from "@mui/material/Grid";
 import Radio from "@mui/material/Radio";
 import RadioGroup from "@mui/material/RadioGroup";
 import FormControlLabel from "@mui/material/FormControlLabel";
 import FormControl from "@mui/material/FormControl";
 import Typography from '@mui/material/Typography';
 import TextField from '@mui/material/TextField';
 import Button from "@mui/material/Button";
 import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
 import dayjs from 'dayjs';
 import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
 import {Link, Navigate, useNavigate, useNavigation} from "react-router-dom";
 import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";

 
 /**
  * Function which defines the  SignUpForm component, its position in the window and its
  * surrounding box 
  * @returns The SignUpForm component
  */
 function SignUpForm() {
     return(
         <div className="createuser-form">
             <Grid
                 container 
                 direction="column"
                 alignItems="center"
                 justifyContent="flex-end"
              >
                 <Box
                     maxWidth={470}
                     marginTop={10}
                     bgcolor="#f2f2f2"
                     alignItems="center"
                     justifyContent="center"
                     sx={{boxShadow: 5, p :5}}
                 > 
                     <FormTitle title="Sign Up" />
                     <Form />
                 </Box>
             </Grid>
         </div>
     )
 }

 /**
  * defines the fields in the form, associated states, buttons and event handlers. 
  * @returns all the components of the form
  */
 const Form = () => {
    const navigate = useNavigate();
    const [birthday, setBirthday] = useState(dayjs());
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const submit = (e) => {
        e.preventDefault();
    
        const User = {
            username,
            firstName,
            lastName,
            email,
            gender,
            birthday,
            password
         };


        //TODO salt og hash password før det sendes til backend
        let response = postFormData(User);
        setBirthday(dayjs());
        setFirstname("");
        setLastname("");
        setEmail("");
        setGender("");
        setUsername("");
        setPassword("");

    }

    const handleChangeBirthday = (newValue) => {
        setBirthday(newValue);
    }
    

     return(
         <div className="SignUp-form">
             
            <FormControl sx={{ m: 1, width: '20ch' }}>
                <TextField 
                    id="firstName-outlined" 
                    label="First Name" 
                    variant="outlined" 
                    value={firstName}
                    onChange={(event) => setFirstname(event.target.value)} 
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '20ch' }}>
                <TextField 
                    id="lastName-outlined"
                    label="Last Name" 
                    variant="outlined" 
                    value={lastName}
                    onChange={(event) => setLastname(event.target.value)}  
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 2 ,width: '80%'}}>
                <TextField 
                    id="email-outlined" 
                    label="Email" 
                    variant="outlined" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}  
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 2, width: '80%'}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        label="Birthday" 
                        inputFormat="MM/DD/YYYY" 
                        value={birthday}
                        renderInput={(params) => <TextField{...params} required/>}
                        onChange={handleChangeBirthday}
                    />
                </LocalizationProvider>
            </FormControl>
            <FormControl fullWidth sx={{width:'100%'}} >
                <RadioGroup row name="radio-row-buttons" onChange={(event) => setGender(event.target.value)} >
                    
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Gender fluid" control={<Radio />} label="Gender fluid" />
                    <FormControlLabel value="Transgender" control={<Radio />} label="Transgender" />
                    <FormControlLabel value="Transgender man" control={<Radio />} label="Transgender man" />
                    <FormControlLabel value="Transgender woman" control={<Radio />} label="Transgender woman" />
                    <FormControlLabel value="Non-Binary" control={<Radio />} label="Non-Binary" />
                    <FormControlLabel value="Bigender" control={<Radio />} label="Bigender" />
                    <FormControlLabel value="Agender" control={<Radio />} label="Agender" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />

                </RadioGroup>
            </FormControl>
            <FormControl sx={{ m: 1, width: '20ch' }}>
                <TextField 
                    id="Username-outlined" 
                    label="User Name" 
                    variant="outlined" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}  
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '20ch' }}>
                <TextField 
                    id="password-outlined" 
                    label="Password" 
                    type="password" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} 
                />
            </FormControl>
            <FormControl sx={{ m: 2, width: '20ch' }}>
                <Button 
                    color="success" 
                    variant="contained" 
                    size="large"
                     onClick={submit}
                >
                    Submit
                </Button>
            </FormControl>
            <FormControl sx={{ m: 1, width: '20ch' }}>
                <Link to='/'>Back to login</Link>
            </FormControl>

         </div>
     );
 }
 
 
 /**
  * Renders a Title on the basis of a given title property
  * @param {*} props - title to display
  * @returns   A title in h1 format
  */
 const FormTitle = (props) => {
     return(
         <Typography component="h1" variant="h5" sx={{ m: 1 }}>
         {props.title}
         </Typography>
     )
}
 
/**
 * Function for posting user data to the backend 
 * @param {*} User object populated with user data from the sign-up form
 */
async function postFormData(User) {
    try {
        let res = await fetch('https://grp12.servecounterstrike.com/api/users', {
            method : 'POST',
            body: JSON.stringify(User),
            headers: {'Accept': 'application/json', "Content-Type" : "application/json"}
        });

        await res.json();
        if (res.status === 201) {
            alert("User created")
            window.location.href = "/"

        } else {
            window.alert("Some error occured");
        }
    } catch (err) {
        console.log(err);
    }
    
 }

 
 export default SignUpForm;
