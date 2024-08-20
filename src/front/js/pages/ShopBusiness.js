import React from "react";
import { Link } from "react-router-dom";
import BusinessLogo1 from '/workspaces/VeganWorld/src/front/img/burgerlogo.png'
import MenuBusiness from '/workspaces/VeganWorld/src/front/img/Menubusiness.png'
import {Reviews} from '/workspaces/VeganWorld/src/front/js/component/Reviews.js'
import {BotonDescuento} from '/workspaces/VeganWorld/src/front/js/component/BotonDescuento.js'
import { WriteFeedback } from "../component/WriteFeedback";
import { FindBusiness } from "/workspaces/VeganWorld/src/front/js/component/FindBusiness.js";
import { BotonDomicilio } from "../component/BotonDomicilio";

export const ShopBusiness = () => {

  
    return (


        <div className="jumbo_business_noreg">
            <div className="container_logo">    
                <img className="business_noreg_logo" href="#" src={BusinessLogo1} />
                <h1 className="business_noreg_nombre">Nombre Negocio</h1>
                <h2 className="business_noreg_adress">Av. Adress of business nº1 </h2>
            </div>



            <div className="business_noreg_cards">
            

                <ul className="nav nav-pills mb-3 justify-content-center mt-5" id="pills-tab" role="tablist">

                     <li className="nav-item" role="presentation">
                        <button
                        className="nav-link active"
                        id="pills-home-tab"
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
                        id="pills-menu-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-menu"
                        type="button"
                        role="tab"
                        aria-controls="pills-menu"
                        aria-selected="false">
                        <i class="fa-solid fa-utensils">  MENU</i>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false">
                        <i class="fa-sharp fa-solid fa-comments">  FEEDBACKS</i>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link"
                        id="pills-map-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-map"
                        type="button"
                        role="tab"
                        aria-controls="pills-map"
                        aria-selected="false">
                        <i class="fa-duotone fa-solid fa-map">  LOCATION</i>
                        </button>
                    </li>
                </ul>



                <div className="tab-content" id="pills-tabContent">

				<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                
                <h1>BUSINESS PICS:</h1>
                <br />
                <div className="baseCard mx-3 mb-4">
                        <div className="cards_business_noreg">
                            <div className="card-body">
                                <img className="card-img" src="https://http2.mlstatic.com/D_NQ_NP_908007-MLB53544575392_012023-O.webp" alt=""></img>
                                <h5 className="card-title">FOTO BUSINESS</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button class="addToFavBtn" >Add to Favorites</button>
                                <button class="sendToFriend">Send to a friend</button>
                            </div>
                        </div>
                </div>
                
                <div className="baseCard mx-3 mb-4">
                        <div className="cards_business_noreg">
                            <div className="card-body">
                                <img className="card-img" src="https://http2.mlstatic.com/D_NQ_NP_908007-MLB53544575392_012023-O.webp" alt=""></img>
                                <h5 className="card-title">FOTO BUSINESS</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button class="addToFavBtn" >Add to Favorites</button>
                                <button class="sendToFriend">Send to a friend</button>
                            </div>
                        </div>
                </div>

                <div className="baseCard mx-3 mb-4">
                        <div className="cards_business_noreg">
                            <div className="card-body">
                                <img className="card-img" src="https://http2.mlstatic.com/D_NQ_NP_908007-MLB53544575392_012023-O.webp" alt=""></img>
                                <h5 className="card-title">FOTO BUSINESS</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button class="addToFavBtn" >Add to Favorites</button>
                                <button class="sendToFriend">Send to a friend</button>
                            </div>
                        </div>
                </div>

                <div className="baseCard mx-3 mb-4">
                        <div className="cards_business_noreg">
                            <div className="card-body">
                                <img className="card-img" src="https://http2.mlstatic.com/D_NQ_NP_908007-MLB53544575392_012023-O.webp" alt=""></img>
                                <h5 className="card-title">FOTO BUSINESS</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button class="addToFavBtn" >Add to Favorites</button>
                                <button class="sendToFriend">Send to a friend</button>
                            </div>
                        </div>
                </div>

                <div className="boton_descuento_business_noreg">
                <BotonDescuento />
                </div>

			</div>

            <div className="tab-pane fade" id="pills-menu" role="tabpanel" aria-labelledby="pills-menu-tab">

                <img className="menu_business" src={MenuBusiness}></img>

            </div>


			<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
					<h1>REVIEWS:</h1>
                    <Reviews />
                    <WriteFeedback />
                    <br/>
			</div>

            <div className="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                <h1 className="text">LOCATION:</h1>
                <FindBusiness />
                <BotonDomicilio />
            </div>
            </div>
        </div>
</div>


    )
};