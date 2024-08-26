import React from 'react';
import "/workspaces/VeganWorld/src/front/styles/contactus.css";

export const ContactUs = () => {

  return (

    <div>

        <div className="container-fluid d-flex-column">
            <h2 className="titulo_contact text-center mt-4 mb-4">Contact Us</h2>
            <form className="carta form-control card flex-center-column">
                <input className="mt-2 mb-2" type="text" placeholder="Full Name" name='user_name'required/>
                <input className="mt-2 mb-2" type="email" placeholder="Email" name='user_email' required/>
                <input className="mt-2 mb-2" type="text" placeholder="Subject" name='subject' required/>
                <textarea className="mt-2 mb-2" name="message" cols="30" rows="10"></textarea>
                <button className="btn btn-primary mt-2 mb-2" type="submit">Send Message</button>
            </form>
        </div>

    </div>

  )

}