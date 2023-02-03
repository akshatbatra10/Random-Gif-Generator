import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("dogs");

  const fetchGifs = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);

    const imageURL = data.data.images.downsized_large.url;
    setGif(imageURL);
  };

  const handleClick = () => {
    fetchGifs(tag);
  };

  useEffect(() => {
    fetchGifs("dog");
  }, []);

  return (
    <div className='container'>
      <h1>Random {tag} Gif</h1>
      <img width='500' src={gif} alt='random  gif' />
      <input type='text' value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};

export default Tag;
