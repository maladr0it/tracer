// import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';

// const modalRoot = document.querySelector('body');

// function CameraRoot(props) {
//   const el = document.createElement('a-scene');
//   el.setAttribute('embedded', '');
//   el.setAttribute('arjs', '');

//   useEffect(() => {
//     modalRoot.prepend(el);
//     return () => modalRoot.removeChild(el);
//   }, []);

//   const children = (
//     <>
//       <a-marker preset='hiro'>
//         <a-box position='0 0.5 0' material='color: yellow;' />
//       </a-marker>
//       <a-entity camera />
//     </>
//   );

//   return ReactDOM.createPortal(children, el);
// }

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
