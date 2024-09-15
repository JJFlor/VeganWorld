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

					if (!response.ok) {
						// Maneja el caso de una respuesta no exitosa
						console.error('Failed to fetch products:', response.statusText);
						return [];
					}

					const data = await response.json();
					if (!Array.isArray(data)) {
						console.error('Unexpected data format:', data);
						return [];
					}

					setStore({ products: data });
					return data;
				} catch (error) {
					console.error('Error fetching products:', error);
					setStore({ products: [] });
					return [];
				}
			},


			getProductsByUser: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/products/user', {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${store.token}`
						}
					});

					if (!response.ok) {
						console.error('Failed to fetch user products:', response.statusText);
						return [];
					}

					const data = await response.json();
					return Array.isArray(data) ? data : [];
				} catch (error) {
					console.error('Error fetching user products:', error);
					return [];
				}
			},

			deleteProduct: async (productId) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/products/${productId}`, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${store.token}` // Asegúrate de que el token esté incluido en la solicitud
						}
					});

					if (response.status === 401) {
						console.error('Unauthorized access - token might be invalid or expired.');
						return false; // Indica fracaso
					}

					if (!response.ok) {
						console.error('Error deleting product:', response.statusText);
						return false; // Indica fracaso
					}

					// Actualiza la lista de productos en el store eliminando el producto borrado
					const newProducts = store.products.filter(product => product.id !== productId);
					setStore({ products: newProducts });

					return true; // Indica éxito

				} catch (error) {
					console.error('Error deleting product:', error);
					return false; // Indica fracaso
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
					if (data.token) {
						localStorage.setItem("token", data.token);
						localStorage.setItem("email", data.user.email);
						setStore({ ...store, token: data.token, email: data.user.email, user: data.user })
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
					if (data.token) {
						localStorage.setItem("token", data.token);
						localStorage.setItem("email", data.email);
						console.log(data.partner)
						setStore({ ...store, token: data.token, partnerInfo: data.partner, user: data.user })
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
						setStore({ ...store, token: data.token, email: data.user.email, user: data.user, partnerInfo: data.user.partner ? data.user.partner : null })
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
			editInfo: async (dataUser) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/edit-info`, {
						method: 'PUT',
						body: JSON.stringify(dataUser),
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}` // Asegúrate de enviar el token si es necesario
						}
					});
			
					const data = await response.json();
					if (!response.ok) {
						console.error("Failed to edit info:", data.message || response.statusText);
						return { success: false, message: data.message || "Failed to edit info." };
					}
			
					// Actualiza el store con los nuevos datos
					setStore({ ...store, user: data.updatedUser || dataUser });
			
					alert("Info was edited successfully");
					return { success: true, message: "Info was edited successfully." };
				} catch (error) {
					console.error("An error occurred when updating your info:", error);
					return { success: false, message: "An error occurred when updating your info." };
				}
			},			
			getPartnerInfo: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/getPartnerInfo`,
						{
							method: 'GET',
							headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("token") }
						});
					if (!response.ok) {
						const errorData = await response.json();
						alert("Error", errorData);
					}
					const data = await response.json();
					if (data.partnerInfo) {
						localStorage.setItem("partner", JSON.stringify(data.partnerInfo))
						setStore({ partnerInfo: data.partnerInfo })
					} else {
						console.log("PartnerInfo not received", data)
					}
				} catch (error) {
					console.log("Loading partner info failed", error);

				}
			},
			getAllPremiumPartnersInfo: async () => {
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
						const premiums = data.partners.filter(partner => partner.premium == true)
						setStore({ premiumPartners: premiums });
					} else {
						console.log("Premium partners info not received", data);
					}
				} catch (error) {
					console.log("Loading premium partners info failed", error);

				}
			},
			getUserInfo: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/getUsersInfo`,
						{
							method: 'GET',
							headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem("token") }
						});
					if (!response.ok) {
						const errorData = await response.json();
						alert("Error", errorData);
					}
					const data = await response.json();
					if (data.user) {
						localStorage.setItem("user", JSON.stringify(data.user))
						setStore({ user: data.user })
					} else {
						console.log("User info not received", data)
					}
				} catch (error) {
					console.log("Loading user info failed", error);

				}
			},
			setCathegoryFilter: (typeOfServices) => {
				const store = getStore();
				const filteredPartners = store.premiumPartners.filter(partner => partner.type_of_services.toLowerCase() === typeOfServices.toLowerCase());
				console.log(filteredPartners);
				setStore({
					...store,
					premiumPartnersFiltered: filteredPartners,
					selectedCategory: typeOfServices.toLowerCase() // Guardar la categoría seleccionada en minúsculas
				});
			},

			showPremiumIcon: (premium) => {
				const store = getStore();
				const havePremiumIcon = store.premiumPartners.some(partner => partner.premium === premium);
				setStore({ ...store, partnersWithPremiumIcon: havePremiumIcon });
			},
			setFilteredPartnerNull: () => {
				const store = getStore();
				setStore({ ...store, premiumPartnersFiltered: null, selectedCategory: null });
			},
			updatePassword: async (password, token) => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/password_update", {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						},
						body: JSON.stringify({ password })
					})
					if (resp.status != 200) return false
					const data = await resp.json()
					console.log(data)
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			sendResetEmail: async (email) => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/check_mail", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ email })
					})
					if (resp.status != 200) return false
					const data = await resp.json()
					console.log(data)
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			checkAuth: async (token) => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/token", {
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						},
						method: 'GET',
					})
					if (resp.status != 200) return false
					const data = await resp.json()
					console.log(data)
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
		}
	}
}

export default getState;
