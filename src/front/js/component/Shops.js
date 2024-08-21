import React from "react";
import BgImage from "../../img/fondoShop1.jpg"

export const Shops = () => {

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
                        <a className="btn btnCategory" href="">🍴 Restaurants</a>
                    </div>
                    <div className="col my-2">
                        <a className="btn btnCategory" href="">👜 Shops</a>
                    </div>
                    <div className="col my-2">
                        <a className="btn btnCategory" href="">😄 Wellness</a>
                    </div>
                    <div className="col my-2">
                        <a className="btn btnCategory" href="">🎮 Leisure</a>
                    </div>
                </div>

                <div className="rollCards my-4">
                    <div className="baseCard mx-3 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btnCards">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="baseCard mx-3 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btnCards">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="baseCard mx-3 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btnCards">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="baseCard mx-3 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btnCards">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="baseCard mx-3 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btnCards">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="goShop" style={backgroundImage}>
                <div className="container text-end">
                    <a className="btn  btnShopNow">SHOP NOW!</a>
                </div>
                <div className="container">
                    <p className="txtDiscount text-start">Use code: 4GEEKS and get 20% discount</p>
                </div>

            </div>
        </div>

    )
}