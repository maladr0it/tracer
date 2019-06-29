// MOCK camera to test output

// first, let's render the text

import React from "react";

import "./Camera.css";
import { useImageContext } from "../ImageContext/ImageContext";
import { TextCanvas } from "../components/TextCanvas";
import { TextImage } from "../components/TextImage";
import { Controls } from "../components/Controls";

export const Camera = () => {
  const { state, dispatch } = useImageContext();
  const { imageURL } = state;

  return (
    <div className="Camera">
      <h1>THIS IS THE CAMERA</h1>
      <div className="Camera-viewport">
        <TextCanvas />
        <TextImage imageURL={imageURL} />
      </div>
      <Controls />
      <div>NAV_BAR</div>
    </div>
  );
};
