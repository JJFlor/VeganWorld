import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/sign_up.css";
import { Context } from "../store/appContext";

export const Sign_up = () => {


    return (
        <div className="container">
            <div className="d-flex flex-column signUp-card w-50">
                <div className="p-4">
                    <h1 className="display-4">Create an account</h1>
                    <div>
                        <div className="form-group mt-2">
                            <h2>Are you...?</h2>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <label className="form-check-label" for="flexRadioDefault1">
                                User
                            </label>
                        </div>
                        <div className="form-group mt-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            <label className="form-check-label" for="flexRadioDefault1">
                                Business
                            </label>
                        </div>
                        <p className="text-secondary">
                            Already have an accpount?&nbsp;
                            <Link to="/login" className="text-danger fw-bold text-decoration-none">
                                Log in!
                            </Link>
                        </p>
                        <input type="check" style={{ display: "none" }} aria-label="active" onChange={(e) => setIsActive(e.target.value)} value={isActive} />
                        <button className="btn btn-primary w-100 mt-4 shadow-lg" onClick={() => signUp(email, password, isActive)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

    )
}