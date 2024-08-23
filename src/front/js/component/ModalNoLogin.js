import React from "react";
import { Link } from "react-router-dom";

export const ModalNoLogin = ({ onClose }) => {
    return (
        <div className="modal show" style={{ display: 'block' }} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Log In</h1>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Please log in to continue.
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <Link to="/Login" type="button" className="btn btnNavbar">Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
