import React, { useState } from 'react';
import { Form } from '/workspaces/VeganWorld/src/front/js/component/Form.js';
import "/src/front/styles/editprofilemodal.css";
import { FaUserEdit } from "react-icons/fa";

export function EditProfileModal() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div>
            <h3 className="titulo_h3_modaledit" onClick={toggleModal} style={{ cursor: 'pointer' }}>
                <FaUserEdit />  Edit
            </h3>


            {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <span className="close-button" onClick={toggleModal}>&times;</span>
                            <div className="profile_form">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
            );
}