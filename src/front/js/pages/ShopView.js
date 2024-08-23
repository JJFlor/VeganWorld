import React from 'react'
import '../../styles/shopview.css';
import BusinessLogo1 from "/workspaces/VeganWorld/src/front/img/burgerlogo.png"
import MenuBusiness1 from '/workspaces/VeganWorld/src/front/img/Menubusiness.png'
import {Reviews} from '/workspaces/VeganWorld/src/front/js/component/Reviews.js'
import { FindBusiness } from "/workspaces/VeganWorld/src/front/js/component/FindBusiness.js";
import AguacateNegro from "/workspaces/VeganWorld/src/front/img/aguaNegro.png"
import {Footer} from "/workspaces/VeganWorld/src/front/js/component/Footer.js"

export const ShopView = () => {
  return (
    <div id="shopview_container" className="container my-5">
            <div id="shopview_container_background" className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div id="shopview_hero_cover" className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 id="shopview_hero_cover_h1" className="display-4 fw-bold lh-1 text-body-emphasis">BUSINESS NAME</h1>
                <p id="shopview_hero_cover_p" className="lead">Business description and Adress</p>
                </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src={BusinessLogo1} alt="" width="720"/>
            </div>
            </div>

            <div className="b-example-divider"></div>


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
                id="shopview_pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false">
                <i className="fa-sharp fa-solid fa-comments">  FEEDBACKS</i>
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
                            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AguacateNegro}/>
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
                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AguacateNegro}/>
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
                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AguacateNegro}/>
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
                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AguacateNegro}/>
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
                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AguacateNegro}/>
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
                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AguacateNegro}/>
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
                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AguacateNegro}/>
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
                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AguacateNegro}/>
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
                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={AguacateNegro}/>                            
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
                    </div>
                    </div>
            </div>

            <div className="boton_descuento_business_noreg">
                </div>

			</div>

            <div className="tab-pane fade" id="pills-menu" role="tabpanel" aria-labelledby="pills-menu-tab">
                <img className="menu_business" src={MenuBusiness1}></img>

            </div>


			<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <Reviews />
			</div>

            <div className="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                <FindBusiness />
            </div>

        </div>
        <Footer />
    </div>

                           
  )
}