import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.querySelector('body');

function CameraRoot(props) {
  const el = document.createElement('a-scene');
  el.setAttribute('embedded', '');
  el.setAttribute('arjs', '');

  useEffect(() => {
    modalRoot.prepend(el);
    return () => modalRoot.removeChild(el);
  }, []);

  const children = (
    <>
      <a-marker preset='hiro'>
        <a-box position='0 0.5 0' material='color: yellow;' />
      </a-marker>
      <a-entity camera />
    </>
  );

  return ReactDOM.createPortal(children, el);
}

export default CameraRoot;
