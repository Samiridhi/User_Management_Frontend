import React, { useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, CardContent } from "@mui/material";
import UserDetailModal from "./UserDetailModal"; // New modal component

const UserTable = ({ users, displayedAttributes, flattenObject }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <CardContent style={{ marginTop: "20px", overflowX: "auto" }}>
      {users.length > 0 && (
        <>
          <Table>
            <TableHead>
              <TableRow>
                {displayedAttributes.map((attribute) => (
                  <TableCell key={attribute} style={{ whiteSpace: "nowrap" }}>
                    <h4>{attribute === "image" ? "":
                    attribute.toUpperCase()
                    }</h4>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} onClick={() => handleRowClick(user)} style={{ cursor: "pointer" }}>
                  {displayedAttributes.map((attribute) => (
                    <TableCell key={attribute} style={{ whiteSpace: "nowrap" }}>
                      {attribute === "image" ? (
                        <img src={user.image} alt="User" className="user-image" style={{ width: 50, height: 50, borderRadius: "50%" }} />
                      ) : (
                        flattenObject(user)[attribute] || ""
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {selectedUser && (
            <UserDetailModal
              user={selectedUser}
              onClose={() => setSelectedUser(null)}
            />
          )}
        </>
      )}
    </CardContent>
  );
};

export default UserTable;
