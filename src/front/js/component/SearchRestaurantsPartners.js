import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/searchRestaurantsPartners.css";
import { MdWorkspacePremium } from "react-icons/md";
import AvatarImg from "../../img/avatarImg.png"

export const SearchRestaurantsPartners = ({ name, typeOfServices, premium, email, address, phone, aboutUs }) => {
    const navigate = useNavigate();
    const { store } = useContext(Context);
    const haveToken = store.token;  //comprobar si usuario tiene token



    return (
        <div className="container mt-5 mb-3 d-flex flex-column justify-content-center align-items-center">
            <div className="row">
                <div className="col-10 card business-card">
                    <div className="card-body">
                        <div className="d-flex flex-row align-items-center justify-content-center">
                            <img src={AvatarImg} alt="" className="imgReview-premium" />
                            <h5 className="card-title-category business-name">{name}{haveToken && premium && <MdWorkspacePremium />}</h5>
                        </div>
                        <div className="categories-business-info">
                            <p className="card-text"><b>Type of service:</b> {typeOfServices}</p>
                            <p className="card-text"><b>Email:</b> {email}</p>
                            <p className="card-text"><b>Address:</b> {address}</p>
                            <p className="card-text"><b>Phone:</b> {phone}</p>
                            <p className="card-text"><b>About us:</b> {aboutUs}</p>
                        </div>
                        <a href="#" className="btn btnCards me-5 mt-3" onClick={() => navigate('/shop_business')}>Buy now</a>
                        <a href="#" className="btn btnCards mt-3" onClick={() => navigate('/ProfileBusiness')}>See more</a>
                    </div>
                </div>
            </div>
        </div>


    );
}