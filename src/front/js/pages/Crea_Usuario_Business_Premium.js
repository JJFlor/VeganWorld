import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import avatarImg from "../../img/avatarImg.png";
import { MdEdit } from "react-icons/md";
import { Context } from "../store/appContext";
import "../../styles/Crea_Usuario_business.css";


export const Crea_Usuario_Business_Premium = () => {
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
                                    <p>Type of service</p>
                                    <p>Address</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <button type="button" class="btn edit-btn">
                                        <MdEdit />
                                    </button>
                                    <p>Edit info</p>
                                </div>
                            </div>
                        </div>
                        <div className="current-offers w-75 text-center">
                            <h2 className="mt-3">Current offers they have</h2>
                        </div>
                        <div className="add-new-offers w-75">
                            <h2 className="mt-3">Add new offer</h2>
                            <div className="d-flex flex-row">
                                <div>
                                    <input type="text" className="form-control w-100" placeholder="Write what's the offer about" />
                                </div>
                                <div>
                                    <button type="button" class="btn publish-btn">
                                        Publish
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="shop w-75">
                            <h2>Shop</h2>
                            <div className="d-flex flex-row">
                                <div className=" mx-3 mb-4 w-25">
                                    <div>
                                        <div className="card-body shopProduct">
                                            <img className="shop-pics" src={avatarImg} href="#" />
                                            <p className="card-text text-start">Name Product, price in €</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" mx-3 mb-4 w-25">
                                    <div>
                                        <div className="card-body shopProduct">
                                            <img className="shop-pics" src={avatarImg} href="#" />
                                            <p className="card-text text-start">Name Product, price in €</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" class="btn add-new-product-btn">
                                        Add new product
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}