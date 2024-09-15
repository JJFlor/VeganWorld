import React, { useState } from 'react';
import { Form } from '/workspaces/VeganWorld/src/front/js/component/Form.js';
import "/src/front/styles/editprofilemodal.css";
import { FaUserEdit } from "react-icons/fa";


export function EditProfileModal() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div>
            <button className="botonEdit" onClick={toggleModal} style={{ cursor: 'pointer' }}>
                <FaUserEdit />  Edit Profile
            </button>


            {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content bg-transparent text-dark">
                            <span className="close-button" onClick={toggleModal}>&times;</span>
                                <Form />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}