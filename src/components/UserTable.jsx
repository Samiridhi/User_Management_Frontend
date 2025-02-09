import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, CardContent } from "@mui/material";

const UserTable = ({ users, displayedAttributes, flattenObject }) => {
  const formatCellValue = (user, attribute) => {
    const flatUser = flattenObject(user);
    return flatUser.hasOwnProperty(attribute) ? flatUser[attribute] || "" : "";
  };

  return (
    <CardContent style={{ marginTop: "20px", overflowX: "auto" }}>
      {users.length > 0 && (
        <Table>
          <TableHead>
            <TableRow>
              {displayedAttributes.map((attribute) => (
                <TableCell key={attribute} style={{ whiteSpace: "nowrap" }}>
                  {attribute.toUpperCase()}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                {displayedAttributes.map((attribute) => (
                  <TableCell key={attribute} style={{ whiteSpace: "nowrap" }}>
                    {formatCellValue(user, attribute)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </CardContent>
  );
};

export default UserTable;
