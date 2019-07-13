import React from "react";

import "./FloatingButton.css";

export const FloatingButton = ({ className, ...rest }) => {
  return <button className={`FloatingButton ${className}`} {...rest} />;
};
