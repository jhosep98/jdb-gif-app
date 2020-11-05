import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);
  return (
    <ThemeProvider theme={theme}>
      <Title>JdbGifApp</Title>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </ThemeProvider>
  );
};

export default GifExpertApp;
