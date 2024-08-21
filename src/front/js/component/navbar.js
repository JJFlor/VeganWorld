import React from "react";
import { useLocation } from "react-router-dom";
import LogoNav from "../../img/aguaAmarillo.png";
import AvatarImg from "../../img/avatarImg.png"

export const Navbar = () => {
	const location = useLocation();
	// const [unregisteredNavbar, setUnregisteredNavbar] = useState(false);    //state que controla cuando poner el Navbar sin registrar y cuando no
	// const [isLogged, setIsLogged] = useState(false);  //state que indica si usuario está logeado 

	const handleLogin = () => {
		setIsLogged(true);
	};

	const handleLogout = () => {
		setIsLogged(false);
	};

	const RequireAuth = ({ isLogged, children }) => {
		const location = useLocation(); // uselocation react js
		if (!isLogged) {
			return <Navigate to='/login' state={{ from: location }} />

		} return children
	};


	const handleShowNavbarUnregistered = () => {
		isLogged == true ? setUnregisteredNavbar(false) : setUnregisteredNavbar(true);

	}
	// useEffect(() => {
	// 	if (location.pathname === "/rutaDondeVaNavbarSinRegistrar") {
	// 		return () => {
	// 			handleShowNavbarUnregistered();
	// 		};
	// 	}
	// 	else {
	// 		setUnregisteredNavbar(true);
	// 	}
	// }, [location]);


	return (
		<nav className="navbar navbar-expand-lg fixed-top">
			<div className="container-fluid px-5">
				<img className="lgNav" href="#" src={LogoNav} />
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				{/* {
					unregisteredNavbar 
					? */}
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
					{/* :
						<div className="collapse navbar-collapse itemsNav " id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<a className="nav-link itemsNavbar px-3 my-1" href="#">Home</a>
								<a className="nav-link itemsNavbar px-3 my-1" >Business</a>
								<a className="nav-link itemsNavbar px-3 my-1" >Blog</a>
								<a className="nav-link itemsNavbar px-3 my-1" >Shop</a>
								<a className="nav-link itemsNavbar px-3 my-1" >Contact</a>
								<img className="avatarImg px-3 mx-2 my-1" src={AvatarImg}>Sign Up</a>
								<a className="btn btnNavbar my-1">Partner Name</a> 
							</div>
						</div>
				} */}
			</div>
		</nav>
	);
};
