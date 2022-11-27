import React, {Component} from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import "./style.css"

const mapStyles = {
    width: '100%',
    height: '75vh',
    position: 'relative'
};

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
                    {this.props.distributors.map((data) => {
                        return <Marker
                                onClick={this.onMarkerClick}
                                name={data.title}
                                position={{lat: data.lat, lng: data.lng}}
                                description={data.description}
                            />
                    })}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}>
                        <div>
                            <h5>{this.state.selectedPlace.name}</h5>
                            <p>{this.state.selectedPlace.description}</p>
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
