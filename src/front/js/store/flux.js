const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: localStorage.getItem("token") || null,
			email: localStorage.getItem("email") || null,
			partnerInfo: JSON.parse(localStorage.getItem("partner")) || null,
			premiumPartners: JSON.parse(localStorage.getItem("premiumPartners")) || null,
			premiumPartnersFiltered: null

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


			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	}
}

export default getState;

