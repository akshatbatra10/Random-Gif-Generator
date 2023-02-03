import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");

  const fetchGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);

    const imageURL = data.data.images.downsized_large.url;
    setGif(imageURL);
  };

  const handleClick = () => {
    fetchGifs();
  };

  useEffect(() => {
    fetchGifs();
  }, []);
  return (
    <div className='container'>
      <h1>Random Gif</h1>
      <img width='500' src={gif} alt='random gif' />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};

export default Random;
