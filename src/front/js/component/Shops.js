import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import BgImage from "../../img/fondoShop1.jpg";

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
        if (typeOfServices === 'All') {
            actions.setFilteredPartnerNull();  // Mostrar todos los socios
        } else {
            actions.setCathegoryFilter(typeOfServices);  // Filtrar socios por tipo de servicio
        }
    };

    // Determinar qué socios mostrar: todos o filtrados
    const partnersToDisplay = store.premiumPartnersFiltered || store.premiumPartners;

    return (
        <div className="text-center my-4">
            <div className="container">
                <div className="row">
                    <div className="col my-2">
                        <button className="btn btnCategory" onClick={() => handleCategoryClick('Restaurant')}>🍴 Restaurants</button>
                    </div>
                    <div className="col my-2">
                        <button className="btn btnCategory" onClick={() => handleCategoryClick('Shops')}>👜 Shops</button>
                    </div>
                    <div className="col my-2">
                        <button className="btn btnCategory" onClick={() => handleCategoryClick('Wellness')}>😄 Wellness</button>
                    </div>
                    <div className="col my-2">
                        <button className="btn btnCategory" onClick={() => handleCategoryClick('Leisure')}>🎮 Leisure</button>
                    </div>
                    <div className="col my-2">
                        <button className="btn btnCategory" onClick={() => handleCategoryClick('All')}>Show All</button>
                    </div>
                </div>

                <div className="rollCards my-4">
                    {partnersToDisplay && partnersToDisplay.map((partner, index) => (
                        <div key={index} className="baseCard mx-3 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{partner.name}</h5>
                                    <p className="card-text">{partner.type_of_services}</p>
                                    <a href="#" className="btn btnCards">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="goShop" style={backgroundImage}>
                <div className="container text-end">
                    <a className="btn btnShopNow">BUY NOW!</a>
                </div>
                <div className="container">
                    <p className="txtDiscount text-start">Use code: 4GEEKS and get 20% discount</p>
                </div>
            </div>
        </div>
    );
}
