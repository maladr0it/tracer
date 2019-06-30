import React, { useEffect, useRef } from 'react';
import { Stage, Layer, Text, Rect } from 'react-konva';

import { useImageContext } from '../ImageContext/ImageContext';

const BORDER_WIDTH = 4;
const TEXT_MARGIN = 10;

export const TextCanvas = () => {
  const stageRef = useRef(null);
  const { state, dispatch } = useImageContext();
  const { text, fontSize, width, height } = state;

  useEffect(() => {
    const imageURL = stageRef.current.getStage().toDataURL();
    dispatch({ type: 'IMAGE_UPDATED', imageURL });
  }, [text, fontSize, width, height, dispatch]);

  return (
    <Stage
      ref={stageRef}
      style={{ display: 'none' }}
      width={width}
      height={height}
    >
      <Layer>
        <Rect
          height={height}
          width={width}
          stroke="fuchsia"
          strokeWidth={BORDER_WIDTH}
        />
        <Text
          x={TEXT_MARGIN}
          y={TEXT_MARGIN}
          fontSize={fontSize}
          width={width - 2 * TEXT_MARGIN}
          height={height - 2 * TEXT_MARGIN}
          text={text}
          opacity={0.3}
          fontFamily="azuki"
        />
      </Layer>
    </Stage>
  );
};
