import React from "react";
import FaveButton from "../components/FaveButton";

const Meme = (props) => {
  const divStyle = {
    width: "18rem",
    border: "none",
    padding: "2rem",
  };

  const { meme } = props;

  
  return (
    <div class="container">
    <div className="row">
      <div className="col-6">
        <div className="card-group">
        <div className="card">
          <div className="card-body" key={meme.id}>
            <img className="card-img-top" src={meme.url} />
            <span className="card-title">{meme.name}</span>
            <br/>
            <FaveButton />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Meme;
