import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import BgImage from "../../img/fondoShop1.jpg";
import { Link } from "react-router-dom";

export const Shops = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllPartnersInfo();  // Obtener la información de los socios al cargar el componente
    }, []);

    const backgroundImage = {
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const handleCategoryClick = (typeOfServices) => {
        if (typeOfServices === 'all') {
            actions.setFilteredPartnerNull();  // Mostrar todos los socios
        } else {
            actions.setCathegoryFilter(typeOfServices.toLowerCase());  // Convertir la categoría a minúscula
        }
    };


    // Determinar qué socios mostrar: todos o filtrados
    // Determinar qué socios mostrar: todos o filtrados
    const partnersToDisplay = store.premiumPartnersFiltered === null ? store.premiumPartners : store.premiumPartnersFiltered;


    return (
        <div className="text-center">
            <div className="container">
                <div className="row">
                    <div className="col my-4">
                        <button className="btn btnCategoryHome" onClick={() => handleCategoryClick('restaurant')}>🍴 Restaurants</button>
                    </div>
                    <div className="col my-4">
                        <button className="btn btnCategoryHome" onClick={() => handleCategoryClick('shop')}>👜 Shops</button>
                    </div>
                    <div className="col my-4">
                        <button className="btn btnCategoryHome" onClick={() => handleCategoryClick('wellness')}>😄 Wellness</button>
                    </div>
                    <div className="col my-4">
                        <button className="btn btnCategoryHome" onClick={() => handleCategoryClick('activism')}>🎮 Leisure</button>
                    </div>
                    <div className="col my-4">
                        <button className="btn btnCategoryHome" onClick={() => handleCategoryClick('all')}>Show All</button>
                    </div>
                </div>

                <div className="rollCards my-4">
                    {partnersToDisplay && partnersToDisplay.map((premiumPartners, index) => (
                        <div key={index} className="baseCard mx-3 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h2 className="card-title">{premiumPartners.name}</h2>
                                    <p className="card-textHome">{premiumPartners.address}</p>
                                    <p className="card-textHome">{premiumPartners.about_us}</p>
                                    <p className="card-textHome">{premiumPartners.type_of_services}</p>
                                    <Link to="/" className="btn btnCardsHome text-center">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="goShop" style={backgroundImage}>

                <div className="textInvite">Discover a world of incredible products in our shop</div>
                <div className="container text-center">

                    <a className="btn btnShopNow">BUY NOW!</a>

                </div>
                <div className="container">
                    <p className="txtDiscount text-start">Use code: 4GEEKS and get 20% discount</p>
                </div>
            </div>
        </div>
    );
}
