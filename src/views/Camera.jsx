import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "./Camera.css";
import { FloatingButton } from "../components/FloatingButton";
import { TextCanvas } from "../components/TextCanvas";
import { Controls } from "../components/Controls";

export const Camera = ({ history }) => {
  const [controlsOpen, setControlsOpen] = useState(false);

  return (
    <div className="Camera">
      <TextCanvas />
      <FloatingButton
        className="Camera-backButton"
        onClick={() => history.goBack()}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="3x" />
      </FloatingButton>
      {!controlsOpen && (
        <FloatingButton
          className="Camera-controlsButton"
          onClick={() => setControlsOpen(true)}
        >
          <FontAwesomeIcon icon={faSlidersH} size="2x" />
        </FloatingButton>
      )}
      <div className="Camera-controls">
        {controlsOpen && <Controls onClose={() => setControlsOpen(false)} />}
      </div>
    </div>
  );
};
