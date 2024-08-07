import React from 'react'
import LogoNav from "../../img/aguaAmarillo.png"
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid px-5">
                <img className="lgNav" href="#" src={LogoNav} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse itemsNav " id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link itemsNavbar px-3 my-1" href="#">Home</a>
                        <a className="nav-link itemsNavbar px-3 my-1" >Business</a>
                        <a className="nav-link itemsNavbar px-3 my-1" >Blog</a>
                        <a className="nav-link itemsNavbar px-3 my-1" >Shop</a>
                        <a className="nav-link itemsNavbar px-3 my-1" >Contact</a>
                        <a className="btn btnNavbar px-3 mx-2 my-1" >Sign Up</a>
                        <a className="btn btnNavbar my-1" >Register</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
