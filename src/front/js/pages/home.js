import React, { useContext } from "react";
import "../../styles/home.css";
import { Jbtron } from "../component/Jbtron";
import { FindBusiness } from "../component/FindBusiness";
import { Reviews } from "../component/Reviews";
import { Footer } from "../component/Footer";
import { Navbar } from "../component/Navbar";
import {Form} from "/workspaces/VeganWorld/src/front/js/component/Form.js";
import { Dashboard } from "../component/Dashboard";

export const Home = () => {

	return (
		<div>
			
			<Jbtron />
			<Footer />
		</div>
	);
};