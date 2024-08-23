import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/searchPremiumPartnerInfo.css";
import { MdWorkspacePremium } from "react-icons/md";

export const SearchPremiumPartnerInfo = ({ name, typeOfServices, premium }) => {
    const navigate = useNavigate();
    const { store } = useContext(Context);
    const haveToken = store.token;  //comprobar si usuario tiene token



    return (
        <div className="container">
            <div className="baseCard mx-3 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{name}{haveToken && premium && <MdWorkspacePremium />}</h5>
                        <p className="card-text">{typeOfServices}</p>
                        <a href="#" className="btn btnCards" onClick={() => navigate('/ProfileBusinessPremium')}>See more</a>
                    </div>
                </div>
            </div>
        </div>

    );
}