
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
 import { Link } from "react-router-dom";
 import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
 
 
 function CreateUserForm() {
     return(
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
                     sx={{boxShadow: 5, p :5}}
                 > 
                     <FormTitle title="Sign Up" />
                     <SignUpForm />
                 </Box>
             </Grid>
         </div>
     )
 }

 
 const SignUpForm = () => {
    //TODO: det virker men den tager ikke tiden fra når submit blev trykket på, men når siden bliver rendered
    const [date, setDate] = useState(dayjs(new Date().toString()));
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [eMail, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        alert(`${firstName}, ${lastName}, ${eMail}, ${userName}, ${password} , ${gender} , ${date}`);

        //TODO: lav et js object som kan returneres til backend med de rette værdier

        const User = {
            FirstName : {firstName},
            LastName  : {lastName},
            EMail     : {eMail},
            Gender    : {gender},
            Birthday  : {date},
            UsernName : {userName},
            Password  : {password}
         };

        let response = postFormData(User);

        //let jsonUser = JSON.stringify(User);
        //TODO: hvis der er tid lav en modal
        //alert(`${jsonUser}`);
        
    
    }

    const handleChangeDate = (newValue) => {
        setDate(newValue);
    }
    

     return(
         <div className="SignUp-form">
             
            <FormControl sx={{ m: 2, width: '20ch' }}> 
                <TextField 
                    id="firstName-outlined" 
                    label="First Name" 
                    variant="outlined" 
                    value={firstName}
                    onChange={(event) => setFirstname(event.target.value)} 
                />
            </FormControl>
            <FormControl sx={{ m: 2, width: '20ch' }}>
                <TextField 
                    id="lastName-outlined"
                    label="Last Name" 
                    variant="outlined" 
                    value={lastName}
                    onChange={(event) => setLastname(event.target.value)}  
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 2}}>
                <TextField 
                    id="email-outlined" 
                    label="Email" 
                    variant="outlined" 
                    value={eMail}
                    onChange={(event) => setEmail(event.target.value)}  
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 2}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        label="Birthday" 
                        inputFormat="MM/DD/YYYY" 
                        value={date}
                        renderInput={(params) => <TextField{...params} required/>}
                        onChange={handleChangeDate}
                    />
                </LocalizationProvider>
            </FormControl>
            <FormControl fullWidth sx={{ m: 2}}>
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
            <FormControl sx={{ m: 2, width: '20ch' }}>
                <TextField 
                    id="Username-outlined" 
                    label="User Name" 
                    variant="outlined" 
                    value={userName}
                    onChange={(event) => setUsername(event.target.value)}  
                />
            </FormControl>
            <FormControl sx={{ m: 2, width: '20ch' }}>
                <TextField 
                    id="password-outlined" 
                    label="Password" 
                    type="password" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} 
                />
            </FormControl>
            <FormControl sx={{ m: 4, width: '20ch' }}>
                <Button 
                    color="success" 
                    variant="contained" 
                    buttonText="Submit" 
                    size="large"
                    onClick={submit}
                >
                Submit
                </Button>
            </FormControl>
            <FormControl sx={{ m: 1, width: '20ch' }}>
                <Link to='/home'>Back to home</Link>
            </FormControl>


         </div>
     );
 }
 
 
 
 const FormTitle = (props) => {
     return(
         <Typography component="h1" variant="h5" sx={{ m: 1 }}>
         {props.title}
         </Typography>
     )
 }

 function postFormData(User) {
    fetch('https://grp12.servecounterstrike.com/api/', {
        method : 'post',
        body   : JSON.stringify(User)
    }).then(function(response) {
        return response.json();
    });
    
 }



 
 export default CreateUserForm;
