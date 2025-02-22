import React from "react";
import { Button } from "@mui/material";

const SortButton = ({ sortOrder, onSort }) => {
  return (
    <Button onClick={onSort} variant="contained"style={{background: "linear-gradient(135deg,rgb(133, 169, 199) 30%,rgb(175, 193, 207) 90%)",
      color: "white",
      fontWeight: "bold",
      textTransform: "none",
      borderRadius: "10px",
      padding: "10px 20px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      transition: "0.3s",
      "&:hover": {
        background: "linear-gradient(135deg,rgb(127, 142, 173) 30%,rgb(183, 191, 202) 90%)",
        transform: "scale(1.05)",
      },}}>
      Sort by Age ({sortOrder})
    </Button>
  );
};

export default SortButton;
