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
    <form className="usuario-form-fields" onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone Number: </label>
        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>About Me:</label>
        <textarea
          name="aboutMe"
          value={formData.aboutMe}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="usuario_boton-rate">Submit</button>
    </form>
  );
}
// Boton azul de edit profile habilita el formulario de edit profile