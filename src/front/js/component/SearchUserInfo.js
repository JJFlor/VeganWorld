import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatarImg from "../../img/avatarImg.png";
import FondoShop1 from "/workspaces/VeganWorld/src/front/img/fondoShop1.jpg";
import "/workspaces/VeganWorld/src/front/styles/profileuser.css";
import { Footer } from './Footer';
import { EditProfileModal } from './EditProfileModal';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const SearchUserInfo = ({ email, name, address, phone }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getUserInfo();
    }, [])


    return (
        <div className="container-fluid">

            <h1 className="profile_h1-free text-center col-12">{name}</h1>

            <div className="profile_header-user d-flex-row pt-4">
                <div className="d-flex flex-row">
                    <img src={AvatarImg} alt="" className="profile_free_img" />
                    {/* <img className="profile-pic" src={JorgePic} alt=''></img> */}
                </div>
                <div className="card-header-user">
                    <p className="card-text">Address: {address}</p>
                    <p className="card-text">Email: {email}</p>
                    <p className="card-text">Phone: {phone}</p>
                    <EditProfileModal />
                </div>
            </div>

            <div id="banner-shop" className="text-center">
                <div className="textInvite">Discover a world of incredible products in our shop</div>
                <Link to="/shop_client">
                    <button className="boton-shopnow">SHOP NOW!</button>
                </Link>
                <div class="container">
                    <p class="txtDiscount text-start">Use code: 4GEEKS and get 20% discount</p>
                </div>
            </div>

        </div>

    );
}