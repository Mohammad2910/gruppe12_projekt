import React, { useRef, useEffect } from "react";
import "./styles.css";
import TextField from "@mui/material/TextField";

const PlacesAutoComplete = () => {
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
    }, []);
    return (
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
                />
        </div>
    );
};
export default PlacesAutoComplete;
