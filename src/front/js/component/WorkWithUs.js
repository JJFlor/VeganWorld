import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "/workspaces/VeganWorld/src/front/styles/workwithus.css";
import { Footer } from "/workspaces/VeganWorld/src/front/js/component/Footer.js";

export const WorkWithUs = () => {


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

                <h2 className="titulo_work text-center">Work with us!</h2>

                <form ref={form} onSubmit={sendEmail} className="carta_form form-control card flex-center-column">

                    <input className="mt-2 mb-2" type="text" placeholder="Full Name" name='user_name' required />
                    <input className="mt-2 mb-2" type="email" placeholder="Email" name='user_email' required />
                    <input className="mt-2 mb-2" type="file" placeholder="CV or Portfolio" name="upload_pdf" accept=".pdf,.xls" required />


                    <button className="boton_submit btn btn-primary mt-2 mb-2" type="submit">Send CV/Portfolio</button>
                </form>
            </div>

            <div className="fixed-bottom">
                <Footer />
            </div>
        </div>

    )

}