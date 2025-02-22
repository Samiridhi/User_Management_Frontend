import React from "react";
import { TextField, Button } from "@mui/material";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px",
      color: "white",
      fontWeight: "normal",
      textTransform: "none",
      borderRadius: "10px",
      padding: "10px 20px",
      boxShadow: "0px 4px 5px rgba(0,0,0,0.2)",
      transition: "0.3s",
      "&:hover": {
        background: "linear-gradient(135deg,rgb(127, 142, 173) 30%,rgb(183, 191, 202) 90%)",
        transform: "scale(1.05)",
      }, }}>
      <TextField
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        label="Search by first name, last name, or SSN..."
      />
      <Button onClick={() => onSearch(searchTerm)} variant="contained" color="primary" style={{ marginLeft: "10px" }}>
        <FaSearch />
      </Button>
    </div>
  );
};

export default SearchBar;
