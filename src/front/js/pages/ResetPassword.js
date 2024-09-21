import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/log_in.css";

export const ResetPassword = () => {
	const { store, actions } = useContext(Context);
	//utilizamos useLocation para poder manejar valores grandes ya que useParams no permite este tipo de valores 
	const location = useLocation();
	//almacenamos en variable queryParams la busqueda realizada que se encuentra en el url
	const queryParams = new URLSearchParams(location.search);
	//extraemos el token del queryPArams
	const token = queryParams.get('token');
	const [password, setPassword] = useState('')
	const [user, setUser] = useState()
	const navigate = useNavigate();
	const [success, setSuccess] = useState('');

	useEffect(async () => {
		if (token) {
			//creamos funcion async para el correcto uso del useEffect 
			const fetchData = async () => {

				//verificamos que el token sea correcto y podemos saber que usuario es el que esta accediendo con la identidad del token
				const resp = await actions.checkAuth(token);
				setUser(prev => prev = resp.user)
			}
			fetchData()
		}
		else {
			alert('Link expiró, inténtelo de nuevo')
		}
	}, [token]);


	const handleClick = async () => {
		//pasamos a la actions.updatePassword el password y el token
		const resp = await actions.updatePassword(password, token)
		if (resp.success) {
			setSuccess(true)
			alert("Now, let's get logged in!")
			setTimeout(navigate('/LogIn'), 1000)
		} else {
			setSuccess(false)
		}
	}

	return (
		<div className="card w-50 change-password-card">
			<h2>Reset your password</h2>
			<p className="change-password-title">Hi {user && user.email}, let's change your password</p>
			<input
				className="w-75 ms-5"
				type="text"
				placeholder="Choose a new password"
				onChange={e => setPassword(e.target.value)}
				value={password}
			/>
			<button className="btn-card-change-password mt-3" onClick={handleClick}>Change password</button>
			{
				success !== '' ?
					success ?
						<div className="container bg-success"> se ha actualizado la contraseña exitosamente</div>
						:
						<div className="container bg-danger"> hubo un problema</div>
					:
					''
			}
		</div>
	);
};