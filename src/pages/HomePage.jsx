// eslint-disable-next-line react-hooks/exhaustive-deps

import React, { useState, useEffect } from "react";
import apiService from "../services/apiService";
import SearchBar from "../components/SearchBar";
import SortButton from "../components/SortButton";
import RoleFilter from "../components/RoleFilter";
import AttributeSelector from "../components/AttributeSelector";
import UserTable from "../components/UserTable";
import { Card, Typography } from "@mui/material";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterRole, setFilterRole] = useState("");
  const [roles, setRoles] = useState([]);
  const [displayedAttributes, setDisplayedAttributes] = useState([
    "id",
    "firstName",
    "lastName",
    "role",
    "email",
    "age",
    "ssn",
  ]);
  const [availableAttributes, setAvailableAttributes] = useState([]);

  const flattenObject = (obj, parentKey = "", result = {}) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
          flattenObject(obj[key], newKey, result);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  };

  useEffect(() => {
    const uniqueRoles = [...new Set(users.map((user) => user.role))];
    setRoles(uniqueRoles);

    if (users.length > 0) {
      const allAttributes = new Set();
      users.forEach((user) => {
        const flatUser = flattenObject(user);
        Object.keys(flatUser).forEach((attr) => allAttributes.add(attr));
      });

      setAvailableAttributes(Array.from(allAttributes));
    }
  }, [users]);

  const handleSearch = async (term) => {
    if (term.length < 3) {
      alert("Please enter at least 3 characters to search.");
      return;
    }

    setIsSearching(true);
    setErrorMessage("");
    setUsers([]);

    try {
      const result = await apiService.searchUsers(term);
      if (result.length === 0) {
        setErrorMessage("No users found matching your search criteria.");
      } else {
        setUsers(result);
      }
    } catch (error) {
      console.error("Search failed:", error);
      setErrorMessage("Error fetching users. Please try again later.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleSort = () => {
    const sortedUsers = [...users].sort((a, b) => (sortOrder === "asc" ? a.age - b.age : b.age - a.age));
    setUsers(sortedUsers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleAttributeSelection = (event) => {
    const value = event.target.value;
    setDisplayedAttributes(typeof value === "string" ? value.split(",") : value);
  };

  const filteredUsers = filterRole ? users.filter((user) => user.role === filterRole) : users;

  return (
    <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}>
      <Card style={{ padding: "20px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          USERS
        </Typography>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
          <SortButton sortOrder={sortOrder} onSort={handleSort} />
          <RoleFilter roles={roles} filterRole={filterRole} setFilterRole={setFilterRole} />
        </div>
        <AttributeSelector
          availableAttributes={availableAttributes}
          displayedAttributes={displayedAttributes}
          handleAttributeSelection={handleAttributeSelection}
        />
        {isSearching && <Typography color="primary">Searching...</Typography>}
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        <UserTable users={filteredUsers} displayedAttributes={displayedAttributes} flattenObject={flattenObject} />
      </Card>
    </div>
  );
};

export default HomePage;
