import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import avatarImg from "../../img/avatarImg.png";
import { MdEdit } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import { Context } from "../store/appContext";
import "../../styles/Crea_Usuario_business.css";


export const Crea_Usuario_Business_Premium = () => {
    return (
        <div className="container">

            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="info-client w-75 mt-5">

                    <img className="profile-img" src={avatarImg} href="#" />

                    <div className="edit-user mt-3">
                        <div className="d-flex flex-row">
                            <div className="ms-4">
                                <h2 className="user-name">Partner Name <MdWorkspacePremium className="premium-icon" /> </h2>
                                <p>Type of service</p>
                                <p>Address</p>
                                <button type="button" class="btn edit-btn">
                                    <MdEdit className="me-2 " /> Edit info
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="current-offers w-75 text-center">
                    <h2 className="mt-3">Current offers they have</h2>
                </div>
                <div className="add-new-offers w-75">
                    <h2 className="mt-3">Add new offer</h2>
                    <div className="d-flex flex-row">
                        <input type="text" className="form-control" placeholder="Write what's the offer about" />
                        <button type="button" class="btn publish-btn">
                            Publish
                        </button>

                    </div>
                </div>
               
            </div>

        </div>
    );
}