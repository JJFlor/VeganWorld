import React from "react";
import { useNavigate } from "react-router-dom";
import AvatarImg from "../../img/avatarImg.png";
// import JorgePic from "/workspaces/VeganWorld/src/front/img/redonda_jorge.png";
import "/workspaces/VeganWorld/src/front/styles/profileuser.css";
import { Footer } from './Footer';
import { EditProfileModal } from './EditProfileModal';

export const SearchUserInfo = ({ email, name, address, phone }) => {
    const navigate = useNavigate();

    return (
        <div className="container-fluid">

            <h1 id="usuario_h1" className="profile_name text-center col-12">{name}</h1>

            <div className="profile_header d-flex-row">
                <div className="d-flex flex-row">
                    <img src={AvatarImg} alt="" className="imgReview" />
                    {/* <img className="profile-pic" src={JorgePic} alt=''></img> */}
                </div>
                <div className="card-info">
                    <p className="card-text">Address: {address}</p>
                    <p className="card-text">Email: {email}</p>
                    <p className="card-text">Phone: {phone}</p>
                </div>
                <div className="d-flex-column">
                    <EditProfileModal />
                </div>
                <a href="#" className="btn btnCards" onClick={() => navigate('/Shops')}>Buy now</a>
            </div>
            <Footer />
        </div>

    );
}