import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "/workspaces/VeganWorld/src/front/styles/searchPremiumPartnerInfo.css";
import { MdWorkspacePremium } from "react-icons/md";
import AvatarImg from "../../img/avatarImg.png"
import { Dashboard } from "/workspaces/VeganWorld/src/front/js/component/Dashboard.js";
import { AddProduct } from "/workspaces/VeganWorld/src/front/js/pages/AddProduct.js";
import { EditProfileModal } from "/workspaces/VeganWorld/src/front/js/component/EditProfileModal.js";



export const SearchPremiumPartnerInfo = ({ name, typeOfServices, premium, email, address, phone, aboutUs }) => {
    const navigate = useNavigate();
    const { store } = useContext(Context);
    const haveToken = store.token;  //comprobar si usuario tiene token



    return (

        <div className="container my-5">

            <h1 className="premiumpartnerh1 text-center col-12">
                {name}{haveToken && premium && <MdWorkspacePremium />}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z" />
                </svg>
            </h1>

            <div className="profile_header-premium">

                <div className="card-header-premium card-info">

                    <div className="card-text">Type of service: {typeOfServices}</div>
                    <div className="card-text">Email: {email}</div>
                    <div className="card-text">Address: {address}</div>
                    <div className="card-text">Phone: {phone}</div>
                    <div className="card-text">About us: {aboutUs}</div>
                    <EditProfileModal />
                </div>
                <img src={AvatarImg} className="profile_premium_img" alt="..." />
            </div>

            <div className="b-example-divider"></div>

            <div className="addproduct">
                <AddProduct />
            </div>
            {/* <div className="addoffer">
                <AddOffer />
            </div> */}
            <hr className="featurette-divider" />

            <div className="Administracion">
                <Dashboard />
            </div>

            <hr className="featurette-divider" />
        </div>

    );
}