import React, { useContext, useEffect } from 'react';
import LogoNav from "../../img/aguaAmarillo.png";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import { CgProfile } from "react-icons/cg";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();


	useEffect(() => {
		console.log(store.partnerInfo);
	}, [store.partnerInfo])


	const handleGoToProfile = () => {

		if (store.partnerInfo) {
			navigate('/ProfileBusiness');
		} else {
			navigate('/profile_user');
		}
	}


	const handleLogout = () => {
		actions.logOut();  // Llama a la acción logOut para cerrar sesión
		navigate('/');     // Redirige al usuario a la página de inicio
	};

	return (
		<nav className="navbar navbar-expand-lg sticky-top">
			<div className="container-fluid px-5">
				<img className="lgNav" href="/" src={LogoNav} alt="Logo" />
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse itemsNav" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link to={"/"} className="nav-link itemsNavbar px-3 my-1">Home</Link>
						<Link to={"/SearchEngineMainPage"} className="nav-link itemsNavbar px-3 my-1">Business</Link>

						<Link to={"/shop_client"} className="nav-link itemsNavbar px-3 my-1">Shop</Link>

						<Link to={'/ContactUs'} className="nav-link itemsNavbar px-3 my-1">Contact</Link>

						{store.user ? (
							// Si el usuario está autenticado, muestra su foto de perfil
							<div className="nav-item dropdown">


								<Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									<CgProfile style={{ width: '25px', height: '25px', borderRadius: '50%', color: '#F6FB7A' }} />
									<p style={{ width: '25px', height: '25px', borderRadius: '50%', color: '#F6FB7A' }}>{store.user.name}</p>
								</Link>
								<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
									<li><a className="dropdown-item" onClick={() => handleGoToProfile()}>Profile</a></li>
									<li><a className="dropdown-item" href="#" onClick={() => handleLogout()}>Logout</a></li>
								</ul>
							</div>
						) : (
							// Si no está autenticado, muestra los botones de Sign Up y Register
							<>
								<Link to="/SignUpUser" className="btn btnNavbar px-3 mx-2 my-1">Sign Up</Link>
								<Link to="/Login" className="btn btnNavbar mx-2 my-1">Log in</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</nav >
	);
};