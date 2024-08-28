import React from 'react'
import JorgePic from "/workspaces/VeganWorld/src/front/img/redonda_jorge.png";
import "/workspaces/VeganWorld/src/front/styles/profileuser.css";
import { Footer } from '../component/Footer';
import { EditProfileModal } from '../component/EditProfileModal';

export const ProfileUser = () => {
    return (

        <div className="container-fluid">

            <h1 id="usuario_h1" className="profile_name_user text-center col-12">USERNAME</h1>

            <div className="profile_header d-flex-row">

                <img className="profile-pic" src={JorgePic} alt='..."'></img>
                <div className="form_container">
                    <form className="form_celdas">
                        <label htmlFor="inputAddress" className="form-label">Adress</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="" />
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="...@veganworld.com" />
                        <label className="form-label">Phone</label>
                        <input type="" className="form-control"></input>
                        <label className="form-label">About me</label>
                        <textarea row="30"></textarea>
                    </form>
                </div>


            </div>


            <EditProfileModal />

            <Footer />
        </div>

    )

}