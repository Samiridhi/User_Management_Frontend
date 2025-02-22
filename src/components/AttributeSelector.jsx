import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  Chip,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      borderRadius: "8px",
      padding: "10px",
    },
  },
};

const AttributeSelector = ({
  displayedAttributes,
  handleAttributeSelection,
  availableAttributes,
}) => {
  const formatAttributeName = (attribute) => {
    const parts = attribute.split(".");
    return parts.map((part) => part.toUpperCase()).join(" ");
  };

  const MANDATORY_ATTRIBUTES = ["image", "id", "firstName", "lastName", "email", "ssn", "age", "role"];

  const handleSelectionChange = (event) => {
    const selectedAttributes = event.target.value;
    // Ensure mandatory attributes are always included
    const updatedAttributes = Array.from(new Set([...MANDATORY_ATTRIBUTES, ...selectedAttributes]));
    handleAttributeSelection({ target: { value: updatedAttributes } });
  };

  return (
    <FormControl variant="outlined" fullWidth style={{ marginBottom: "20px" }}>
      {/* <InputLabel style={{ fontSize: "16px", color: "#555" }}>
        Select Attributes to Display
      </InputLabel> */}
      <Select
        multiple
        value={displayedAttributes}
        onChange={handleSelectionChange}
        // input={<OutlinedInput label="Select Attributes to Display" />}
        renderValue={(selected) => {
          if (selected.length === availableAttributes.length) {
            return "All Selected";
          }
          // if (selected.length > 5) {
          //   return `${selected.length} attributes selected`;
          // }
          return (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>

              <Chip

                label={formatAttributeName(`Display More Attributes`)}
                style={{ backgroundColor: "#ced2d6", fontWeight: "bold" }}
              />

            </div>
          );
        }}
        MenuProps={MenuProps}
        style={{ borderRadius: "8px", background: "#f9f9f9" }}
      >
        {availableAttributes.map((attribute) => (
          <MenuItem key={attribute} value={attribute}>
            <Checkbox
              checked={displayedAttributes.includes(attribute)}
              disabled={MANDATORY_ATTRIBUTES.includes(attribute)}
            />
            {formatAttributeName(attribute)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AttributeSelector;
