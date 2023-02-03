import React, { useState } from "react";

import useGif from "../useGif";

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGifs } = useGif(tag);

  return (
    <div className='container'>
      <h1>Random {tag} Gif</h1>
      <img width='500' src={gif} alt='random  gif' />
      <input type='text' value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGifs(tag)}>CLICK FOR NEW</button>
    </div>
  );
};

export default Tag;
