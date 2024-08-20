import React from 'react'
import BusinessLogo1 from "/workspaces/VeganWorld/src/front/img/burgerlogo.png"

export const ShopPremium = () => {
  return (

    <div>
      
        <div className="px-4 pt-5 my-5 text-center border-bottom">
        <div className="header_premium d-flex justify-content-center">
        <h1 className="display-4 fw-bold text-body-emphasis">My Premium Shop</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"></path>
        </svg>
        </div>
        <span className="badge d-flex align-items-center p-1 pe-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill">
        <img className="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>PREMIUM ACCOUNT
        </span>
        <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        </div>
        <div className="overflow-hidden" max-height-30vh>
        <div className="container px-5">
        <img src={BusinessLogo1} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
        </div>
        </div>
        </div>
  

        <hr className="featurette-divider"/>









        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Edit Profile</button>
            <button type="button" className="btn btn-danger btn-lg px-4">Delete Account</button>
        </div>
    </div>

  )

}
