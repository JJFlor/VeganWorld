import React from 'react'
import JorgePic from "/workspaces/VeganWorld/src/front/img/redonda_jorge.png";
import "/workspaces/VeganWorld/src/front/styles/profileuser.css";
import { Footer } from '../component/Footer';
import { EditProfileModal } from '../component/EditProfileModal';
import { Form } from "/workspaces/VeganWorld/src/front/js/component/Form.js"

export const ProfileUser = () => {
    return (

        <div className="container-fluid">

            <h1 id="usuario_h1" className="profile_name text-center col-12">USERNAME</h1>

            <div className="profile_header d-flex-row">

                <img className="profile-pic" src={JorgePic} alt='..."'></img>
                <div className="form_container">
                    <form className="form_celdas">
                        <label htmlFor="inputAddress" className="form-label">Adress</label>
                        <input disabled type="text" className="form-control" id="inputAddress" placeholder="" />
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input disabled type="email" className="form-control" id="inputEmail4" placeholder="...@veganworld.com" />
                        <label className="form-label">Phone</label>
                        <input disabled type="" className="form-control"></input>
                        <label className="form-label">About me</label>
                        <textarea disabled row="30"></textarea>
                    </form>
                </div>


            </div>


            <div className="profile_body">

                <div className="profile_favoritos container-fluid d-flex-column">

                    <div className="h3_cajita_h3">
                        <h3 id="profile_h3_fav">FAVOURITES</h3>
                    </div>
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

                <hr></hr>

            </div>

            <Form />
            <EditProfileModal />

            <Footer />
        </div>

    )

}