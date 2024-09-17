import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/sign_up.css";
import { Context } from "../store/appContext";
import LogoAvocado from "../../img/logoAguacate.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";



export const SignUpUser = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [shown, setShown] = useState(false);
    const navigate = useNavigate();
    const { actions } = useContext(Context);


    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        scrollToTop();
    }, []);

    const switchShown = () => {
        setShown(!shown)
    }

    const signUpUser = async () => {
        await actions.signUpUser(email, password, username, address, phone);
        navigate('/profile_user');
    }

    const areYouAbusiness = () => {
        navigate('/SignUpBusiness')
    }

    return (
        <div className="container">
            <div className="d-flex flex-column signUp-card w-50">
                <div className="p-5 form-wrapper">
                    <h1 className="display-4 create-account-title">Create an account</h1>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <div className="w-100">
                            <button type="button" className="btn-question-premium" onClick={() => areYouAbusiness()}><FaQuestionCircle />&nbsp; Are you a business? Click here!</button>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} />
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} value={phone} />
                            </div>
                            <div className="form-group mt-3">
                                <input type="email" className="form-control" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="form-group mt-3 inputIsRelative">
                                <input type={shown ? 'text' : 'password'} required={true} maxLength="12" minLength="6" className="form-control" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                                <span className="showPassword" type="button" onClick={switchShown}>{shown ? <FaEye /> : <FaEyeSlash />}</span>
                            </div>

                        </div>
                        <div className="ms-4">
                            <img className="logoAvocado" src={LogoAvocado} href="#" />
                        </div>
                    </div>
                    <button className="btn btn-signUp-user w-25 mt-4 shadow-lg" onClick={() => signUpUser(email, password, username, address, phone)}>Sign up</button>
                </div>
            </div>
        </div>
    );
}