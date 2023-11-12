"use client";
import React, { useState } from "react";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-button">
                    Close
                </button>
                {children}
            </div>
        </div>
    );
}
export default Modal;
