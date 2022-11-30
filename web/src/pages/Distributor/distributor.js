import MapContainer from "../../components/Map/map";
import { distributorStore } from '../../stores/DistributorStore'
import './style.css';
import {Link} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {observer} from "mobx-react-lite";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

const Distributor = observer(() => {
    // Google places config
    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const options = {
        componentRestrictions: { country: "dk" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["address"]
    };
    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options);
    });

    // DIALOG
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const style = {
        zIndex: '0'
    };
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    // Keyboard on enter press
    let handleEnter = (e) => {
        if (e.key === 'Enter') {
            setAddress(e.target.value);
            console.log(e.target.value);
        }
    }

    // Form submit
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://grp12.servecounterstrike.com/api/distributors", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    address: address
                }),
            });
            await res.json();
            if (res.status === 201) {
                setTitle("");
                setDescription("");
                setAddress("");
                setMessage("Distributor added successfully");
                window.alert(message);
            } else {
                setMessage("Some error occured");
                window.alert(message);
            }
        } catch (err) {
            console.log(err);
        }
        handleClose();
        distributorStore.fetchDistributors();
    };

    return (
        <div className="distributors">
            <div className='wrapper'>
                <div className='container'>
                    <button onClick={handleClickOpen}>New distributor</button>
                    {distributorStore.distributors.map((data) => {
                        return (
                            <div className='item'>
                                <Link underline='hover' to=''>
                                    {data.title}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <MapContainer distributors={distributorStore.distributors}/>

            <Dialog style={style} open={open} onClose={handleClose}>
                <DialogTitle>Add a new distributor</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter below fields to add a distributor.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name of distributor"
                        type="name"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="address"
                            label="Address"
                            type="name"
                            fullWidth
                            variant="standard"
                            inputRef={inputRef}
                            onClick={(e) => setAddress(e.target.value)}
                            onChange={(e) => setAddress(e.target.value)}
                            onKeyDown={handleEnter}
                        />
                    </div>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="name"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Save</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
})

export default Distributor
