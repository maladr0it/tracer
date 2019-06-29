import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Text, Rect } from "react-konva";

const DEMO_TEXT =
  "fdjsklf;ds fdsjklfdsjalkf; djsakfl;dsj akfl;dsj fklds;jfkl;sda jfkldsfj dskla;fjskdlf;jakf;ad";

const BORDER_WIDTH = 4;
const TEXT_MARGIN = 10;

export const Canvas = ({ text }) => {
  const stageRef = useRef(null);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(80);
  const [fontSize, setFontSize] = useState(16);

  const [imageURL, setimageURL] = useState("");

  const convertToImage = () => {
    const output = stageRef.current.getStage().toDataURL();
    setimageURL(output);
  };

  return (
    <div>
      <h2>Image is below:</h2>
      <button onClick={convertToImage}>CONVERT</button>
      <Stage ref={stageRef} width={width} height={height}>
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
            width={width - 2 * TEXT_MARGIN}
            height={height - 2 * TEXT_MARGIN}
            text={text}
          />
        </Layer>
      </Stage>
      <h2>Produced image is below:</h2>
      <img src={imageURL} alt="your text" />
    </div>
  );
};
