import React, { useState } from 'react';
import { Form } from '/workspaces/VeganWorld/src/front/js/component/Form.js';
import "/src/front/styles/editprofilemodal.css";

export function EditProfileModal() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div>
            <h3 className="titulo_h3_modaledit" onClick={toggleModal} style={{ cursor: 'pointer', color: 'blue' }}>
                EDIT PROFILE INFO
            </h3>


            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={toggleModal}>&times;</span>
                        <div className="profile_form">
                            <Form />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}