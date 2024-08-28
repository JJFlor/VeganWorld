import React, { useState } from 'react';
import { FormFree } from '/workspaces/VeganWorld/src/front/js/component/FormFree.js';
import "/src/front/styles/editprofilemodal.css";

export function EditProfileUserModal() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div>
            <h3 className="titulo_h3_modaledit" onClick={toggleModal} style={{ cursor: 'pointer', color: 'blue' }}>
                EDIT INFO
            </h3>


            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={toggleModal}>&times;</span>
                        <div className="profile_form">
                            <FormFree />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}