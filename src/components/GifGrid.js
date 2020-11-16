import React from "react";
import styled from "styled-components";

import GifGridItem from "./GifGridItem";
import Paper from "@material-ui/core/Paper";
import { useFetchGifs } from "../hooks/useFetchGifs";

const ContainerCard = styled(Paper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: transparent !important;
  padding: 1.2rem 0;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {loading && <p>cargando...</p>}
      <ContainerCard elevation={3}>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </ContainerCard>
    </>
  );
};

export default GifGrid;
