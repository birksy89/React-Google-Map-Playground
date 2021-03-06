import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MapWithAMarkers = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCxQtmQVRBREa1e-FbfiRXf6vi9pDwWf7o&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,

    }),
    lifecycle({
        componentDidMount() {

            this.setState({

                zoomToMarkers: (map) => {

                    this.map = map;

                    const bounds = new window.google.maps.LatLngBounds();
                    map.props.children.forEach((child) => {
                        if (child.type === Marker) {
                            bounds.extend(new window.google.maps.LatLng(child.props.position.lat, child.props.position.lng));
                        }
                    })
                    map.fitBounds(bounds);
                },
                myStateFunc: () => {
                    //console.log("MyStateFunc Fired", this)
                }
            })
        },

        componentDidUpdate() {

            //Seems to be a race-condition where Google Map library isn't always loaded
            if (window.google) {
                //Run the "zoomtoMarkers" with new pins
                this.state.zoomToMarkers(this.map)
            }

        }

    }),
    withScriptjs,
    withGoogleMap



)(props =>
    <GoogleMap ref={props.zoomToMarkers} defaultZoom={5} defaultCenter={{ lat: 0.0, lng: 0.0 }} onIdle={props.myStateFunc} >
        {props.markers.map(marker => (
            <Marker
                key={marker.Id}
                position={{ lat: parseFloat(marker.Latitude), lng: parseFloat(marker.Longitude) }}
                onClick={() => props.filterDestinations(marker)}
            />
        ))}
    </GoogleMap>
);

class MapComponent extends React.PureComponent {

    render() {
        return (
            <MapWithAMarkers markers={this.props.destinations} filterDestinations={this.props.filterDestinations} />
        )
    }
}

export default MapComponent;