import React from "react";

const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=ylxzNrvpUUBzP2IXyvul9y2eo95tRjmI";
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }));

    console.log(gifs);
  };
  getGifs();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

export default GifGrid;
