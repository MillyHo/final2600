import React from "react";
import Meme from "./Meme";
import "bootstrap";

const Memes = (props) => {
  const { memes, isLoading } = props;

  if (!memes || memes.length === 0) {
    return <p>No memes available.</p>;
  }

  return (
    <div className="container">
      {memes.map((meme) => (
        <Meme meme={meme} key={meme.id} />
      ))}
      ;
    </div>
  );
};
export default Memes;
