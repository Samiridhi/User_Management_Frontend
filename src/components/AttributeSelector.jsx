import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const AttributeSelector = ({ displayedAttributes, handleAttributeSelection, availableAttributes }) => {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => setOpen(!open);

  const handleToggle = (attribute) => {
    const updatedAttributes = displayedAttributes.includes(attribute)
      ? displayedAttributes.filter((attr) => attr !== attribute)
      : [...displayedAttributes, attribute];

    handleAttributeSelection({ target: { value: updatedAttributes } });
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(135deg,rgb(133, 169, 199) 30%,rgb(175, 193, 207) 90%)",
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
          },
        }}
        onClick={toggleDialog}
      >
        Select Attributes
      </Button>


      <Dialog open={open} onClose={toggleDialog} maxWidth="sm" fullWidth >
        <DialogTitle>Select Attributes</DialogTitle>
        <DialogContent>
          <FormGroup>
            {availableAttributes.map((attribute) => (
              <FormControlLabel
                key={attribute}
                control={<Checkbox checked={displayedAttributes.includes(attribute)} onChange={() => handleToggle(attribute)} />}
                label={attribute}
              />
            ))}

          </FormGroup>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AttributeSelector;
