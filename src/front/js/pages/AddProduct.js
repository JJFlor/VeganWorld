import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AddProduct = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null); // Estado para el archivo de imagen
    const [isLoading, setIsLoading] = useState(false); // Estado para mostrar el estado de carga
    const navigate = useNavigate();

    // Función para subir la imagen a Cloudinary
    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'lly8mtlh'); // Preset de Cloudinary

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/dulhrrkqi/image/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log('Cloudinary response:', data); // Verificar la respuesta de Cloudinary
            return data.url; // Devuelve la URL de la imagen subida
        } catch (error) {
            console.error('Failed to upload image:', error);
            return ''; // Devuelve una cadena vacía en caso de error
        }
    };

    // Función para manejar la guardado del producto
    const handleSave = async () => {
        if (!productName || !price || !description) {
            alert("Please fill in all fields.");
            return;
        }

        setIsLoading(true); // Indicar que el proceso de guardado está en curso

        let imageUrl = '';
        if (imageFile) {
            imageUrl = await uploadImage(imageFile);
            if (!imageUrl) {
                alert("Failed to upload image. Please try again.");
                setIsLoading(false);
                return;
            }
        }

        const newProduct = {
            product_name: productName,
            price: parseFloat(price),
            description: description,
            image_url: imageUrl, // Incluye la URL de la imagen en los datos del producto
        };

        console.log('Product data:', newProduct); // Verifica los datos del producto

        try {
            const token = localStorage.getItem('token'); // Suponiendo que el token está almacenado en el localStorage
            const response = await fetch(process.env.BACKEND_URL + '/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Incluye el token de autenticación
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
            setIsLoading(false); // Finaliza el estado de carga
        }
    };

    return (
        <div className="container contAdd">
            <div className="text-center">
                <Link to="/shop_client">
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
}
