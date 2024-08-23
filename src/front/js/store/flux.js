const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: localStorage.getItem("token") || null,
			email: localStorage.getItem("email") || null,
			partnerInfo: JSON.parse(localStorage.getItem("partner")) || null,
			premiumPartners: JSON.parse(localStorage.getItem("premiumPartners")) || [],
			premiumPartnersFiltered: null,
			partnersWithPremiumIcon: null,
			user: JSON.parse(localStorage.getItem("user")) || null

		},
		actions: {


			setProducts: (newProducts) => {
				setStore({ products: newProducts });
			},


			setProductEdit: (item) => {
				setStore({ productEdit: item });
			},

			getProducts: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/products');
					const data = await response.json();
					setStore({ products: data });
					return data;
				} catch (error) {
					console.error('Error fetching products:', error);
				}
			},

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
						localStorage.getItem("token", data.access_token);
						localStorage.getItem("email", data.user.email);
						setStore({ ...store, token: data.access_token, email: data.user.email, user: data.user })
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
						localStorage.getItem("token", data.access_token);
						localStorage.getItem("email", data.email);
						setStore({ ...store, token: data.access_token, partner: data.partner,  user: data.user  })
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
						//guardar info token en localStorage
						localStorage.setItem("token", data.token)
						localStorage.setItem("email", data.user.email)
						localStorage.setItem("user", JSON.stringify(data.user)); // Guardar la información del usuario
						setStore({ ...store, token: data.token, email: data.user.email, user: data.user, partner: data.user.partner? data.user.partner : null }) // Actualizar el store con la información del usuario
						return data.user.partner
					} else {
						console.log("Token not received", data)
					}
				} catch (error) {
					console.log("Log in failed", error);

				}
			},
			logOut: () => {
				const store = getStore();
				// Limpiar el estado del usuario y remover datos del localStorage
				localStorage.removeItem("token");
				localStorage.removeItem("email");
				localStorage.removeItem("user");
				setStore({ ...store, token: null, email: null, user: null }); // Actualizar el store para reflejar el estado de no autenticado
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
			},
			getPartnerInfo: async (name, typeOfServices, premium) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/getPartnerInfo`,
						{
							method: 'GET',
							body: JSON.stringify({ name, typeOfServices, premium }),
							headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("token") }
						});
					if (!response.ok) {
						const errorData = await response.json();
						alert("Error", errorData);
					}
					const data = await response.json();
					if (data.partnerInfo) {
						localStorage.setItem("partner", JSON.stringify(data.partnerInfo))
						setStore({ partner: data.partnerInfo })
					} else {
						console.log("PartnerInfo not received", data)
					}
				} catch (error) {
					console.log("Loading partner info failed", error);

				}
			},
			getAllPartnersInfo: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/getAllPartnersInfo`,
						{
							method: 'GET',
							headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("token") }
						});
					if (!response.ok) {
						const errorData = await response.json();
						alert("Error", errorData);
					}
					const data = await response.json();
					console.log(data);
					if (data.partners) {
						localStorage.setItem("premiumPartners", JSON.stringify(data.partners));
						setStore({ premiumPartners: data.partners });
					} else {
						console.log("Premium partners info not received", data);
					}
				} catch (error) {
					console.log("Loading premium partners info failed", error);

				}
			},
			setCathegoryFilter: (typeOfServices) => {
				const store = getStore();
				const filteredPartners = store.premiumPartners.filter(partner => partner.type_of_services == typeOfServices);
				console.log(filteredPartners)
				setStore({ ...store, premiumPartnersFiltered: filteredPartners });
			},
			showPremiumIcon: (premium) => {
				const store = getStore();
				const havePremiumIcon = store.premiumPartners.some(partner => partner.premium === premium);
				setStore({ ...store, partnersWithPremiumIcon: havePremiumIcon });
			},
			setFilteredPartnerNull: () => {
				const store = getStore();
				setStore({ ...store, premiumPartnersFiltered: null });
			}
		}
	}
}

export default getState;
