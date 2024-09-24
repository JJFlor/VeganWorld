import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '/workspaces/VeganWorld/src/front/styles/profilebusinessfree.css';
import MenuBusiness1 from '/workspaces/VeganWorld/src/front/img/Menubusiness.png'
import { FindBusiness } from "/workspaces/VeganWorld/src/front/js/component/FindBusiness.js";
import AguacateNegro from "/workspaces/VeganWorld/src/front/img/aguaNegro.png"
import { MdWorkspacePremium } from "react-icons/md";
import { Context } from '../store/appContext';
import AvatarImg from "../../img/avatarImg.png"
import { EditProfileModal } from "/workspaces/VeganWorld/src/front/js/component/EditProfileModal.js"
import { Footer } from "/workspaces/VeganWorld/src/front/js/component/Footer.js"

export const SearchBusinessFreeInfo = ({ name, typeOfServices, premium, email, address, phone, aboutUs }) => {
    const navigate = useNavigate();
    const { store } = useContext(Context)
    const haveToken = store.token;  //comprobar si usuario tiene token

    return (
        <div className="container-fluid my-5">
            <h1 id="usuario_h1" className="profile_name text-center col-12">{name}{haveToken && premium && <MdWorkspacePremium />}</h1>

            <div className="profile_header d-flex-row">
                <img src={AvatarImg} className="profile_img col-12" alt="..." />
                <div className="card_header card-info">
                    <div className="card_header-text">Type of Services: {typeOfServices}</div>
                    <div className="card_header-text">Address: {address}</div>
                    <div className="card_header-text">Email: {email}</div>
                    <div className="card_header-text">Phone: {phone}</div>
                    <EditProfileModal />
                </div>
            </div>

            <div className="b-example-divider"></div>
            <hr className="featurette-divider" />

            <ul id="shopview_pills" className="nav nav-pills" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="shopview_pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true">
                        <i className="fa-sharp-duotone fa-solid fa-image">  PICS</i>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="shopview_pills-menu-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-menu"
                        type="button"
                        role="tab"
                        aria-controls="pills-menu"
                        aria-selected="false">
                        <i className="fa-solid fa-utensils">  MENU</i>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="shopview_pills-map-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-map"
                        type="button"
                        role="tab"
                        aria-controls="pills-map"
                        aria-selected="false">
                        <i className="fa-duotone fa-solid fa-map">  LOCATION</i>
                    </button>
                </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="album py-5 bg-body-tertiary">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AguacateNegro} />
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                                    <button type="button" className="btn btn-sm btn-outline-warning">Download</button>
                                                </div>
                                                <small className="text-body-secondary">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AguacateNegro} />
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                                    <button type="button" className="btn btn-sm btn-outline-warning">Download</button>
                                                </div>
                                                <small className="text-body-secondary">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AguacateNegro} />
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                                    <button type="button" className="btn btn-sm btn-outline-warning">Download</button>
                                                </div>
                                                <small className="text-body-secondary">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="banner-shop" className="text-center">
                                    <div className="textInvite">Discover a world of incredible products in our shop</div>
                                    <Link to="/shop_client">
                                        <button className="boton-shopnow">SHOP NOW!</button>
                                    </Link>
                                    <div class="container">
                                        <p class="txtDiscount text-start">Use code: 4GEEKS and get 20% discount</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade text-center mt-5 mb-5" id="pills-menu" role="tabpanel" aria-labelledby="pills-menu-tab">
                    <img className="img-menu-free text-center" src={MenuBusiness1} alt="Menu" />
                </div>

                <div className="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                    <FindBusiness />
                </div>
            </div>
            <Footer />
        </div>
    );
}
