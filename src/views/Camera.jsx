import React, { useState } from "react";

import "./Camera.css";
import { useImageContext } from "../ImageContext/ImageContext";
import { TextCanvas } from "../components/TextCanvas";
import { TextImage } from "../components/TextImage";
import { MenuButton } from "../components/MenuButton";
import { Controls } from "../components/Controls";
// import { Controls } from "../components/Controls";

export const Camera = () => {
  const { state } = useImageContext();
  const [controlsOpen, setControlsOpen] = useState(true);

  return (
    <div className="Camera">
      {/* <TextImage imageURL={imageURL} /> */}
      <TextCanvas />
      <MenuButton onClick={() => console.log("hi")} />
      {controlsOpen && <Controls />}
    </div>
  );
};
