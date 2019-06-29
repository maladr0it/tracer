import React, { useState } from "react";

import { TextInput } from "./TextInput";
import { Controls } from "./Controls";
import { TextCanvas } from "./TextCanvas";
import { TextImage } from "./TextImage";

export const Editor = () => {
  const [text, setText] = useState("");
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);
  const [fontSize, setFontSize] = useState(100);
  const [imageURL, setImageURL] = useState("");

  return (
    <>
      <TextInput onSubmit={setText} />
      <Controls
        fontSize={fontSize}
        setFontSize={setFontSize}
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
      />
      <TextCanvas
        text={text}
        fontSize={fontSize}
        width={width}
        height={height}
        onUpdate={setImageURL}
      />
      {imageURL && <TextImage imageURL={imageURL} />}
    </>
  );
};
