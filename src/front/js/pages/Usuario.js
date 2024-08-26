import React from 'react'
import JorgePic from '/workspaces/VeganWorld/src/front/img/jorge.png'
import "/workspaces/VeganWorld/src/front/styles/profileusuario.css";
import { Form } from "/workspaces/VeganWorld/src/front/js/component/Form.js";
import { Footer } from '../component/Footer';

export const ProfileUsuario = () => {
    return (

        <div className="container-fluid">

            <h1 id="usuario_h1" className="profile_name text-center col-12">N A M E</h1>
            <div className="profile_header">

                <img src={JorgePic} className="profile_img" alt="..." />


                <div id="usuario_p_background" className="profile_aboutme">
                    <h3 id="usuario_h3" className="text-bold">About me :</h3>

                    <p className="profile_aboutme-texto">
                        As you can see the paragraphs gracefully wrap around the floated image.
                        Now imagine how this would look with some actual content in here,
                        rather than just this boring placeholder text that goes on and on,
                        but actually conveys no tangible information at.
                        It simply takes up space and should not really be read.
                        <br></br>
                        <br></br>
                        And yet, here you are, still persevering in reading this placeholder text,
                        hoping for some more insights, or some hidden easter egg of content.
                        A joke, perhaps. Unfortunately, there's none of that here.
                    </p>

                </div>

            </div>


            <div className="profile_body">

                <div className="profile_favoritos container-fluid d-flex-column">

                    <h3 id="profile_h3_fav">FAVOURITES</h3>

                    <div className="profile_favoritos_coments">

                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                                <h2 className="fw-normal">Heading</h2>
                                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                                <p><a className="btn btn-secondary" href="#">View details »</a></p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                                <h2 className="fw-normal">Heading</h2>
                                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                                <p><a className="btn btn-secondary" href="#">View details »</a></p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                                <h2 className="fw-normal">Heading</h2>
                                <p>And lastly this, the third column of representative placeholder content.</p>
                                <p><a className="btn btn-secondary" href="#">View details »</a></p>
                            </div>
                        </div>
                    </div>

                </div>

                <h3 id="usuario_h3_info"> PROFILE INFO</h3>

                <div className="profile_form">
                    <Form />
                </div>

                <div className="boton_delete d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-danger btn-lg px-4 align-self-center">DELETE ACCOUNT</button>
                </div>

            </div>




            <Footer />
        </div>

    )
};
