import React, {Component} from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import "./style.css"

const mapStyles = {
    width: '100%',
    height: '75vh',
    position: 'relative'
};

// const LocationPin = ({ text }) => (
//     <div className="pin">
//         <Icon icon={locationIcon} className="pin-icon" />
//         <p className="pin-text">{text}</p>
//     </div>
// )

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <div id={"map"}>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={
                        {
                            lat: 55.731455,
                            lng: 12.395287
                        }
                    }
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'DTU Ballerup'}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}>
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>

                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDHdLp59i71H2E0GNDXrLS5XU315RqqNgA'
})(MapContainer);
