import React from 'react'
import BusinessLogo1 from "/workspaces/VeganWorld/src/front/img/burgerlogo.png"
import "/workspaces/VeganWorld/src/front/styles/profileBusinessPremium.css"
import { Form } from '../component/Form'
import { Dashboard } from '../component/Dashboard'
import '/workspaces/VeganWorld/src/front/styles/profileBusinessPremium.css';
import { AddProduct } from './AddProduct'
import { AddOffer } from '/workspaces/VeganWorld/src/front/js/component/AddOffer.js'

export const ProfileBusinessPremium = () => {


    return (

        <div>


            <h1 id="usuario_h1" className="profile_name text-center col-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"></path>
                </svg>
                Business PREMIUM NAME
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"></path>
                </svg>
            </h1>

            <div className="profile_header">

                <div id="usuario_p_background" className="profile_aboutme">

                    <h3 id="usuario_h3" className="text-bold">About Us</h3>

                    <p className="profile_aboutme-texto">
                        As you can see the paragraphs gracefully wrap around the floated image.
                        Now imagine how this would look with some actual content in here,
                        rather than just this boring placeholder text that goes on and on,
                        but actually conveys no tangible information at.
                        It simply takes up space and should not really be read.
                        <br></br>
                        <br></br>
                        And yet, here you are, still persevering in reading this placeholder text,
                        hoping for some more insights, or some hidden easter egg of content.
                        A joke, perhaps. Unfortunately, there's none of that here.
                    </p>

                </div>

                <img src={BusinessLogo1} className="profile_img" alt="..." />

            </div>


            <hr className="featurette-divider" />

            <div className="addproduct">
                <AddProduct />
            </div>

            <div className="addoffer">
                <AddOffer />
            </div>

            <div className="Dashboard">
                <Dashboard />
            </div>

            <hr className="featurette-divider" />

            <h3 id="usuario_h3_info"> PROFILE INFO</h3>

            <div className="profile_form">
                <Form />
            </div>

            <div className="boton_delete d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-danger btn-lg px-4 align-self-center">DELETE ACCOUNT</button>
            </div>
        </div>
    )
}
