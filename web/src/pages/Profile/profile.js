import {profileStore} from "../../stores/ProfileStore";
import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {FormLabel} from "@mui/material";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

const Profile = () => {
    profileStore.fetchUser();
    let user = profileStore.user;
    const [editMode, setEditMode] = useState(false);
    const buttonHandler = () => {
        setEditMode(current => !current)
    }

    const handleChangeBirthday = (newValue) => {
        user.birthday = newValue;
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            fetch('http://localhost:8080/api/users', {
                method : 'PUT',
                body: JSON.stringify(user),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'}
            }).then(function(response) {
                return response.json();
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <br/><br/>
            <h1>Din profil</h1>
            <br/>
            <Button variant="contained" onClick={buttonHandler} sx={{ m: 2, width: '20ch' }}>Redigér</Button>
            <Button variant="contained" color="error" sx={{ m: 2, width: '20ch' }}>Delete</Button>
            <TextField
                margin="dense"
                id="first_name"
                label="First name"
                type="name"
                fullWidth
                variant="standard"
                value={user?.first_name}
                disabled={!editMode}
                onChange={(e) => user.first_name = e.target.value}
            />
            <TextField
                margin="dense"
                id="last_name"
                label="Last name"
                type="name"
                fullWidth
                variant="standard"
                value={user?.last_name}
                disabled={!editMode}
                onChange={(e) => user.last_name = e.target.value}
            />
            <TextField
                margin="dense"
                id="email"
                label="Email"
                type="name"
                fullWidth
                variant="standard"
                value={user?.email}
                disabled={!editMode}
                onChange={(e) => user.email = e.target.value}
            />
            <br/><br/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label="Birthday"
                    inputFormat="MM/DD/YYYY"
                    value={user?.birthday}
                    renderInput={(params) => <TextField{...params} required/>}
                    disabled={!editMode}
                    onChange={handleChangeBirthday}
                />
            </LocalizationProvider>
            <TextField
                margin="dense"
                id="username"
                label="Username"
                type="name"
                fullWidth
                variant="standard"
                value={user?.username}
                disabled={true}
            />
            <TextField
                margin="dense"
                id="password"
                label="Password"
                type="name"
                fullWidth
                variant="standard"
                value={user?.password}
                disabled={!editMode}
                onChange={(e) => user.password = e.target.value}
            />
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="radio-row-buttons" onChange={(event) => user.gender = event.target.value}>
                <FormControlLabel checked={user?.gender === "Female"} control={<Radio disabled={!editMode}/>} label="Female"/>
                <FormControlLabel checked={user?.gender === "Male"} control={<Radio disabled={!editMode}/>} label="Male"/>
                <FormControlLabel checked={user?.gender === "Gender fluid"} control={<Radio disabled={!editMode}/>} label="Gender fluid"/>
                <FormControlLabel checked={user?.gender === "Transgender"} control={<Radio disabled={!editMode}/>} label="Transgender"/>
                <FormControlLabel checked={user?.gender === "Transgender man"} control={<Radio disabled={!editMode}/>} label="Transgender man"/>
                <FormControlLabel checked={user?.gender === "Transgender woman"} control={<Radio disabled={!editMode}/>} label="Transgender woman"/>
                <FormControlLabel checked={user?.gender === "Non-Binary"} control={<Radio disabled={!editMode}/>} label="Non-Binary"/>
                <FormControlLabel checked={user?.gender === "Bigender"} control={<Radio disabled={!editMode}/>} label="Bigender"/>
                <FormControlLabel checked={user?.gender === "Agender"} control={<Radio disabled={!editMode}/>} label="Agender"/>
                <FormControlLabel checked={user?.gender === "Other"} control={<Radio disabled={!editMode}/>} label="Other"/>
            </RadioGroup>
                <Button color="primary" size="large" type="submit" variant="contained" hidden={!editMode} onClick={handleSubmit}>
                    Save
                </Button>
        </div>
    );
}

export default Profile
