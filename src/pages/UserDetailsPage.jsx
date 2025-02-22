import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../UserDetailsPage.css";

const UserDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search") || sessionStorage.getItem("searchTerm") || "";


  if (!user) {
    return <p>User details not available</p>;
  }

  return (
    <div className="user-details-container">
      <div className="user-header">
        <h2>{user.firstName} {user.maidenName} {user.lastName}</h2>
        <img src={user.image} alt="User" className="user-image-large" />
      </div>

      <div className="details-grid">
        <div className="details-section">
          <h3>Personal Info</h3>
          {/* <p><strong>Name:</strong> {user.firstName} {user.maidenName} {user.lastName}</p> */}
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Birth Date:</strong> {user.birthDate}</p>
          <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
          <p><strong>Height:</strong> {user.height} cm</p>
          <p><strong>Weight:</strong> {user.weight} kg</p>
          <p><strong>Eye Color:</strong> {user.eyeColor}</p>
          <p><strong>Hair:</strong> {user.hair.color}, {user.hair.type}</p>
        </div>

        <div className="details-section">
          <h3>Contact Info</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address: </strong>{user.address.address}, {user.address.city}, {user.address.state}, {user.address.country}</p>
          <h3>Company Info</h3>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>Department:</strong> {user.company.department}</p>
          <p><strong>Title:</strong> {user.company.title}</p>
        </div>


        <div className="details-section">
          <h3>Bank Details</h3>
          <p><strong>Card Type:</strong> {user.bank.cardType}</p>
          <p><strong>Card Number:</strong> {user.bank.cardNumber}</p>
          <p><strong>Card Expiry:</strong> {user.bank.cardExpire}</p>
          <p><strong>IBAN:</strong> {user.bank.iban}</p>
        </div>

        <div className="details-section">
          <h3>Crypto Wallet</h3>
          <p><strong>Coin:</strong> {user.crypto.coin}</p>
          <p><strong>Wallet Address:</strong> {user.crypto.wallet}</p>
          <p><strong>Network:</strong> {user.crypto.network}</p>
        </div>
      </div>

      <button className="back-button" onClick={() => navigate(`/?search=${searchTerm}`)}>
        Back to Results
      </button>
    </div>
  );
};

export default UserDetailsPage;
