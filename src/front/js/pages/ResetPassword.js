import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/log_in.css";

export const ResetPassword = () => {
	const { store, actions } = useContext(Context);
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const token = queryParams.get('token');
	const [password, setPassword] = useState('')
	const [user, setUser] = useState()
	const navigate = useNavigate()

	useEffect(async () => {
		if (token) {
			const resp = await actions.checkAuth(token);
			setUser(prev => prev = resp.user)
		}
	}, [token]);


	const handleClick = async () => {
		const resp = await actions.updatePassword(password, token)
		if (resp.success) {
			alert("Now, let's get logged in!")
			navigate('/LogIn')
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
		</div>
	);
};