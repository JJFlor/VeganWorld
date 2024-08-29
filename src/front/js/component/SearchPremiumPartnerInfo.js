import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/searchPremiumPartnerInfo.css";
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

        <div className="container">
            <h1 id="usuario_h1" className="profile_name text-center col-12">
                {name}{haveToken && premium && <MdWorkspacePremium />}
            </h1>

            <div className="profile_header">

                <div id="usuario_p_background" className="profile_aboutme">
                    <div className="card-info">
                        <p className="card-text">Type of service: {typeOfServices}</p>
                        <p className="card-text">Email: {email}</p>
                        <p className="card-text">Address: {address}</p>
                        <p className="card-text">Phone: {phone}</p>
                        <p className="card-text">About us: {aboutUs}</p>
                    </div>
                    <EditProfileModal />
                </div>
                <img src={AvatarImg} className="profile_img" alt="..." />
            </div>
            <div className="b-example-divider"></div>

            <div className="addproduct">
                <AddProduct />
            </div>
            {/* <div className="addoffer">
                <AddOffer />
            </div> */}
            <hr className="featurette-divider" />
            <div className="Administarcion d-flex-column mt-5">
                <Dashboard />
                <hr className="featurette-divider" />
            </div>
        </div>

    );
}