import React, { useState } from "react";
import PropTypes from "prop-types";

import { TextField } from "@material-ui/core";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="filled"
        label="Add-Category"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        color="primary"
        fullWidth
      ></TextField>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
