import React, { useState } from 'react';
import "/workspaces/VeganWorld/src/front/styles/form.css"

export function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    address: '',
    aboutMe: ''
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
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="...@veganworld.com" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Password</label>
        <input type="password" className="form-control" id="inputPassword4" placeholder="*******" />

      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Your Adress" />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">Website</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="...@veganworld.blogspot.com" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">Country</label>
        <select id="countries" className="form-select">
          <option>Choose...</option>
        </select>
      </div>
      <div className="col-md-2">
        <label htmlFor="inputPostal" className="form-label">Postal Code</label>
        <input type="text" className="form-control" id="inputPostal" />
      </div>

      <div className="col-1">
        <button type="submit" className="boton_form-edit btn btn-warning">Edit</button>
      </div>

      <div className="col-1">
        <button type="submit" className="boton_form-edit btn btn-success">Save</button>
      </div>

    </form>

  );
}