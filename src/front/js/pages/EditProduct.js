import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditProduct = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate();

    // Local state for the product fields
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    // Initialize the local state when the component mounts
    useEffect(() => {
        if (store.productEdit) {
            setProductName(store.productEdit.product_name || '');
            setPrice(store.productEdit.price || '');
            setDescription(store.productEdit.description || '');
        }
    }, [store.productEdit]);

    const handleSave = async () => {
        const updatedProduct = {
            product_name: productName,
            price: price,
            description: description
        };

        try {
            const response = await fetch(process.env.BACKEND_URL + `/api/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });

            if (response.ok) {
                navigate('/shop_business');
            } else {
                console.error("Failed to save product");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="container contAdd">
            <div className="text-center">
                <Link to="/shop_business">
                    <span className="btn btnGoShop">Go Shop</span>
                </Link>
            </div>

            <div className="contFormAdd p-5 mb-3">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        style={{ minHeight: '200px' }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <label>Description</label>
                </div>
                <div className="btnsProduct">
                    <Link to="/shop_business" className="btn btnCancel mx-2 my-4">Cancel</Link>
                    <button className="btn btnSave mx-2 my-4" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};


