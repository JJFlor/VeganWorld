import React, { useState, useContext, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/searchEngine.css";
import { Context } from "../store/appContext";
import LogoAvocado from "../../img/logoAguacate.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const SearchEngineMainPage = () => {
    const containerStyle = {
        minWidth: '300px',
        minHeight: '400px',
        borderRadius: '15px'
    };

    const center = {
        lat: 41.3880461278723,
        lng: 2.167037641404972,
    };

    const markers = [
        {
            id: 1,
            position: { lat: 41.3880461278723, lng: 2.167037641404972 }, // San Francisco
        },
        {
            id: 2,
            position: { lat: 41.38649263978724, lng: 2.130763342351535 }, // Los Angeles 41.38649263978724, 2.130763342351535
        },
        {
            id: 3,
            position: { lat: 41.40155361180801, lng: 2.160093173042831 },  // New York 41.40155361180801, 2.160093173042831
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
        <div className="container-fluid">
            <div className="chooseTitle">
                <h2>Search a service or choose a topic:</h2>
            </div>
            <div>
                <form>
                    <input type="text" className="form-control searchEngineInput" placeholder="🧭 Look for vegan services" />
                </form>
            </div>
            <div className="row">
                <div className="text-center my-4">
                    <a className="btn btnCategory mx-3" href="">🍴 Restaurants</a>
                    <a className="btn btnCategory mx-3" href="">👜 Shops</a>
                    <a className="btn btnCategory mx-3" href="">😄 Wellness</a>
                    <a className="btn btnCategory mx-3" href="">🎮 Leisure</a>
                </div>
            </div>
            <div className="mapSection">
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
        </div>
    );
}