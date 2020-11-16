import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;
const ListaContainer = styled.ol`
  padding: 0;
  width: 100%;
`;
const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  return (
    <ThemeProvider theme={theme}>
      <Title>JdbGifApp</Title>
      <AddCategory setCategories={setCategories} />
      <ListaContainer>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ListaContainer>
    </ThemeProvider>
  );
};

export default GifExpertApp;
