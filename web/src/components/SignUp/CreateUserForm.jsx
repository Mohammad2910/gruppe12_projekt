
/**
 * @author David Lukas Mikkelsen (s147197)
 */

 import React from "react";
 import Button from "@mui/material/Button";
 import Select from "@mui/material/Select";
 import Box from "@mui/material/Box";
 import Grid from "@mui/material/Grid";
 import Typography from '@mui/material/Typography';
 import TextField from '@mui/material/TextField';
 import { Link } from "react-router-dom";
 
 
 function CreateUserForm() {
     return(
         <div className="createuser-form">
             <Grid 
                 container 
                 direction="column"
                 alignItems="center"
                 justifyContent="flex-end"
              >
                 <FormTitle title="Sign Up" />
                 <Box
                     width={300} 
                     height={400}
                     marginTop={10}
                     bgcolor="lightgray"
                     alignItems="center"
                     justifyContent="center"
                     sx={{boxShadow: 10}}
                 > 
                     <SignUpForm />
                 </Box>
             </Grid>
         </div>
     )
 }
 
 
 
 const SignUpForm = () => {
     return(
         <div className="SignUp-form">
             <form>
                 <InputField id="firstName" label="First Name" name="firstName"/>
                 <InputField id="surName" label="Surname" name="surName"/>
                 <InputField id="email" label="Email" name="email"/>
                 <InputField id="userName" label="User name" name="userName"/>
                 <InputField id="password" label="Password" name="password" />                    
                 {/* <SubmitButton /> */}
                 <Link to='/home'>Sign up</Link>
              </form>
         </div>
     );
 }
 
 
 const InputField = (props) => {
     return(
         <TextField
             required
             fullWidth
             id={props.id}
             label={props.label}
             name={props.name}
         />
     );
 }
 
 
 const SubmitButton = () => {
     return(
         <div className="button-container">
         <Button variant="contained" color="success">Submit</Button>
         </div>
     );
 }
 
 
 const FormTitle = (props) => {
     return(
         <Typography component="h1" variant="h5">
         {props.title}
         </Typography>
     )
 }
 
 export default CreateUserForm;
