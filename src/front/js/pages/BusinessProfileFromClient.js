import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import avatarImg from "../../img/avatarImg.png";
import { MdEdit } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import { Context } from "../store/appContext";
import "../../styles/Crea_Usuario_business.css";




export const BusinessProfileFromClient = () => {
    return (
        <div className="container">
            <div className="info-business w-75">
                <div>
                    <img className="business-profile-img" src={avatarImg} href="#" />
                </div>
                <div className="edit-business">
                    <div className="d-flex flex-row">
                        <div className="edit-business">
                            <p className="business-name">Partner Name</p>
                            <p>Type of service</p>
                            <p>Address</p>
                        </div>
                        <div className="premium-icon">
                            <MdWorkspacePremium />
                        </div>
                    </div>
                </div>
            </div>
            <div className="business-current-offers w-75 text-center">
                <h2 className="mt-3">Current offers</h2>
            </div>
            <div>
                <button type="button" class="btn shop-btn">
                    Go to Shop
                </button>
            </div>
        </div>

    );
}