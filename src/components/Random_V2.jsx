import React from "react";

import useGif from "../useGif";

const Tag = () => {
  const { gif, fetchGifs } = useGif();

  return (
    <div className='container'>
      <h1>Random Gif</h1>
      <img width='500' src={gif} alt='random  gif' />
      <button onClick={fetchGifs}>CLICK FOR NEW</button>
    </div>
  );
};

export default Tag;
