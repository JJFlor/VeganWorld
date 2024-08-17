import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import avatarImg from "../../img/avatarImg.png";
import { MdEdit } from "react-icons/md";
import { Context } from "../store/appContext";
import "../../styles/Crea_Usuario_business.css";


export const Crea_Usuario_Business_Free = () => {
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
                                    <p className="user-name">Partner Name</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <button type="button" class="btn edit-btn">
                                        <MdEdit />
                                    </button>
                                    <p>Edit info</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="fav-places">Our business pictures</h2>
                        </div>
                        <div className="rollCards my-4 w-75">
                            <div className="baseCard mx-3 mb-4 w-25">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img className="business-pics" src={avatarImg} href="#" />
                                        <p className="card-text">With supporting text below.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="baseCard mx-3 mb-4 w-25">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img className="business-pics" src={avatarImg} href="#" />
                                        <p className="card-text">With supporting text below.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="baseCard mx-3 mb-4 w-25">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img className="business-pics" src={avatarImg} href="#" />
                                        <p className="card-text">With supporting text below.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="baseCard mx-3 mb-4 w-25">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img className="business-pics" src={avatarImg} href="#" />
                                        <p className="card-text">With supporting text below.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-center mb-5">
                                <button className="btn btnCards w-25 me-5">Contact us</button>
                                <button className="btn btnCards w-25">Menu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}