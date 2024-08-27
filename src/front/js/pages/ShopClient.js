import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ShopClient = () => {
    const { store, actions } = useContext(Context);
    const [products, setProducts] = useState(store.products || []);


    useEffect(() => {
        actions.getProducts().then((data) => {
            setProducts(Array.isArray(data) ? data : []);
        });
    }, [store.products]);
    

    const sortProducts = (criteria) => {
        let sortedProducts = [...products];
        if (criteria === 'new') {
            sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Assuming products have a 'date' field
        } else if (criteria === 'price_asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (criteria === 'price_desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setProducts(sortedProducts);
    };

    return (
        <div className="container">
            <h1 className="text-center my-5">Shop</h1>

            <div className="my-5 ms-4">
                <button className="btn btnSort m-2" onClick={() => sortProducts('new')}>New</button>
                <button className="btn btnSort m-2" onClick={() => sortProducts('price_asc')}>Price Ascending</button>
                <button className="btn btnSort m-2" onClick={() => sortProducts('price_desc')}>Price Descending</button>
            </div>

            <div className="contCards">
                <div className="row">
                    {products.map((product) => (
                        <div className="col productsCard my-3 mx-4" key={product.id}>
                            <div className="card" style={{ maxWidth: "17rem" }}>
                                {/* Usar la URL de la imagen del producto si está disponible, de lo contrario usar una imagen de relleno */}
                                <img
                                    src={product.image_url || "https://dummyimage.com/200x200/000/fff"}
                                    className="card-img-top img-thumbnail imgProducts"
                                    alt={product.product_name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.product_name}</h5>
                                    <p className="card-text">Price: ${product.price}</p>
                                    <p className="card-text">{product.description}</p>
                                    <div className="btnsCards">
                                        <Link to="/detail_view" className="btn btnEdit mx-2">Buy</Link>
                                        <Link to={`/product_info/${product.id}`} className="btn btnDelete mx-2">Info</Link>
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
