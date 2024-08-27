import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ShopBusiness = () => {
    const { store, actions } = useContext(Context);
    const [products, setProducts] = useState(store.products || []);
    const [filter, setFilter] = useState("new"); // Estado para almacenar el filtro seleccionado


    useEffect(() => {
        actions.getProducts().then(() => {
            applyFilter(filter);
        });
    }, [store.products, filter]); // Dependencia en store.products y filter

    // Función para aplicar el filtro según la opción seleccionada
    const applyFilter = (filterType) => {
        let filteredProducts = Array.isArray(store.products) ? [...store.products] : [];      // Clonar los productos desde el store

        if (filterType === "new") {
            filteredProducts = filteredProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (filterType === "price-asc") {
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        } else if (filterType === "price-desc") {
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        }

        setProducts(filteredProducts); // Actualiza el estado local con los productos filtrados
    };

    const handleDelete = (productId) => {
        fetch(process.env.BACKEND_URL + `/api/products/${productId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    const updatedProducts = store.products.filter(product => product.id !== productId);
                    actions.setProducts(updatedProducts);
                    applyFilter(filter); // Aplicar el filtro nuevamente después de la eliminación
                } else {
                    console.error('Failed to delete product');
                }
            })
            .catch(error => console.error('Error deleting product:', error));
    };

    const handleClick = (prod) => {
        actions.setProductEdit(prod);
    }

    return (
        <div className="container">
            <h1 className="text-center my-5">Shop</h1>

            <div className="d-flex my-5 ms-4">
                <div>
                    <span>filter by:</span>
                    <button className="btn btnSort m-2" onClick={() => setFilter("new")}>New</button>
                    <button className="btn btnSort m-2" onClick={() => setFilter("price-asc")}>Price Ascending</button>
                    <button className="btn btnSort m-2" onClick={() => setFilter("price-desc")}>Price Descending</button>
                </div>
                <div className="btnAddContainer">
                    <Link to="/add_product" className="btn btnAddProduct m-2">Add Product</Link>
                </div>
            </div>

            <div className="contCards">
                <div className="row">
                    {products.map((product) => (
                        <div className="col productsCard my-3 mx-4" key={product.id}>
                            <div className="card" style={{ maxWidth: "17rem" }}>
                                {/* Usar product.image_url para mostrar la imagen subida */}
                                <img src={product.image_url || "https://dummyimage.com/200x200/000/fff"} className="card-img-top img-thumbnail imgProducts" alt={product.product_name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.product_name}</h5>
                                    <p className="card-text">Price: ${product.price}</p>
                                    <p className="card-text">{product.description}</p>
                                    <div className="btnsCards">
                                        <Link to={`/edit_product/${product.id}`} onClick={() => handleClick(product)} className="btn btnEdit mx-2">Edit</Link>
                                        <button className="btn btnDelete mx-2" onClick={() => handleDelete(product.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
