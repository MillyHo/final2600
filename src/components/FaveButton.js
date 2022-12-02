import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FaveButton(props) {
  const Favourite = (
    <button type="button" className="btn btn-danger" id={props.id}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="orange"
        className="bi bi-heart"
        viewBox="0 0 16 16"
      >
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
      </svg>
    </button>
  );
  const notFavourite = (
    <button type="button" className="btn btn-outline-warning" id={props.id}>
      Unlove
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        style={{ marginLeft: "0.5rem" }}
        viewBox="0 0 512 512"
      >
        <path d="M119.4 44.1c23.3-3.9 46.8-1.9 68.6 5.3l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5 .3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8L296.8 61.8c28.5-16.7 62.4-23.2 95.7-17.6C461.5 55.6 512 115.2 512 185.1v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141z" />
      </svg>
    </button>
  );

  const [markFave, setFave] = useState(false);

  return (
    <Link
      onClick={() => {
        setFave(!markFave);
        props.toggleFave(props.id);
      }}
    >
      {markFave ? Favourite : notFavourite}
    </Link>
  );
}

//<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
