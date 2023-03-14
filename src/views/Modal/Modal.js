import React from 'react';
import { Button } from 'primereact/button';
import "./Modal.css"

const Modal = ({toggleModal}) => {
    return (
        <div id="modal">
            <div className="modal-content">
                <Button onClick={toggleModal} label="Toggle Modal"/>
                <h3>test modale</h3>
                <p>Lorem ipsum dolor sit amet, consectetur, et, sed do eiusmod tempor incididunt ut labore</p>
            </div>
        </div>
    );
}

export default Modal;