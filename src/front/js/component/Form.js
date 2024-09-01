import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import "/workspaces/VeganWorld/src/front/styles/form.css"

export function Form() {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({
    name: '',
    typeOfServices: '',
    email: '',
    telephone: '',
    address: '',
    aboutUs: ''
  });

  useEffect(() => {
    console.log(store.partnerInfo?.name);

  }, [store.partnerInfo])

  useEffect(() => {


    if (store.partnerInfo) {
      setFormData({
        name: store.partnerInfo.name,
        typeOfServices: store.partnerInfo.type_of_services,
        email: store.partnerInfo.email,
        phone: store.partnerInfo.phone,
        address: store.partnerInfo.address,
        aboutUs: store.partnerInfo.about_us
      })
    } else {
      setFormData({
        name: store.user.name,
        email: store.user.email,
        phone: store.user.phone,
        address: store.user.address,
        aboutUs: store.user.about_us
      });
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.editInfo(formData)
    console.log('Form Data Submitted:', formData);
  };


  return (

    <form onSubmit={handleSubmit}>

      <div className="col-md-12">
        <label htmlFor="inputName" className="form-label">Name</label>
        <input type="text" name="name" className="form-control" id="inputName" placeholder="Name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="col-md-12">
        {store.partnerInfo ? (<div>
          <label htmlFor="inputName" className="form-label">Type of service</label>
          <input type="text" name="typeOfServices" className="form-control" id="inputName" placeholder="typeOfServices" value={formData.typeOfServices} onChange={handleChange} />
        </div>
        )
          :
          null}

      </div>

      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" value={formData.email} onChange={handleChange} />
      </div>

      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <input type="text" name="address" className="form-control" id="inputAddress" placeholder="Your Adress" value={formData.address} onChange={handleChange} />
      </div>

      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Phone</label>
        <input type="text" name="phone" className="form-control" id="inputAddress" placeholder="Your phone" value={formData.phone} onChange={handleChange} />
      </div>

      <div className="col-12">

        {store.partnerInfo ? (<div>
          <label htmlFor="inputAddress" className="form-label">About us</label>
          <input type="text" name="aboutUs" className="form-control" id="inputAddress" placeholder="About us" value={formData.aboutUs} onChange={handleChange} />
        </div>
        )
          :
          null}


      </div>

      <div className="row">

        <div className="col-md-8">
          <button type="submit" className="boton_form-edit btn btn-success">Save Changes</button>
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