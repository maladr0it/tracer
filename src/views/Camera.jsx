import React, { useState } from "react";

import "./Camera.css";
import { useImageContext } from "../ImageContext/ImageContext";
import { TextCanvas } from "../components/TextCanvas";
import { MenuButton } from "../components/MenuButton";
import { Controls } from "../components/Controls";

export const Camera = () => {
  const { state } = useImageContext();
  const [controlsOpen, setControlsOpen] = useState(false);

  const toggleControls = () => {
    setControlsOpen(prev => !prev);
  };

  return (
    <>
      <MenuButton onClick={toggleControls} />
      <div className="Camera">
        {/* <TextImage imageURL={imageURL} /> */}
        <TextCanvas />
        {controlsOpen && <Controls />}
      </div>
    </>
  );
};
