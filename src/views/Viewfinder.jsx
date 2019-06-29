import React from "react";
import { withRouter } from "react-router-dom";

import "./Viewfinder.css";

export const Viewfinder = withRouter(({ location }) => {
  const cameraActive = location.pathname === "/camera";
  return (
    <iframe
      hidden={!cameraActive}
      title="viewfinder"
      className="Viewfinder"
      src="ar-page.html"
    />
  );
});
