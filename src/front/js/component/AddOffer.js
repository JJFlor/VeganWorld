import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/workspaces/VeganWorld/src/front/styles/addoffer.css";

export const AddOffer = () => {

    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null); // Estado para el archivo de imagen
    const navigate = useNavigate();

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


    const handleSave = async () => {
        let imageUrl = '';
        if (imageFile) {
            imageUrl = await uploadImage(imageFile);
            console.log('Image URL:', imageUrl); // Sube la imagen y obtiene la URL
        }

        const newProduct = {
            product_name: productName,
            price: parseFloat(price),
            description: description,
            image_url: imageUrl, // Incluye la URL de la imagen en los datos del producto
        };

        console.log('Product data:', newProduct); // Verifica los datos del producto

        try {
            const response = await fetch(process.env.BACKEND_URL + '/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
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


            <div className="contFormAdd p-5 mb-3">
                <h3 id="title-offer">ADD NEW OFFER:</h3>
                <br></br>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Discount</label>
                    <div className="col-sm-10">
                        <input type="percentage" className="form-control" id="discount" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Image</label>
                    <div className="col-sm-10">
                        <input type="file" className="form-control" id="image" onChange={(e) => setImageFile(e.target.files[0])} />
                    </div>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ minHeight: '200px' }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <label>Description</label>
                </div>
                <div className="btnsProduct">
                    <Link className="btn btnCancel mx-2 my-4">Cancel</Link>
                    <button className="btn btnSave mx-2 my-4" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    )

}

