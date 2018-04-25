import React, { Component } from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";





class Map extends Component {


    createMarker(lat, long, Id) {

        var myLat = parseFloat(lat)
        var myLong = parseFloat(long)

        var myPos = {
            lat: myLat,
            lng: myLong
        }


        return (
            <Marker key={Id} position={myPos} />

        )
    }



    render() {



        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={1}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >



                {this.props.destinations.map(destination => this.createMarker(destination.Latitude, destination.Longitude, destination.Id))}

                <Marker position={{ lat: -34.397, lng: 150.644 }} />

            </GoogleMap>
        ));


        return (
            <div>
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default Map;