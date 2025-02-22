import React from "react";
import { useNavigate } from "react-router-dom";
import "../UserDetailsModal.css";

const UserDetailsModal = ({ user, onClose }) => {
  const navigate = useNavigate();

  if (!user) return null;

  const handleMoreDetails = () => {
    navigate(`/user-details/${user.id}`, { state: { user } });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-left-align" onClick={(e) => e.stopPropagation()}>
        <h2>User Details</h2>
        <img src={user.image} alt="User" className="user-image" />

        <div className="details-section">
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>

        <div className="modal-buttons">
          <button onClick={handleMoreDetails}>More Details</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
