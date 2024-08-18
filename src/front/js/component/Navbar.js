import React from 'react'
import LogoNav from "../../img/aguaAmarillo.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg sticky-top">
			<div className="container-fluid px-5">
				<img className="lgNav" href="#" src={LogoNav} />
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse itemsNav " id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link to={"/"} className="nav-link itemsNavbar px-3 my-1" href="/">Home</Link>
						<a className="nav-link itemsNavbar px-3 my-1" >Business</a>
						<a className="nav-link itemsNavbar px-3 my-1" >Blog</a>
						<Link to={"/shop_business"} className="nav-link itemsNavbar px-3 my-1" >Shop</Link>
						<a className="nav-link itemsNavbar px-3 my-1" >Contact</a>
						<a className="btn btnNavbar px-3 mx-2 my-1" >Sign Up</a>
						<a className="btn btnNavbar mx-2 my-1" >Register</a>
					</div>
				</div>
			</div>
		</nav>
	)
};
