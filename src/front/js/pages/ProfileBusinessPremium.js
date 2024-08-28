import React from 'react'
import BusinessLogo1 from "/workspaces/VeganWorld/src/front/img/burgerlogo.png"
import "/workspaces/VeganWorld/src/front/styles/profileBusinessPremium.css"
import { Form } from '../component/Form'
import { Dashboard } from '../component/Dashboard'
import { AddProduct } from './AddProduct';
import { AddOffer } from "/workspaces/VeganWorld/src/front/js/component/AddOffer.js"
import { Footer } from "/workspaces/VeganWorld/src/front/js/component/Footer.js"
import { EditProfileModal } from "/workspaces/VeganWorld/src/front/js/component/EditProfileModal.js"

export const ProfileBusinessPremium = () => {


    return (

        <div>


            <h1 className="profile_name_premium text-center col-12">
                Business PREMIUM NAME
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"></path>
                </svg>
            </h1>

            <div className="profile_header d-flex-row">

                <img src={BusinessLogo1} className="profile_img col-12" alt="..." />
                <div className="form_container">
                    <form className="form_celdas">
                        <label htmlFor="inputService" className="form-label">Type of service</label>
                        <input type="text" className="form-control" id="inputService" placeholder="" />
                        <label htmlFor="inputAddress" className="form-label">Adress</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="" />
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="...@veganworld.com" />
                        <label className="form-label">Phone</label>
                        <input type="" className="form-control"></input>
                        <label className="form-label">About Us</label>
                        <textarea row="30"></textarea>
                        <EditProfileModal />
                    </form>
                </div>

            </div>


            <div className="addproduct">
                <AddProduct />
            </div>

            <div className="b-example-divider"></div>

            <div className="addoffer">
                <AddOffer />
            </div>

            <div className="b-example-divider"></div>


            <div className="Administarcion d-flex-column">

                <Dashboard />
            </div>



            <Footer />

        </div>

    )
}