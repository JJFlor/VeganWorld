import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditProduct = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams(); // Obtener el ID del producto desde la URL
    const navigate = useNavigate();

    // Estado local para los campos del producto
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado para mostrar el estado de carga

    // Inicializar el estado local cuando el componente se monta
    useEffect(() => {
        if (store.productEdit && store.productEdit.id === parseInt(id, 10)) {
            setProductName(store.productEdit.product_name || '');
            setPrice(store.productEdit.price || '');
            setDescription(store.productEdit.description || '');
        } else {
            // En caso de que el producto no esté en el store, podrías hacer una solicitud al backend para obtenerlo
            const fetchProduct = async () => {
                try {
                    const token = localStorage.getItem('token');
                    const response = await fetch(process.env.BACKEND_URL + `/api/products/${id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    if (response.ok) {
                        const product = await response.json();
                        setProductName(product.product_name);
                        setPrice(product.price);
                        setDescription(product.description);
                    } else {
                        console.error("Failed to fetch product");
                    }
                } catch (error) {
                    console.error("Error:", error);
                }
            };

            fetchProduct();
        }
    }, [store.productEdit, id]);

    const handleSave = async () => {
        if (!productName || !price || !description) {
            alert("Please fill in all fields.");
            return;
        }

        setIsLoading(true);

        const updatedProduct = {
            product_name: productName,
            price: parseFloat(price),
            description: description
        };

        try {
            const token = localStorage.getItem('token'); // Suponiendo que el token está almacenado en el localStorage
            const response = await fetch(process.env.BACKEND_URL + `/api/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Incluye el token de autenticación
                },
                body: JSON.stringify(updatedProduct),
            });

            if (response.ok) {
                navigate('/shop_business');
            } else {
                console.error("Failed to save product");
                alert("Failed to save product. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
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
                    <button
                        className="btn btnSave mx-2 my-4"
                        onClick={handleSave}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </div>
        </div>
    );
};


