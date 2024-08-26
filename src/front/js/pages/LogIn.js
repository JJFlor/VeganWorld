import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/sign_up.css";
import "../../styles/log_in.css";
import { Context } from "../store/appContext";
import LogoAvocado from "../../img/logoAguacate.png";
import { FaQuestionCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



export const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shown, setShown] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [repeatNewPassword, setRepeatNewPassword] = useState("");
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    
    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        scrollToTop();
    }, []);
    const switchShown = () => {
        setShown(!shown)
    }
    const resetPassword = (email, newPassword) => {
        console.log(newPassword)
        console.log(repeatNewPassword)
        if (email == store.email && newPassword == repeatNewPassword) {
            actions.resetPassword(email, newPassword)
        } else if (email == store.email && newPassword != repeatNewPassword()) {
            alert("Email or passwords are incorrect");
        }
    }
    const logIn = async () => {
        const resp = await actions.logIn(email, password);
        await resp? navigate('/ProfileBusiness') : navigate('/usuario')
    }
    return (
        <div className="container">
            <div className="d-flex flex-column signUp-card-login w-50">
                <div className="p-5 form-wrapper">
                    <h1 className="display-4 create-account-title">Log In</h1>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <div className="w-100">
                            <div className="form-group mt-3">
                                <input type="email" className="form-control" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <p className="try-premium">
                                Don't you have an account?&nbsp;
                                <Link to="/SignUpChooseType" className="log_in_text fw-bold text-decoration-none">
                                    Sign up
                                </Link>
                            </p>
                            <div className="form-group mt-3">
                                <input type={shown ? 'text' : 'password'} required={true} maxLength="12" minLength="6" className="form-control isRelative" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                                <span className="showPasswordIcon" type="button" onClick={switchShown}>{shown ? <FaEye /> : <FaEyeSlash />}</span>
                            </div>
                            <p className="reset-password">
                                Forgotten your password?
                                <button type="button" class="btn-question-reset-password" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <FaQuestionCircle />
                                </button>
                            </p>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 className="modal-title fs-5" id="exampleModalLabel">Recover your password</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div className="form-group mt-3">
                                                <input type="email" className="form-control" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="form-group mt-3">
                                                <input type={shown ? 'text' : 'password'} required={true} maxLength="12" minLength="6" className="form-control modalIsRelative" placeholder="Create new password" onChange={(e) => { setNewPassword(e.target.value); }} value={newPassword} />
                                                <span className="modalShowPasswordIcon" type="button" onClick={switchShown}>{shown ? <FaEye /> : <FaEyeSlash />}</span>
                                            </div>
                                            <div className="form-group mt-3">
                                                <input type={shown ? 'text' : 'password'} required={true} maxLength="12" minLength="6" className="form-control modalTwoIsRelative" placeholder="Repeat new password" onChange={(e) => { setRepeatNewPassword(e.target.value); }} value={repeatNewPassword} />
                                                <span className="modalTwoShowPasswordIcon" type="button" onClick={switchShown}>{shown ? <FaEye /> : <FaEyeSlash />}</span>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-reset-password" data-bs-dismiss="modal" onClick={() => resetPassword(email, newPassword)}>Reset password</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-4">
                            <img className="logoAvocado" src={LogoAvocado} href="#" />
                        </div>
                    </div>
                    <button className="btn btn-signUp-user w-50 mt-4 shadow-lg" onClick={() => logIn(email, password)}>Get logged in!</button>
                </div>
            </div>
        </div>
    );
}