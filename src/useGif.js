import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGifs = async (tag) => {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

    const imageURL = data.data.images.downsized_large.url;
    setGif(imageURL);
  };

  useEffect(() => {
    fetchGifs("dog");
  }, []);

  return { gif, fetchGifs };
};

export default useGif;
