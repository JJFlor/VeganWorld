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

    <form onSubmit={handleSubmit}>

      <div className="col-md-12">
        <label htmlFor="inputName" className="form-label">Name</label>
        <input type="text" className="form-control" id="inputName" placeholder="Name" value={formData.name} onChange={handleChange} />
      </div>

      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={formData.email} onChange={handleChange}/>
      </div>

      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Your Adress" value={formData.address} onChange={handleChange}/>
      </div>

      <div className="row">

        <div className="col-md-8">
          <button type="submit" className="boton_form-edit btn btn-success" onClick={()=> handleSubmit(e)}>Save Changes</button>
        </div>

        <div className="col-md-4">
          <button type="submit" className="boton_form-cancel btn btn-warning" onClick={() => setFormData({ name: '', email: '', telephone: '', address: '', aboutMe: '' })}>Cancel</button>
        </div>


        {/* <div className="col-md-4">
          <button type="submit" className="boton_form-delete btn btn-danger btn-sm">Delete Account</button>
        </div> */}

      </div>

    </form>

  );
}