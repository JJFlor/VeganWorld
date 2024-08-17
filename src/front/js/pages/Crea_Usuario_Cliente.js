import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import LogoAvocado from "../../img/logoAguacate.png";
import { MdEdit } from "react-icons/md";
import { Context } from "../store/appContext";
import "../../styles/Crea_Usuario.css";

export const Crea_Usuario_Cliente = () => {

    const { store, actions } = useContext(Context);


    return (
        <div className="container">
            <div className="d-flex flex-column signUp-card w-50">
                <div className="p-5 form-wrapper">
                    <h1 className="display-4 create-account-title">Create an account</h1>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <div className="w-100">
                            <div>
                                <img className="profile-img" src="" />
                            </div>
                            <div className="form-group mt-3">
                                <p>Client Name</p>
                                <button type="button" class="btn-question-premium">
                                    <MdEdit />
                                </button>
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
                        <div>
                            <div className="ms-4">
                                <img className="logoAvocado" src={LogoAvocado} href="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
