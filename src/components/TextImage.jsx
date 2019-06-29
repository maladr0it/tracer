import React from "react";

import "./TextImage.css";

export const TextImage = ({ imageURL }) => {
  return <img className="TextImage" src={imageURL} alt="your message" />;
};
