import React, { useState } from 'react';
import "/workspaces/VeganWorld/src/front/styles/form.css"

export function FormFree() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, like sending data to a server
        console.log('Form Data Submitted:', formData);
    };


    return (

        <form>

            <div className="col-md-12">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" placeholder="Change Name" />
            </div>

            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="...@veganworld.com" />
            </div>

            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Your Adress" />
            </div>


            <div className="row">

                <div className="col-md-4">
                    <button type="submit" className="boton_form-edit btn btn-success">Save</button>
                </div>

                <div className="col-md-4">
                    <button type="submit" className="boton_form-cancel btn btn-warning">Cancel</button>
                </div>


                <div className="col-md-4">
                    <button type="submit" className="boton_form-delete btn btn-danger btn-sm">Delete Account</button>

                </div>

            </div>

        </form>

    );
}