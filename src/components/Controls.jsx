import React from "react";

import "./Controls.css";
import { useImageContext } from "../ImageContext/ImageContext";

export const Controls = ({ onClose }) => {
  const { state, dispatch } = useImageContext();
  const { height, width, fontSize } = state;

  // ensures values are stored as numbers
  const setRange = e => {
    const property = e.target.name;
    const value = parseInt(e.target.value);
    dispatch({ type: "CANVAS_UPDATED", property, value });
  };

  return (
    <div>
      <div className="Controls-topBar">
        <button className="Controls-closeButton" onClick={onClose}>
          x
        </button>
      </div>
      <div>
        <label>width:</label>
        <input
          type="range"
          name="width"
          value={width}
          min={256}
          max={1024}
          onChange={setRange}
        />
      </div>
      <div>
        <label>height:</label>
        <input
          type="range"
          name="height"
          value={height}
          min={256}
          max={1024}
          onChange={setRange}
        />
      </div>
      <div>
        <label>font-size:</label>
        <input
          type="range"
          name="fontSize"
          value={fontSize}
          min={50}
          max={500}
          onChange={setRange}
        />
      </div>
    </div>
  );
};
