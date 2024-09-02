import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "/workspaces/VeganWorld/src/front/styles/shopclient.css"
import { Footer } from "/workspaces/VeganWorld/src/front/js/component/Footer.js"

export const ShopClient = () => {
    const { store, actions } = useContext(Context);
    const [products, setProducts] = useState([]); // Inicializa el estado sin depender de store.products

    useEffect(() => {
        // Obtener los productos una sola vez al montar el componente
        actions.getProducts().then((data) => {
            setProducts(Array.isArray(data) ? data : []);
        });
    }, []); // Se ejecuta una sola vez al montar el componente

    const sortProducts = (criteria) => {
        let sortedProducts = [...products];
        if (criteria === 'new') {
            sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Asumiendo que los productos tienen un campo 'date'
        } else if (criteria === 'price_asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (criteria === 'price_desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setProducts(sortedProducts);
    };

    return (
        <div className="container-fluid border-box">
            <h1 className="titulo-shop-client text-center my-5">Vegan World SHOP</h1>

            <div className="contenedor-botones-shop-client container-fluid text-center my-5 ms-4">
                <div id="banner-shop" className="text-center">
                    <div className="textInvite">Verified Vegan Products & Services</div>
                    <h3 class="txtDiscount">Use code: 4GEEKS and get 20% discount</h3>
                    <div class="container">
                        <button className="boton-newproduct btn btnSort m-4" onClick={() => sortProducts('new')}>New Products</button>
                        <button className="boton-sortby-asc btn btnSort m-4" onClick={() => sortProducts('price_asc')}>Sort by: Price Ascending</button>
                        <button className="boton-sortby-des btn btnSort m-4" onClick={() => sortProducts('price_desc')}>Sort by: Price Descending</button>
                    </div>
                </div>
            </div>

            <div className="contCards">
                <div className="row">
                    {products.map((product) => (
                        <div className="col productsCard my-3 mx-4" key={product.id}>
                            <div className="card" style={{ maxWidth: "17rem" }}>
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

            <div className="fixed-bottom">
                <Footer />
            </div>

        </div>
    );
}
