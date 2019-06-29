import React, { useState } from "react";

import { TextInput } from "./TextInput";
import { Canvas } from "./Canvas";

export const Editor = () => {
  const [text, setText] = useState("");

  return (
    <>
      <TextInput onSubmit={value => setText(value)} />
      <Canvas text={text} />
    </>
  );
};
