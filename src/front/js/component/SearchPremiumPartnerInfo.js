import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/searchPremiumPartnerInfo.css";
import { MdWorkspacePremium } from "react-icons/md";
import AvatarImg from "../../img/avatarImg.png"

export const SearchPremiumPartnerInfo = ({ name, typeOfServices, premium, email, address, phone, aboutUs }) => {
    const navigate = useNavigate();
    const { store } = useContext(Context);
    const haveToken = store.token;  //comprobar si usuario tiene token



    return (

        <div className="container">
            <h1 id="usuario_h1" className="profile_name text-center col-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"></path>
                </svg>
                {name}{haveToken && premium && <MdWorkspacePremium />}
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"></path>
                </svg>
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

            <div className="addproduct">
                <AddProduct />
                {/* <a href="#" className="btn btnCards" onClick={() => navigate('/Shops')}>Buy now</a>
                <a href="#" className="btn btnCards" onClick={() => navigate('/ProfileBusiness')}>See more</a> */}
            </div>

            {/* <div className="b-example-divider"></div> */}

            {/* <div className="addoffer">
                <AddOffer />
            </div> */}

            {/* <div className="b-example-divider"></div> */}


            <hr className="featurette-divider" />
            <div className="b-example-divider"></div>

            <div className="Administarcion d-flex-column">

                <Dashboard />
            </div>
            <Footer />
        </div>

    );
}