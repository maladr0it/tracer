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
      {/* <iframe
        title="camera-viewport"
        className="Camera-viewport"
        src="ar-page.html"
      /> */}
      <div className="Camera-controls">
        <TextImage imageURL={imageURL} />
        <TextCanvas />
        <Controls />
      </div>
    </div>
  );
};
