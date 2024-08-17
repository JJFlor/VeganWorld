import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { MdEdit } from "react-icons/md";
import { Context } from "../store/appContext";

export const Crea_Usuario_Cliente = () => {

    const { store, actions } = useContext(Context);


    return (
        <div className="container">
            <div className="d-flex flex-column signUp-card w-50">
                <div className="p-5 form-wrapper">
                    <h1 className="display-4 create-account-title">Create an account</h1>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <div className="w-100">
                            <div>
                                <img className="profile-img" src=""/>
                            </div>
                            <div className="form-group mt-3">
                                <p>Client Name</p>
                                <button type="button" class="btn-question-premium">
                                    <MdEdit />
                                </button>
                            </div>
                           
                                
                                
                        
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
};
