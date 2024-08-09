import React from 'react';
import '../../assets/css/ConfirmationModal.css'

const ConfirmationModal = ({ show, onConfirm, onCancel, message }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{message}</h3>
        <div className="modal-buttons">
          <button className="btn btn-confirm" onClick={onConfirm}>Confirm</button>
          <button className="btn btn-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
