import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/workspaces/VeganWorld/src/front/styles/addoffer.css";
import fondoShop1 from "/workspaces/VeganWorld/src/front/img/fondoShop1.jpg"

export const AddProduct = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'lly8mtlh');

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/dulhrrkqi/image/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            return data.url;
        } catch (error) {
            console.error('Failed to upload image:', error);
            return '';
        }
    };

    const handleSave = async () => {
        if (!productName || !price || !description) {
            alert("Please fill in all fields.");
            return;
        }

        setIsLoading(true);

        let imageUrl = '';
        if (imageFile) {
            imageUrl = await uploadImage(imageFile);
            if (!imageUrl) {
                alert("Failed to upload image. Please try again.");
                setIsLoading(false);
                return;
            }
        }

        try {
            const token = localStorage.getItem('token');
            const decodedToken = jwtDecode(token); // Decodifica el token
            console.log(decodedToken); // Verifica el contenido del token decodificado
            const userId = decodedToken.sub; // Usar 'sub' en lugar de 'user_id'

            const newProduct = {
                product_name: productName,
                price: parseFloat(price),
                description: description,
                image_url: imageUrl,
                user_id: userId // Incluye el ID del usuario en los datos del producto
            };

            console.log(newProduct);

            const response = await fetch(process.env.BACKEND_URL + '/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newProduct),
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
        <div className="container-contAdd">

            <div id="banner-shop" className="text-center">
                <Link to="/shop_client">
                    <button className="boton-shopnow btn btnGoShop">SHOP NOW</button>
                </Link>
            </div>


            <div className="contFormAdd p-5 mb-3">
                <h3 id="title-offer">Add new products here:</h3>
                <br></br>
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
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Image</label>
                    <div className="col-sm-10">
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            onChange={(e) => setImageFile(e.target.files[0])}
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
                    <button
                        className="btn btn-success mx-2 my-4"
                        onClick={handleSave}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Saving...' : 'Save'}
                    </button>
                    <Link to="/shop_business" className="btn btn-danger mx-2 my-4">Cancel</Link>
                </div>
            </div>
        </div>
    );
}
