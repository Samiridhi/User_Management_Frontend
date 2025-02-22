import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const RoleFilter = ({ roles, filterRole, setFilterRole }) => {
  return (
    <FormControl variant="outlined" style={{ minWidth: "150px", background: "linear-gradient(135deg,rgb(133, 169, 199) 30%,rgb(175, 193, 207) 90%)", }}>
      <InputLabel style = {{fontWeight: "normal",
          textTransform: "none",color: "black",}}>Role</InputLabel>
      <Select value={filterRole} onChange={(e) => setFilterRole(e.target.value)} label="Role">
        <MenuItem value="">All Roles</MenuItem>
        {roles.map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RoleFilter;
