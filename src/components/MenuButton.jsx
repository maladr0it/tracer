import React from "react";

import "./MenuButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

export default class MenuButton extends React.Component {
  render() {
    return (
      <div className="menuButtonContainer">
        <button className="menuButton">
          <FontAwesomeIcon icon={faSlidersH} size="2x" />
        </button>
      </div>
    );
  }
}
