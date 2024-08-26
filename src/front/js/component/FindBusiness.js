import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const FindBusiness = () => {

    const containerStyle = {
        minWidth: '400px',

        minHeight: '500px',
        borderRadius: '14px'
    };

    const center = {
        lat: 41.3880461278723,
        lng: 2.167037641404972,
    };

    const markers = [
        {
            id: 1,
            position: { lat: 41.3880461278723, lng: 2.167037641404972 },
        },
        {
            id: 2,
            position: { lat: 41.38649263978724, lng: 2.130763342351535 },
        },
        {
            id: 3,
            position: { lat: 41.40155361180801, lng: 2.160093173042831 },
        },
    ];

    const mapStyles = [
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ];




    return (
        <div className="text-center">
            <div className="container mapSectionHome text-center">
                <div className="mapHome text-center">

                    <LoadScript
                        googleMapsApiKey="AIzaSyCOCD1yeM2HWunb6IiX6OUwoRIIljWUw5k"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={13}
                            options={{
                                styles: mapStyles,
                                disableDefaultUI: true,
                            }}
                        >
                            {markers.map(marker => (
                                <Marker key={marker.id} position={marker.position} />
                            ))}

                        </GoogleMap>
                    </LoadScript>


                </div>

            </div>
            <a className="btn btnFind mt-5" href="">Find Your Vegan Spot 🌱</a>
        </div>



    )
}