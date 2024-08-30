import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";

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
            category: "restaurant"
        },
        {
            id: 2,
            position: { lat: 41.38649263978724, lng: 2.130763342351535 },
            category: "shop"
        },
        {
            id: 3,
            position: { lat: 41.40155361180801, lng: 2.160093173042831 },
            category: "wellness"
        },
        {
            id: 4,
            position: { lat: 41.40254062653742, lng: 2.1567984527937383 },
            category: "activism"
        },
        {
            id: 5,
            position: { lat: 41.40701325141857, lng: 2.1759425393017695 },
            category: "restaurant"
        },
        {
            id: 6,
            position: { lat: 41.400922808125536, lng: 2.1566481798289083 },
            category: "shop"
        }, {
            id: 7,
            position: { lat: 41.38887919684671, lng: 2.1587300681363915 },
            category: "wellness"
        }, {
            id: 8,
            position: { lat: 41.388822058676006, lng: 2.1582306662850934 },
            category: "activism"
        },
        {
            id: 9,
            position: { lat: 41.395457939125016, lng: 2.1711297239573324 },
            category: "restaurant"
        },
        {
            id: 10,
            position: { lat: 41.39006425434672, lng: 2.157082452792872 },
            category: "shop"
        },
        {
            id: 11,
            position: { lat: 41.38912389430176, lng: 2.1569218527928116 },
            category: "wellness"
        },
        {
            id: 12,
            position: { lat: 41.40010057980126, lng: 2.1542063816294656 },
            category: "activism"
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
        <div className="container mt-5">
            <div className="mapSection pb-5">
                <div className="map">

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
            <div className="mapSection mt-5">
                <Link to="/SearchEngineMainPage" className="btn btnFind" >Find Your Vegan Spot 🌱</Link>
            </div>
        </div>
    )
}