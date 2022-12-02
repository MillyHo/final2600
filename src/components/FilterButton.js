import React from "react";
import "bootstrap";

export default function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn btn-outline-secondary"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
      style={{marginTop: "1rem"}}
    >
      <span>{props.name}</span>
    </button>
  );
}
