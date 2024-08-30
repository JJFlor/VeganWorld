import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "/workspaces/VeganWorld/src/front/styles/contactus.css";
import { Footer } from "/workspaces/VeganWorld/src/front/js/component/Footer.js";

export const ContactUs = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5u9siwm', 'template_j7ov9af', form.current, {
        publicKey: 'L1zvbfVOr8BkGDo0s',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    e.target.reset();
  };



  return (

    <div>

      <div className="cuerpo container-fluid d-flex-column">
        <h2 className="titulo_contact text-center mt-4 mb-4">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="carta_form form-control card flex-center-column">
          <input className="mt-2 mb-2" type="text" placeholder="Full Name" name='user_name' required />
          <input className="mt-2 mb-2" type="email" placeholder="Email" name='user_email' required />
          <input className="mt-2 mb-2" type="text" placeholder="Subject" name='subject' required />
          <textarea className="mt-2 mb-2" name="message" cols="30" rows="10"></textarea>
          <button className="boton_submit btn btn-primary mt-2 mb-2" type="submit">Send Message</button>
        </form>
      </div>

      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>

  )

}