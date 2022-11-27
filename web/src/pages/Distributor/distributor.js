import MapContainer from "../../components/Map/map";
import { distributorStore } from '../../stores/DistributorStore'
import './style.css';
import {Link} from "react-router-dom";
import React from "react";
import {observer} from "mobx-react-lite";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import PlacesAutoComplete from "../../components/PlacesAutoComplete/placesAutoComplete";

const Distributor = observer(() => {
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
                        variant="standard"/>
                    <PlacesAutoComplete></PlacesAutoComplete>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={fetchNoget}>Save</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
})

function fetchNoget(){
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${"111 Wellington St, Ottawa, ON K1A 0A9, Canada"}&key=AIzaSyDHdLp59i71H2E0GNDXrLS5XU315RqqNgA`)
        .then((response) => {
            return response.json();
        }).then(jsonData => {
        console.log(jsonData.results[0].geometry.location); // {lat: 45.425152, lng: -75.6998028}
    })
        .catch(error => {
            console.log(error);
        })
}

export default Distributor
