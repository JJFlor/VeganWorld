import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/sign_up.css";
import { Context } from "../store/appContext";
import LogoAvocado from "../../img/logoAguacate.png";

export const SignUpChooseType = () => {
    const [user, setUser] = useState(false);
    const [business, setBusiness] = useState(false);
    const navigate = useNavigate();

    const handleUserClick = () => {
        setUser(true)
        setBusiness(false)
    }

    const handleBusinessClick = () => {
        setUser(false)
        setBusiness(true)
    }

    const handleNext = (user, business) => {
        if (user) {
            navigate('/SignUpUser')
        } else if (business) {
            navigate('/SignUpBusiness')
        } else return

    }


    return (
        <div className="container">
            <div className="d-flex flex-column signUp-card">
                <div className="p-4 form-wrapper">
                    <h1 className="display-4 create-account-title">Create an account</h1>
                    <div className="white-wrapper">
                        <div className="d-flex flex-row">
                            <div className="w-100">
                                <div className="form-group mt-2">
                                    <h2 className="are-you-title mb-3">Are you...?</h2>
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio1" onClick={() => handleUserClick()} value={user} />
                                    &nbsp;
                                    <label className="form-check-label me-5" for="flexRadioDefault1">
                                        User
                                    </label>
                                </div>
                                <div className="form-group mt-2">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2" onClick={() => handleBusinessClick()} value={business} />
                                    &nbsp;
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Business
                                    </label>
                                </div>
                                <p className="already_account mt-4">
                                    Already have an account?&nbsp;
                                    <Link to="/LogIn" className="log_in_text fw-bold text-decoration-none">
                                        Log in!
                                    </Link>
                                </p>
                            </div>
                            <div className="text-right">
                                <img className="logoAvocado" src={LogoAvocado} href="#" />
                            </div>
                        </div>
                        <button className="btn btn-next w-25 mt-5 shadow-lg" onClick={() => handleNext(user, business)}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}