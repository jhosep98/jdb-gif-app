import React, { useState, useEffect } from "react";
import styled from "styled-components";

import GifGridItem from "./GifGridItem";
import Paper from "@material-ui/core/Paper";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

const ContainerCard = styled(Paper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: #fdfdfd;
  padding: 1.2rem 0;
`;

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);

  const { data, loading } = useFetchGifs();
  return (
    <>
      <h3>{category}</h3>
      {loading ? "cargando.....!" : "cargado."}
      {/* <ContainerCard elevation={1}>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </ContainerCard> */}
    </>
  );
};

export default GifGrid;
