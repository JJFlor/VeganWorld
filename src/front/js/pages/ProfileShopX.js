import React from 'react'
import BusinessLogo1 from "/workspaces/VeganWorld/src/front/img/burgerlogo.png"
import "/workspaces/VeganWorld/src/front/styles/shoppremium.css"
import { Form } from '../component/Form'
import { Dashboard } from '../component/Dashboard'
import MenuBusiness1 from '/workspaces/VeganWorld/src/front/img/Menubusiness.png'
import { Reviews } from '/workspaces/VeganWorld/src/front/js/component/Reviews.js'
import { FindBusiness } from "/workspaces/VeganWorld/src/front/js/component/FindBusiness.js";
import AguacateNegro from "/workspaces/VeganWorld/src/front/img/aguaNegro.png"
import { Footer } from "/workspaces/VeganWorld/src/front/js/component/Footer.js"
import '../../styles/shopview.css';







//PROFILE BUSINESS PREMIUM //



export const ProfileBusinessPremium = () => {
    return (
        <div>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <div className="header_premium d-flex justify-content-center">
                    <h1 className="display-4 fw-bold text-body-emphasis">My Premium Shop</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"></path>
                    </svg>
                </div>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                </div>
                <div className="overflow-hidden" max-height-30vh>
                    <div className="container px-5">
                        <img src={BusinessLogo1} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>
            <hr className="featurette-divider" />
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
                    <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
                    <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                </div>
            </div>
            <hr className="featurette-divider" />
            <Dashboard />
            <hr className="featurette-divider" />
            <div className="text-center">
                <h1 id="usuario_h1-form">EDIT PROFILE INFO</h1>
            </div>
            <Form />
            <hr className="featurette-divider" />
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button type="button" className="btn btn-danger btn-lg px-4 align-self-center">DELETE ACCOUNT</button>
            </div>
        </div>
    )
}








//PROFILE BUSINESS FREE //








export const ProfileBusinessFree = () => {
    return (
        <div id="shopview_container" className="container my-5">
            <div id="shopview_container_background" className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div id="shopview_hero_cover" className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 id="shopview_hero_cover_h1" className="display-4 fw-bold lh-1 text-body-emphasis">BUSINESS NAME</h1>
                    <p id="shopview_hero_cover_p" className="lead">Business description and Adress</p>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src={BusinessLogo1} alt="" width="720" />
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