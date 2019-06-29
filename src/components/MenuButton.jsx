import React from "react";

import "./MenuButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

export const MenuButton = ({ ...rest }) => {
  return (
    <button className="MenuButton" {...rest}>
      <FontAwesomeIcon icon={faSlidersH} size="2x" />
    </button>
  );
};
