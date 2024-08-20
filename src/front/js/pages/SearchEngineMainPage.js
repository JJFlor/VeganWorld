import React, { useState, useContext, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/searchEngine.css";
import { Context } from "../store/appContext";
import { SearchPremiumPartnerInfo } from "../component/SearchPremiumPartnerInfo";


export const SearchEngineMainPage = () => {
    const { store, actions } = useContext(Context);
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        actions.getAllPartnersInfo();
    }, [])

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
                <div className="text-center">
                    <a className="btn btnCategory mx-3" href="">🍴 Restaurants</a>
                    <a className="btn btnCategory mx-3" href="">👜 Shops</a>
                    <a className="btn btnCategory mx-3" href="">😄 Wellness</a>
                    <a className="btn btnCategory mx-3" href="">✊ Activism</a>
                </div>
            </div>
            <div className="mapSection">
                {toggled ?
                    <div className="map ">
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
                    :
                    ""
                }

            </div>
            <button className={`btn toggle-btn ${toggled ? 'toggled' : " "}`} onClick={() => setToggled(!toggled)}>
                <div className="toggle-btn-name">{toggled ? <p>Hide map</p> : <p>Show map</p>}</div>
            </button>
            <div>
                <div className="d-flex flex-row">

                    {console.log(store.premiumPartners)}

                    {store.premiumPartners?.map(premiumPartners => (<SearchPremiumPartnerInfo key={premiumPartners.id} name={premiumPartners.name} typeOfServices={premiumPartners.type_of_services} premium={premiumPartners.premium} />))}
                </div>
            </div>
        </div>
    );
}