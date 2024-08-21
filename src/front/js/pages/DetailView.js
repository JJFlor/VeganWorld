import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailView = () => {
    const { store } = useContext(Context);
    const { id } = useParams();
    const [product, setProduct] = useState(store.products || []);

    useEffect(() => {
        // Buscar el producto en la lista del store según el ID
        const foundProduct = store.products.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
    }, [id, store.products]);

    if (!product) {
        return <div>Loading...</div>; // Mostrar un mensaje mientras se carga el producto
    }

    return (
        <div className="container d-flex justify-content-center pt-3">
            <div className="d-flex my-5">
                <div className="row">
                    <div className="col">
                        <img src={product.image_url || "https://dummyimage.com/200x200/000/fff"} className="img-thumbnail imgDetail" alt={product.product_name} />
                    </div>


                    <div className="col details">
                        <h1 className="mb-5">{product.product_name}</h1>
                        <h2>${product.price}</h2>
                        <select defaultValue="Amount" className="form-select" aria-label="Default select example">
                            <option value="Amount">Amount</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <Link to="/" className="btn btnBuy mt-3">Buy Now</Link>
                        <h4 className="mt-4">Description</h4>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
