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
    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
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
