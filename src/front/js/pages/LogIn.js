import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import "../../styles/sign_up.css";
import "../../styles/log_in.css";
import { Context } from "../store/appContext";
import LogoAvocado from "../../img/logoAguacate.png";
import { FaQuestionCircle, FaEye, FaEyeSlash } from "react-icons/fa";


export const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shown, setShown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();
    const { store, actions } = useContext(Context);


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const switchShown = () => {
        setShown(!shown);
    }

    const handleClick = () => {
        actions.sendResetEmail(email);
    }

    const logIn = async () => {
        const resp = await actions.logIn(email, password);
        if (resp) {
            navigate('/ProfileBusiness');
        } else {
            navigate('/profile_user');
        }
    }

    return (
        <div className="container">
            <div className="d-flex flex-column signUp-card-login w-50">
                <div className="p-5 form-wrapper">
                    <h1 className="display-4 create-account-title">Log In</h1>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <div className="w-100">
                            <div className="form-group mt-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <p className="try-premium">
                                Don't you have an account?&nbsp;
                                <Link to="/SignUpUser" className="log_in_text fw-bold text-decoration-none">
                                    Sign up
                                </Link>
                            </p>
                            <div className="form-group mt-3">
                                <input
                                    type={shown ? 'text' : 'password'}
                                    required
                                    maxLength="12"
                                    minLength="6"
                                    className="form-control isRelative"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                <span className="showPasswordIcon" type="button" onClick={switchShown}>
                                    {shown ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            <p className="reset-password">
                                Forgotten your password?
                                <button
                                    type="button"
                                    className="btn-question-reset-password"
                                    onClick={() => setShowModal(true)}
                                >
                                    <FaQuestionCircle />
                                </button>
                            </p>
                        </div>
                        <div className="ms-4">
                            <img className="logoAvocado" src={LogoAvocado} alt="Logo Avocado" />
                        </div>
                    </div>
                    <button className="btn btn-signUp-user w-50 mt-4 shadow-lg" onClick={logIn}>Get logged in!</button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fs-5" id="exampleModalLabel">Recover your password</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group mt-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email address"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                    <span className="modalShowPasswordIcon" type="button" onClick={switchShown}>
                                        {shown ? <FaEye /> : <FaEyeSlash />}
                                    </span>
                                    <button onClick={handleClick}>
                                        reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}