import React from "react";

export default function FilterButton(props) {
  return (
    <button
      type="button"
      onClick={() => props.setFilter(props.name)}
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}
