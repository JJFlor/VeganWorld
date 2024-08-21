import React, { useState, useContext, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/searchEngine.css";
import { Context } from "../store/appContext";
import { SearchPremiumPartnerInfo } from "../component/SearchPremiumPartnerInfo";
import { SearchRestaurantsPartners } from "../component/SearchRestaurantsPartners";


export const SearchEngineMainPage = () => {
    const { store, actions } = useContext(Context);
    const [toggled, setToggled] = useState(false);
    const [search, setSearch] = useState("");


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
        {
            id: 4,
            position: { lat: 41.40254062653742, lng: 2.1567984527937383 },
        },
        {
            id: 5,
            position: { lat: 41.40701325141857, lng: 2.1759425393017695 },
        },
        {
            id: 6,
            position: { lat: 41.400922808125536, lng: 2.1566481798289083 },
        }, {
            id: 7,
            position: { lat: 41.38887919684671, lng: 2.1587300681363915 },
        }, {
            id: 8,
            position: { lat: 41.388822058676006, lng: 2.1582306662850934 },
        },
        {
            id: 9,
            position: { lat: 41.395457939125016, lng: 2.1711297239573324 },
        },
        {
            id: 10,
            position: { lat: 41.39006425434672, lng: 2.157082452792872 },
        },
        {
            id: 11,
            position: { lat: 41.38912389430176, lng: 2.1569218527928116 },
        },
        {
            id: 12,
            position: { lat: 41.40010057980126, lng: 2.1542063816294656 },
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

    const Search = (search) => {
        const keyWords = ["restaurant", "shop", "wellness", "activism"];
        const foundWord = keyWords.includes(search);
        if (foundWord) {
            actions.setCathegoryFilter(search);
            alert("See the results below");

        } else {
            alert("Word doesn't match any result. Try with: restaurant, shop, wellness or activism");
        }

    }


    return (
        <div className="container-fluid">
            <div className="chooseTitle">
                <h2>Search a service or choose a topic:</h2>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" className="form-control searchEngineInput" placeholder="🧭 Look for vegan services" />
                <button onClick={() => Search(search)} className="btn btnCards ms-3">Search</button>
            </div>
            <div className="row">
                <div className="text-center">
                    <button className="btn btnCategory mx-3" onClick={() => actions.setCathegoryFilter("restaurant")}>🍴 Restaurants</button>
                    <button className="btn btnCategory mx-3" onClick={() => actions.setCathegoryFilter("shop")} >👜 Shops</button>
                    <button className="btn btnCategory mx-3" onClick={() => actions.setCathegoryFilter("wellness")} >😄 Wellness</button>
                    <button className="btn btnCategory mx-3" onClick={() => actions.setCathegoryFilter("activism")}>✊ Activism</button>
                    <button className="btn btnCategory mx-3" onClick={() => actions.setFilteredPartnerNull()}>All Cathegories</button>
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
                    " "
                }

            </div>
            <button className={`btn toggle-btn ${toggled ? 'toggled' : " "}`} onClick={() => setToggled(!toggled)}>
                <div className="toggle-btn-name">{toggled ? <p>Hide map</p> : <p>Show map</p>}</div>
            </button>
            <div>
                <div className="container rollCards d-flex flex-row">
                    {console.log(store.premiumPartners)}
                    {store.premiumPartnersFiltered ? store.premiumPartnersFiltered.map(filteredPartner =>
                    (<SearchRestaurantsPartners key={filteredPartner.id} name={filteredPartner.name}
                        typeOfServices={filteredPartner.type_of_services} premium={filteredPartner.premium} />))
                        :
                        store.premiumPartners?.map(premiumPartners => (<SearchPremiumPartnerInfo key={premiumPartners.id}
                            name={premiumPartners.name}
                            typeOfServices={premiumPartners.type_of_services} premium={premiumPartners.premium} />))}
                </div>
            </div>
        </div>
    );
}