import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { useImageContext } from "../ImageContext/ImageContext";

import "./Viewfinder.css";

export const Viewfinder = withRouter(({ location }) => {
  const { state } = useImageContext();
  const { imageURL } = state;

  const cameraActive = location.pathname === "/camera";

  const cameraFrame = useRef(null);

  useEffect(() => {
    cameraFrame.current.contentWindow.postMessage(JSON.stringify(imageURL));
  }, [imageURL]);

  return (
    <iframe
      ref={cameraFrame}
      hidden={!cameraActive}
      title="viewfinder"
      className="Viewfinder"
      src="ar-page.html"
    />
  );
});
