// MOCK camera to test output

// first, let's render the text

import React from "react";

import "./Camera.css";
import { TextCanvas } from "../components/TextCanvas";
import { useImageContext } from "../ImageContext/ImageContext";

export const Camera = () => {
  const { state: imageProperties, dispatch } = useImageContext();
  // const { text, width, height, fontSize } = state;

  console.log(imageProperties);

  return (
    <div className="Camera">
      <h1>THIS IS THE CAMERA</h1>
      <div className="Camera-viewport">
        <TextCanvas
        // onUpdate={url => dispatch({ type: "IMAGE_UPDATED", imageURL: url })}
        />
      </div>
      <div>CONTROLS</div>
      <div>NAV_BAR</div>
    </div>
  );
};
