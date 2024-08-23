import React from 'react'
import JorgePic from '/workspaces/VeganWorld/src/front/img/jorge.png'
import "/workspaces/VeganWorld/src/front/styles/usuario.css";
import { Form } from "/workspaces/VeganWorld/src/front/js/component/Form.js";
import { Footer } from '../component/Footer';

export const ProfileUsuario = () => {
    return (

        <div>
        
        <div className="clearfix">
        <img src={JorgePic} className="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>

        <h1 id="usuario_h1" className="display-4 fw-bold text-body-emphasis">Name</h1>

        <div id="usuario_p_background" className="col-12 mx-auto">
            <h2 id="usuario_h2" className="text-bold">About me :</h2>
        </div>

        <p>
            As you can see the paragraphs gracefully wrap around the floated image. 
            Now imagine how this would look with some actual content in here, 
            rather than just this boring placeholder text that goes on and on, 
            but actually conveys no tangible information at. 
            It simply takes up space and should not really be read.
        </p>

        <p>
            And yet, here you are, still persevering in reading this placeholder text, 
            hoping for some more insights, or some hidden easter egg of content. 
            A joke, perhaps. Unfortunately, there's none of that here.
        </p>
        

        </div>








        <h2 id="usuario_h1"> Profile Info :</h2>

        <Form />

        <Footer />


        </div>

    )

}