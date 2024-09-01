import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/searchPremiumPartnerInfo.css";
import { MdWorkspacePremium } from "react-icons/md";
import AvatarImg from "../../img/avatarImg.png"

export const SearchRestaurantsPartners = ({ name, typeOfServices, premium, email, address, phone, aboutUs }) => {
    const navigate = useNavigate();
    const { store } = useContext(Context);
    const haveToken = store.token;  //comprobar si usuario tiene token



    return (
        <div className="container">
            <div className="rollCards mx-3 mb-4 row">
                <div className="col-8 card">
                    <div className="card-body">
                        <div className="d-flex flex-row">
                            <img src={AvatarImg} alt="" className="imgReview" />
                            <h5 className="card-title-category">{name}{haveToken && premium && <MdWorkspacePremium />}</h5>
                        </div>
                        <div className="category">
                            <p className="card-text">Type of service: {typeOfServices}</p>
                            <p className="card-text">Email: {email}</p>
                            <p className="card-text">Address: {address}</p>
                            <p className="card-text">Phone: {phone}</p>
                            <p className="card-text">About us: {aboutUs}</p>
                        </div>
                        <a href="#" className="btn btnCards" onClick={() => navigate('/Shops')}>Buy now</a>
                        <a href="#" className="btn btnCards" onClick={() => navigate('/ProfileBusiness')}>See more</a>
                    </div>
                </div>
            </div>
        </div>


    );
}