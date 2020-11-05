import React, { useState, useEffect } from "react";
import styled from "styled-components";

import GifGridItem from "./GifGridItem";
import Paper from "@material-ui/core/Paper";

const ContainerCard = styled(Paper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: #fdfdfd;
  padding: 1.2rem 0;
`;

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=cry&limit=10&api_key=ylxzNrvpUUBzP2IXyvul9y2eo95tRjmI";
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }));
    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <ContainerCard elevation={1}>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </ContainerCard>
    </>
  );
};

export default GifGrid;
