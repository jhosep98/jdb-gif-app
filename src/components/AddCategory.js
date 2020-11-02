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
      setCategories((cats) => [...cats, inputValue]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        label="Add-Category"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        fullWidth
      ></TextField>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
