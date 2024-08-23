import React, { useState } from "react";
import BgImage from "../../img/fondoShop1.jpg";
import { ModalNoLogin } from "./ModalNoLogin";

export const Shops = () => {
    // Suponemos que el token de autenticación se guarda en localStorage bajo la clave "token"
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const [showModal, setShowModal] = useState(false);

    // Función que maneja el clic en un botón que requiere autenticación
    const handleLinkClick = (e) => {
        if (!isAuthenticated) {
            e.preventDefault();  // Evita que el enlace siga su comportamiento predeterminado
            setShowModal(true);   // Muestra el modal de "no autenticado"
        }
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setShowModal(false);  // Cierra el modal
    };

    const backgroundImage = {
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className="text-center my-4">
            <div className="container">
                <div className="row">
                    <div className="col my-2">
                        <a className="btn btnCategory" href="" onClick={handleLinkClick}>🍴 Restaurants</a>
                    </div>
                    <div className="col my-2">
                        <a className="btn btnCategory" href="" onClick={handleLinkClick}>👜 Shops</a>
                    </div>
                    <div className="col my-2">
                        <a className="btn btnCategory" href="" onClick={handleLinkClick}>😄 Wellness</a>
                    </div>
                    <div className="col my-2">
                        <a className="btn btnCategory" href="" onClick={handleLinkClick}>🎮 Leisure</a>
                    </div>
                </div>

                <div className="rollCards my-4">
                    {[...Array(5)].map((_, i) => (
                        <div className="baseCard mx-3 mb-4" key={i}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btnCards" onClick={handleLinkClick}>Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="goShop" style={backgroundImage}>
                <div className="container text-end">
                    <a className="btn  btnShopNow" href="#" onClick={handleLinkClick}>SHOP NOW!</a>
                </div>
                <div className="container">
                    <p className="txtDiscount text-start">Use code: 4GEEKS and get 20% discount</p>
                </div>
            </div>

            {/* Modal component */}
            {showModal && <ModalNoLogin onClose={handleCloseModal} />}
        </div>
    );
}