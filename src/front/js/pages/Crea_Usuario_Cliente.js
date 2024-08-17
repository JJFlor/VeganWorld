import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import LogoAvocado from "../../img/logoAguacate.png";
import avatarImg from "../../img/avatarImg.png";
import { MdEdit } from "react-icons/md";
import { Context } from "../store/appContext";
import "../../styles/Crea_Usuario.css";

export const Crea_Usuario_Cliente = () => {

    const { store, actions } = useContext(Context);


    return (
        <div className="container">
            <div className="p-5">
                <div className="">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="info-client w-75 mt-5">
                            <div>
                                <img className="profile-img" src={avatarImg} href="#" />
                            </div>
                            <div className="edit-user mt-3">
                                <div>
                                    <p className="user-name">User Name</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <button type="button" class="btn edit-btn">
                                        <MdEdit />
                                    </button>
                                    <p>Edit</p>
                                </div>
                            </div>
                        </div>
                        <div className="rollCards my-4">
                            <h2>Favourite places</h2>
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
                </div>
            </div>
        </div>
    );
};
