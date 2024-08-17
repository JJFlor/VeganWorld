const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: sessionStorage.getItem("token") || null,
			email: sessionStorage.getItem("email") || null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			signUpUser: async (email, password, name) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/register_user`,
						{
							method: 'POST',
							body: JSON.stringify({ email, password, name }),
							headers: { "Content-Type": "application/json" }
						});
					if (!response.ok) {
						const errorData = await response.json();
						alert("Error", errorData);
					}
					const data = await response.json();
					if (data.access_token) {
						sessionStorage.getItem("token", data.access_token);
						sessionStorage.getItem("email", data.email);
						setStore({ ...store, token: data.access_token, email: data.email })
						alert("Success")
					} else {
						console.log("Token not received", data);
					}
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			signUpPartner: async (email, password, name, typeOfServices, premium) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/register_partner`,
						{
							method: 'POST',
							body: JSON.stringify({ email, password, name, typeOfServices, premium }),
							headers: { "Content-Type": "application/json" }
						});
					if (!response.ok) {
						const errorData = await response.json();
						alert("Error", errorData);
						return false;
					}
					const data = await response.json();
					if (data.access_token) {
						sessionStorage.getItem("token", data.access_token);
						sessionStorage.getItem("email", data.email);
						setStore({ ...store, token: data.access_token, partner: data.partner })
						alert("Success")
						return true;
					} else {
						console.log("Token not received", data);
					}
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			logIn: async (email, password) => {
				const store = getStore();
				try {
					// fetching data from the backend
					const response = await fetch(`${process.env.BACKEND_URL}/api/log_in`, {
						method: 'POST',
						body: JSON.stringify({ email, password }),
						headers: { "Content-Type": "application/json" }
					});
					const data = await response.json();
					if (data.token) {
						//guardar info token en sessionStorage
						sessionStorage.setItem("token", data.token)
						sessionStorage.setItem("email", data.email)
						setStore({ ...store, token: data.token, email: data.email })
					} else {
						console.log("Token not received", data)
					}
				} catch (error) {
					console.log("Error loading message from backend", error);

				}
			},
			logOut: () => {
				const store = getStore();
				sessionStorage.removeItem("token")
				setStore({ ...store, token: '', email: '' })
			},
			resetPassword: async (email, password) => {
				const store = getStore();
				try {
					// fetching data from the backend
					const response = await fetch(`${process.env.BACKEND_URL}/api/resetPassword`, {
						method: 'PUT',
						body: JSON.stringify({ email, password }),
						headers: { "Content-Type": "application/json" }
					});
					const data = await response.json();
					if (data.ok) {
						alert("Password was reset succesfully")
					}
				} catch (error) {
					console.log("An error ocurred when updating your password", error);

				}
			}
		}
	}
}

export default getState;
