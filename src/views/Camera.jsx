// export default CameraRoot;
// MOCK camera to test output

// first, let's render the text

import React from 'react';

import './Camera.css';
import { useImageContext } from '../ImageContext/ImageContext';
import { TextCanvas } from '../components/TextCanvas';
import { TextImage } from '../components/TextImage';
import { Controls } from '../components/Controls';

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

// import React, { useRef } from 'react';

// export const Camera = () => {
//   const cameraFrame = useRef(null);
//   const position = { x: 0, y: 50 };
//   return (
//     <div>
//       <iframe
//         ref={cameraFrame}
//         src="texture_demo.html"
//         width="1000"
//         height="700"
//         frameBorder="0"
//       />
//       <div>
//         <button
//           onClick={() => {
//             cameraFrame.current.contentWindow.postMessage(
//               JSON.stringify(position)
//             );
//           }}
//         >
//           change position
//         </button>
//       </div>
//     </div>
//   );
// };
