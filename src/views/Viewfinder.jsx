import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { useImageContext } from '../ImageContext/ImageContext';

import './Viewfinder.css';

export const Viewfinder = withRouter(({ location }) => {
  const cameraActive = location.pathname === '/camera';
  const { state } = useImageContext();
  const { imageURL } = state;

  const cameraFrame = useRef(null);

  const sendMessage = message => {
    cameraFrame.current.contentWindow.postMessage(JSON.stringify(message));
  };

  useEffect(() => sendMessage(imageURL), [imageURL]);

  return (
    <>
      <iframe
        ref={cameraFrame}
        hidden={!cameraActive}
        title="viewfinder"
        className="Viewfinder"
        src="ar-page.html"
      />
      {/* button for testing purposes */}
      <button
        style={{ position: 'absolute', top: '0', left: '0' }}
        onClick={() => sendMessage('/doot.png')}
      >
        doot
      </button>
    </>
  );
});
