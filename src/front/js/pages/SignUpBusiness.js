import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sign_up.css";
import { Context } from "../store/appContext";
import LogoAvocado from "../../img/logoAguacate.png";
import { FaQuestionCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";




export const SignUpBusiness = () => {
    const [name, setName] = useState("");
    const [typeOfServices, setTypeOfServices] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shown, setShown] = useState(false);
    const [premium, setPremium] = useState(false);
    const navigate = useNavigate();
    const { actions } = useContext(Context);

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        scrollToTop();
    }, []);

    const switchShown = () => {
        setShown(!shown);
    }


    const handlePartnerPremiumClick = () => {
        setPremium(true);
    }

    const handlePartnerFreeClick = () => {
        setPremium(false);
    }

    const handleSignUp = async () => {
        const signUpResult = await actions.signUpPartner(email, password, name, typeOfServices, premium);
        if (await signUpResult) {
            navigate('/ProfileBusiness')
        } else {
            alert("Partner Sign Up failed");

        }
    }

    return (
        <div className="container">
            <div className="d-flex flex-column signUp-card-business w-50">
                <div className="p-4 form-wrapper">
                    <h1 className="display-4 create-account-title">Create an account</h1>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <div className="w-100">
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" placeholder="Business name" onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" placeholder="Type of services you offer" onChange={(e) => setTypeOfServices(e.target.value)} value={typeOfServices} />
                            </div>
                            <p className="try-premium">
                                Choose between Free or Premium!
                                <button type="button" class="btn-question-premium" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <FaQuestionCircle />
                                </button>
                            </p>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 className="modal-title fs-5" id="exampleModalLabel">What premium offers to your business?</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <ul>
                                                <li>Better positioning in our web.</li>
                                                <li>Allows you to sell your products in our Shop.</li>
                                                <li>Allows you to show your current offers.</li>
                                            </ul>
                                            <h6 className="only-for text-center mt-4">Only for 4,99€/month!</h6>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-free" data-bs-dismiss="modal" onClick={() => { handlePartnerFreeClick() }}>Go Free</button>
                                            <button type="button" className="btn btn-premium" data-bs-dismiss="modal" onClick={() => { handlePartnerPremiumClick() }}>Go Premium</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="email" className="form-control" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="form-group mt-3">
                                <input type={shown ? 'text' : 'password'} required={true} maxLength="12" minLength="6" className="form-control inputRelativeBusiness" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                                <span className="showPasswordBusiness" type="button" onClick={switchShown}>{shown ? <FaEye /> : <FaEyeSlash />}</span>
                            </div>
                        </div>
                        <div>
                            <div className="ms-4">
                                <img className="logoAvocado" src={LogoAvocado} href="#" />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-signUp-user w-25 mt-4 shadow-lg" onClick={() => handleSignUp()}>Sign up</button>
                </div>
            </div>
        </div>
    );
}