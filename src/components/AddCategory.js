import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hello World!");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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

export default AddCategory;
