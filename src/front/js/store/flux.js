const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			setProducts: (newProducts) => {
				setStore({ products: newProducts });
			},
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

