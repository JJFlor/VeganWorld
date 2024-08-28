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
			user: JSON.parse(localStorage.getItem("user")) || null,
			products: []

		},
		actions: {


			setProducts: (newProducts) => {
				setStore({ products: newProducts });
			},


			setProductEdit: (item) => {
				setStore({ productEdit: item });
			},

			getProducts: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/products', {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${store.token}` // Asegúrate de que el token esté incluido en la solicitud
						}
					});

					if (response.status === 401) {
						console.error('Unauthorized access - token might be invalid or expired.');
						return;
					}

					const data = await response.json();
					setStore({ products: Array.isArray(data) ? data : [] });
					return data;
				} catch (error) {
					console.error('Error fetching products:', error);
					setStore({ products: [] });
				}
			},


			signUpUser: async (email, password, name, address, phone) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/register_user`,
						{
							method: 'POST',
							body: JSON.stringify({ email, password, name, address, phone }),
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
					} else {
						console.log("Token not received", data);
					}
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			signUpPartner: async (email, name, typeOfServices, premium, password, address, phone, aboutUs) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/register_partner`,
						{
							method: 'POST',
							body: JSON.stringify({ email, name, typeOfServices, premium, password, address, phone, aboutUs }),
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
						setStore({ ...store, token: data.access_token, partner: data.partner, user: data.user })
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
						setStore({ ...store, token: data.token, email: data.user.email, user: data.user, partner: data.user.partner ? data.user.partner : null })
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
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/resetPassword`, {
						method: 'PUT',
						body: JSON.stringify({ email, password }),
						headers: { "Content-Type": "application/json" }
					});

					if (!response.ok) {
						const errorData = await response.json();
						console.error("Failed to reset password:", errorData.message || response.statusText);
						return { success: false, message: errorData.message || "Failed to reset password." };
					}

					const data = await response.json();
					if (data.ok) {
						alert("Password was reset successfully");
						return { success: true, message: "Password was reset successfully." };
					} else {
						return { success: false, message: data.message || "Failed to reset password." };
					}

				} catch (error) {
					console.error("An error occurred when updating your password:", error);
					return { success: false, message: "An error occurred when updating your password." };
				}
			},
			getPartnerInfo: async (name, typeOfServices, premium, email, password, address, phone, aboutUs) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/getPartnerInfo`,
						{
							method: 'GET',
							body: JSON.stringify({ name, typeOfServices, premium, email, password, address, phone, aboutUs }),
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
			},
		}
	}
}

export default getState;
