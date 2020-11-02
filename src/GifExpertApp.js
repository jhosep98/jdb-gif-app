import React, { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Naruto",
    "One Piece",
  ]);
  const handleAdd = () => {
    setCategories((cats) => [...cats, "hunterxhunter"]);
  };
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
