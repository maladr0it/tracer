import React from "react";

export const Controls = ({
  fontSize,
  setFontSize,
  width,
  setWidth,
  height,
  setHeight
}) => {
  // ensures values are stored as numbers
  const setRange = (updater, e) => {
    updater(parseInt(e.target.value));
  };

  return (
    <>
      <h2>controls</h2>
      <div>
        <label>width: </label>
        <input
          type="range"
          value={width}
          min={256}
          max={1024}
          onChange={e => setRange(setWidth, e)}
        />
      </div>
      <div>
        <label>height: </label>
        <input
          type="range"
          value={height}
          min={256}
          max={1024}
          onChange={e => setRange(setHeight, e)}
        />
      </div>
      <div>
        <label>font-size: </label>
        <input
          type="range"
          value={fontSize}
          min={50}
          max={500}
          onChange={e => setRange(setFontSize, e)}
        />
      </div>
    </>
  );
};
