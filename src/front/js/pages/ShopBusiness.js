import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { jwtDecode } from "jwt-decode";

export const ShopBusiness = () => {
    const { store, actions } = useContext(Context);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState("new");

    useEffect(() => {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.sub;
    
        actions.getProductsByUser().then((data) => {
            if (Array.isArray(data)) {
                setProducts(data);
                applyFilter(filter, data);
            } else {
                console.error('Expected an array of products but got:', data);
            }
        }).catch(error => {
            console.error('Failed to fetch and filter products:', error);
        });
    }, []);
    

    useEffect(() => {
        applyFilter(filter, products);
    }, [filter]); // Se ejecuta solo cuando cambia el filtro

    const applyFilter = (filterType, productsToFilter) => {
        let filtered = Array.isArray(productsToFilter) ? [...productsToFilter] : [];

        if (filterType === "new") {
            filtered = filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (filterType === "price-asc") {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (filterType === "price-desc") {
            filtered = filtered.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(filtered);
    };

    const handleDelete = (productId) => {
        actions.deleteProduct(productId).then((success) => {
            if (success) {
                // Filtra el producto eliminado de la lista de productos
                const updatedProducts = products.filter(product => product.id !== productId);
                setProducts(updatedProducts);
                applyFilter(filter, updatedProducts);
            } else {
                console.error('Failed to delete product');
            }
        }).catch(error => {
            console.error('Failed to delete product:', error);
        });
    };
   
    

    const handleClick = (prod) => {
        actions.setProductEdit(prod);
    }

    return (
        <div className="container">
            <h1 className="text-center my-5">My Products</h1>

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
                    {filteredProducts.map((product) => (
                        <div className="col productsCard my-3 mx-4" key={product.id}>
                            <div className="card" style={{ maxWidth: "17rem" }}>
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
