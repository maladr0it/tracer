import React, { useEffect, useRef } from "react";
import { Stage, Layer, Text, Rect } from "react-konva";

const BORDER_WIDTH = 4;
const TEXT_MARGIN = 10;

export const TextCanvas = ({ text, fontSize, width, height, onUpdate }) => {
  const stageRef = useRef(null);

  useEffect(() => {
    const output = stageRef.current.getStage().toDataURL();
    onUpdate(output);
  }, [text, fontSize, width, height, onUpdate]);

  return (
    <Stage
      ref={stageRef}
      style={{ display: "none" }}
      width={width}
      height={height}
    >
      <Layer>
        <Rect
          height={height}
          width={width}
          stroke="black"
          strokeWidth={BORDER_WIDTH}
        />
        <Text
          x={TEXT_MARGIN}
          y={TEXT_MARGIN}
          fontSize={fontSize}
          width={width - 2 * TEXT_MARGIN}
          height={height - 2 * TEXT_MARGIN}
          text={text}
        />
      </Layer>
    </Stage>
  );
};
