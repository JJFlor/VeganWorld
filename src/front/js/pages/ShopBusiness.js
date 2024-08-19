import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ShopBusiness = () => {
    const [products, setProducts] = useState([]);
    const {store, actions} = useContext(Context)

    // Fetch products when the component mounts
    useEffect(() => {
        actions.getProducts()
    }, []);

    const handleDelete = (productId) => {
        fetch(`https://psychic-garbanzo-q7v9v97p6xj93x74p-3001.app.github.dev/api/products/${productId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    // Update the state by filtering out the deleted product
                    setProducts(products.filter(product => product.id !== productId));
                } else {
                    console.error('Failed to delete product');
                }
            })
            .catch(error => console.error('Error deleting product:', error));
    };

    const handleClick = (prod) =>{
        actions.setProductEdit(prod)
    }

    return (
        <div className="container">
            <h1 className="text-center my-5">Shop</h1>

            <div className="d-flex my-5 ms-4">
                <div>
                    <span>filter by:</span>
                    <a className="btn btnSort m-2">New</a>
                    <a className="btn btnSort m-2">Price Ascending</a>
                    <a className="btn btnSort m-2">Price Descending</a>
                </div>
                <div className="btnAddContainer">
                    <Link to="/add_product" className="btn btnAddProduct m-2">Add Product</Link>
                </div>
            </div>

            <div className="contCards">
                <div className="row">
                    {store.products?.map((product) => (
                        <div className="col-4 productsCard my-3" key={product.id}>
                            <div className="card" style={{ minWidth: "16rem" }}>
                                <img src="https://dummyimage.com/200x200/000/fff" className="card-img-top img-thumbnail" alt={product.product_name} />
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
