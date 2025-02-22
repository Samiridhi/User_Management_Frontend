import React from "react";
import { Button } from "@mui/material";

const SortButton = ({ sortOrder, onSort }) => {
  return (
    <Button onClick={onSort} variant="contained" color="primary">
      Sort by Age ({sortOrder})
    </Button>
  );
};

export default SortButton;
